// comps/admin-trends/ArticleEditor.js
// WYSIWYG + HTML source editor for AI-generated articles. Built on Tiptap.
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import {
  FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaQuoteLeft, FaCode,
  FaLink, FaImage, FaTable, FaRotateLeft, FaRotateRight, FaMagnifyingGlass,
  FaCode as FaCodeAlt, FaEye,
} from "react-icons/fa6";

function replaceInHtml(html, find, replace, { all = true } = {}) {
  if (!find) return html;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
    const needle = find;
    let replacedOnce = false;
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    for (const textNode of nodes) {
      if (!all && replacedOnce) break;
      if (textNode.nodeValue.includes(needle)) {
        if (all) {
          textNode.nodeValue = textNode.nodeValue.split(needle).join(replace);
        } else {
          textNode.nodeValue = textNode.nodeValue.replace(needle, replace);
          replacedOnce = true;
        }
      }
    }
    return doc.body.innerHTML;
  } catch {
    return html;
  }
}

export default function ArticleEditor({ html, onChange, placeholder }) {
  const [mode, setMode] = useState("visual"); // "visual" | "html"
  const [sourceValue, setSourceValue] = useState(html || "");
  const [findOpen, setFindOpen] = useState(false);
  const [findTerm, setFindTerm] = useState("");
  const [replaceTerm, setReplaceTerm] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
      Underline,
      Link.configure({ openOnClick: false, autolink: true }),
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({ placeholder: placeholder || "Generate or write your article..." }),
      CharacterCount,
    ],
    content: html || "",
    onUpdate: ({ editor }) => {
      const next = editor.getHTML();
      setSourceValue(next);
      onChange?.(next);
    },
    immediatelyRender: false,
  });

  // Keep editor content in sync when a new article is loaded from outside.
  useEffect(() => {
    if (editor && html !== undefined && html !== editor.getHTML()) {
      editor.commands.setContent(html || "", false);
      setSourceValue(html || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html, editor]);

  const applySource = useCallback(() => {
    editor?.commands.setContent(sourceValue, false);
    onChange?.(sourceValue);
    setMode("visual");
  }, [editor, sourceValue, onChange]);

  const handleReplaceAll = () => {
    if (!editor || !findTerm) return;
    const next = replaceInHtml(editor.getHTML(), findTerm, replaceTerm, { all: true });
    editor.commands.setContent(next, false);
    setSourceValue(next);
    onChange?.(next);
  };

  const addLink = () => {
    const url = window.prompt("Link URL:");
    if (!url) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt("Image URL:");
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  };

  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const words = editor?.storage.characterCount.words() || 0;
  const chars = editor?.storage.characterCount.characters() || 0;

  if (!editor) return null;

  return (
    <div className="tiptap-shell">
      <div className="tiptap-toolbar">
        <div className="toolbar-group">
          <button type="button" className={editor.isActive("bold") ? "active" : ""} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold"><FaBold /></button>
          <button type="button" className={editor.isActive("italic") ? "active" : ""} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic"><FaItalic /></button>
          <button type="button" className={editor.isActive("underline") ? "active" : ""} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline"><FaUnderline /></button>
        </div>
        <div className="toolbar-group">
          {[1, 2, 3, 4].map((level) => (
            <button
              key={level}
              type="button"
              className={editor.isActive("heading", { level }) ? "active" : ""}
              onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
              title={`Heading ${level}`}
            >
              H{level}
            </button>
          ))}
          <button type="button" className={editor.isActive("paragraph") ? "active" : ""} onClick={() => editor.chain().focus().setParagraph().run()} title="Paragraph">P</button>
        </div>
        <div className="toolbar-group">
          <button type="button" className={editor.isActive("bulletList") ? "active" : ""} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet list"><FaListUl /></button>
          <button type="button" className={editor.isActive("orderedList") ? "active" : ""} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Numbered list"><FaListOl /></button>
          <button type="button" className={editor.isActive("blockquote") ? "active" : ""} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Quote"><FaQuoteLeft /></button>
          <button type="button" className={editor.isActive("codeBlock") ? "active" : ""} onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Code block"><FaCode /></button>
        </div>
        <div className="toolbar-group">
          <button type="button" onClick={addLink} title="Insert link"><FaLink /></button>
          <button type="button" onClick={addImage} title="Insert image"><FaImage /></button>
          <button type="button" onClick={addTable} title="Insert table"><FaTable /></button>
        </div>
        <div className="toolbar-group">
          <button type="button" onClick={() => editor.chain().focus().undo().run()} title="Undo"><FaRotateLeft /></button>
          <button type="button" onClick={() => editor.chain().focus().redo().run()} title="Redo"><FaRotateRight /></button>
          <button type="button" onClick={() => setFindOpen((v) => !v)} title="Find & Replace"><FaMagnifyingGlass /></button>
        </div>
        <div className="toolbar-group ms-auto">
          <button type="button" className={mode === "visual" ? "active" : ""} onClick={() => setMode("visual")} title="Visual editor"><FaEye /> Visual</button>
          <button
            type="button"
            className={mode === "html" ? "active" : ""}
            onClick={() => {
              setSourceValue(editor.getHTML());
              setMode("html");
            }}
            title="HTML source"
          >
            <FaCodeAlt /> HTML
          </button>
        </div>
      </div>

      {findOpen && (
        <div className="find-replace-bar">
          <input placeholder="Find..." value={findTerm} onChange={(e) => setFindTerm(e.target.value)} />
          <input placeholder="Replace with..." value={replaceTerm} onChange={(e) => setReplaceTerm(e.target.value)} />
          <button type="button" onClick={handleReplaceAll} disabled={!findTerm}>Replace All</button>
        </div>
      )}

      {mode === "visual" ? (
        <EditorContent editor={editor} className="tiptap-content" />
      ) : (
        <div className="html-source-wrap">
          <textarea
            value={sourceValue}
            onChange={(e) => setSourceValue(e.target.value)}
            spellCheck={false}
          />
          <button type="button" className="apply-html-btn" onClick={applySource}>Apply HTML</button>
        </div>
      )}

      <div className="tiptap-footer">
        <span>{words} words</span>
        <span>{chars} characters</span>
      </div>

      <style jsx>{`
        .tiptap-shell {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #fff;
          overflow: hidden;
        }
        .tiptap-toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.5rem 0.6rem;
          border-bottom: 1px solid #eef1f5;
          background: #f8fafc;
        }
        .toolbar-group {
          display: flex;
          gap: 0.15rem;
          border-right: 1px solid #e2e8f0;
          padding-right: 0.5rem;
        }
        .toolbar-group:last-child,
        .toolbar-group.ms-auto {
          border-right: none;
          margin-left: auto;
        }
        .toolbar-group button {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 6px;
          padding: 0.3rem 0.5rem;
          font-size: 0.8rem;
          color: #334155;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        .toolbar-group button:hover {
          background: #e2e8f0;
        }
        .toolbar-group button.active {
          background: #dbeafe;
          color: #1d4ed8;
          border-color: #bfdbfe;
        }
        .find-replace-bar {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem 0.6rem;
          background: #fffbeb;
          border-bottom: 1px solid #fde68a;
        }
        .find-replace-bar input {
          flex: 1;
          padding: 0.35rem 0.6rem;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 0.85rem;
        }
        .find-replace-bar button {
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.35rem 0.9rem;
          font-size: 0.8rem;
          white-space: nowrap;
        }
        .find-replace-bar button:disabled {
          opacity: 0.5;
        }
        :global(.tiptap-content) {
          min-height: 420px;
          max-height: 640px;
          overflow-y: auto;
          padding: 1.25rem 1.5rem;
        }
        :global(.tiptap-content .ProseMirror) {
          outline: none;
          min-height: 400px;
        }
        :global(.tiptap-content h1) { font-size: 1.7rem; font-weight: 800; margin: 0.6rem 0; }
        :global(.tiptap-content h2) { font-size: 1.35rem; font-weight: 800; margin: 1rem 0 0.5rem; }
        :global(.tiptap-content h3) { font-size: 1.1rem; font-weight: 700; margin: 0.8rem 0 0.4rem; }
        :global(.tiptap-content p) { margin-bottom: 0.75rem; line-height: 1.65; }
        :global(.tiptap-content table) { border-collapse: collapse; width: 100%; margin: 1rem 0; }
        :global(.tiptap-content td, .tiptap-content th) { border: 1px solid #cbd5e1; padding: 0.4rem 0.6rem; }
        :global(.tiptap-content blockquote) { border-left: 3px solid #2563eb; padding-left: 1rem; color: #475569; }
        :global(.tiptap-content .is-editor-empty::before) {
          content: attr(data-placeholder);
          color: #94a3b8;
          float: left;
          height: 0;
          pointer-events: none;
        }
        .html-source-wrap {
          padding: 1rem;
        }
        .html-source-wrap textarea {
          width: 100%;
          min-height: 420px;
          font-family: "Courier New", monospace;
          font-size: 0.8rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
        }
        .apply-html-btn {
          margin-top: 0.6rem;
          background: #0f172a;
          color: #fff;
          border: none;
          padding: 0.5rem 1.1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }
        .tiptap-footer {
          display: flex;
          gap: 1rem;
          padding: 0.4rem 0.9rem;
          border-top: 1px solid #eef1f5;
          background: #f8fafc;
          font-size: 0.75rem;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}
