"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import * as CONSTANTS from "@/constants/constants";

const ChatWithSIBInfotech = () => {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", query: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: CONSTANTS.API_TOKEN,
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const validateLead = () => {
    const newErrors = {};
    if (!lead.name || lead.name.length < 3) newErrors.name = "Enter a valid name";
    if (!lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) newErrors.email = "Enter a valid email";
    if (!lead.phone || lead.phone.length < 10) newErrors.phone = "Enter a valid phone number";
    if (!lead.query || lead.query.length < 5) newErrors.query = "Enter a valid query";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLeadSubmit = async (e) => {
        
    e.preventDefault();
    if (!validateLead()) return;
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("action", "insert_lead");
    formData.append("name", lead.name);
    formData.append("email", lead.email);
    formData.append("phone", lead.phone);
    formData.append("query", lead.query);

    try {
      const res = await fetch(`${CONSTANTS.API_URL}chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: formData.toString()
      });
      const data = await res.json();

      if (data.success) {
        setSessionId(data.session_id);
        setMessages([
          { sender: "user", content: lead.query },
          { sender: "bot", content: data.response }
        ]);
        setShowModal(false);
      } else {
        setErrors({ form: data.error || "Something went wrong" });
      }
    } catch (error) {
      setErrors({ form: "Server error" });
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !sessionId) return;

    const newMessages = [...messages, { sender: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const formData = new URLSearchParams();
    formData.append("action", "send_message");
    formData.append("message", input);
    formData.append("session_id", sessionId);

    try {
      const res = await fetch(`${CONSTANTS.API_URL}chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: formData.toString()
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { sender: "bot", content: data.response || "Sorry, I didn't get that." }
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot", content: "Something went wrong. Please try again later." }
      ]);
    }
  };

  return (
    <>
      <Head>
        <title>Chat with SIB Infotech</title>
        <meta name="description" content="Start a chat with SIB Infotech. We’re here to assist you with digital marketing, web development, and more." />
      </Head>

      {showModal && (
        <div className="modal-overlay">
          <form onSubmit={handleLeadSubmit} className="modal-content">
            <h2>Welcome to SIB Infotech Chat</h2>
            <p>Please provide your details to begin</p>

            {Object.values(errors).length > 0 && (
              <div className="error">{errors.form || "Fix the errors below."}</div>
            )}

            <input type="text" placeholder="Full Name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
            {errors.name && <div className="error">{errors.name}</div>}

            <input type="email" placeholder="Email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
            {errors.email && <div className="error">{errors.email}</div>}

            <input type="tel" placeholder="Phone" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
            {errors.phone && <div className="error">{errors.phone}</div>}

            <textarea placeholder="Your Query" value={lead.query} onChange={(e) => setLead({ ...lead, query: e.target.value })}></textarea>
            {errors.query && <div className="error">{errors.query}</div>}

            <button type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Start Chat"}
            </button>
          </form>
        </div>
      )}

      <div className="chat-container">
        <div className="chat-header">
          <h1>Chat with SIB Infotech</h1>
          <p>We typically reply within minutes</p>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.content}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatWithSIBInfotech;
