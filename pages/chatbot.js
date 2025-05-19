"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const ChatWithSIBInfotech = () => {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", query: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

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

    try {
      const res = await fetch("/api/chatbot/submitLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(lead)
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
      console.error("Lead submission error:", error);
      setErrors({ form: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !sessionId) return;
    
    const userMessage = input.trim();
    const newMessages = [...messages, { sender: "user", content: userMessage }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/chatbot/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({ 
          message: userMessage, 
          session_id: sessionId 
        })
      });

      const data = await res.json();
      
      if (data.success) {
        setMessages([...newMessages, { sender: "bot", content: data.response }]);
      } else {
        setMessages([...newMessages, { sender: "bot", content: data.error || "Sorry, I didn't get that." }]);
      }
    } catch (err) {
      console.error("Message sending error:", err);
      setMessages([...newMessages, { sender: "bot", content: "Something went wrong. Please try again later." }]);
    }
  };

  return (
    <>
      <Head>
        <title>Chat with SIB Infotech</title>
        <meta name="description" content="Start a chat with SIB Infotech. We're here to assist you with digital marketing, web development, and more." />
      </Head>

      {/* Modal with non-dismissible backdrop */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" 
             onClick={(e) => e.stopPropagation()}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4" 
               onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Welcome to SIB Infotech Chat</h2>
            <p className="text-gray-600 text-sm mb-4">Please provide your details to begin</p>

            {errors.form && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded mb-4 text-sm">
                {errors.form}
              </div>
            )}

            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className={`w-full p-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500`} 
                  value={lead.name} 
                  onChange={(e) => setLead({ ...lead, name: e.target.value })} 
                />
                {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={`w-full p-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500`} 
                  value={lead.email} 
                  onChange={(e) => setLead({ ...lead, email: e.target.value })} 
                />
                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
              </div>

              <div>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className={`w-full p-2.5 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500`} 
                  value={lead.phone} 
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })} 
                />
                {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
              </div>

              <div>
                <textarea 
                  placeholder="Your Query" 
                  className={`w-full p-2.5 border ${errors.query ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 min-h-[100px]`} 
                  value={lead.query} 
                  onChange={(e) => setLead({ ...lead, query: e.target.value })}
                ></textarea>
                {errors.query && <div className="text-red-500 text-xs mt-1">{errors.query}</div>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-md transition-colors duration-300"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Please wait...
                  </div>
                ) : "Start Chat"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="bg-indigo-600 text-white p-4 shadow-md">
          <h1 className="text-lg font-semibold">Chat with SIB Infotech</h1>
          <p className="text-sm opacity-90">We typically reply within minutes</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && !showModal ? (
            <div className="text-center text-gray-500 mt-8">
              Welcome! Your conversation will appear here.
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`max-w-[80%] ${msg.sender === "user" ? "ml-auto" : "mr-auto"}`}>
                <div className={`p-3 rounded-lg shadow-sm ${
                  msg.sender === "user" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-white text-gray-800"
                }`}>
                  {msg.content}
                </div>
                <div className={`text-xs mt-1 text-gray-500 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}>
                  {msg.sender === "user" ? "You" : "SIB Infotech"}
                </div>
              </div>
            ))
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="bg-white p-4 border-t flex gap-2 shadow-lg">
          <input
            type="text"
            className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            disabled={showModal}
          />
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center justify-center"
            onClick={sendMessage}
            disabled={showModal || !input.trim()}
          >
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWithSIBInfotech;