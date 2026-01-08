import React, { useState, useRef } from 'react';
import { Send, Bot, Sparkles, Paperclip, X } from 'lucide-react';
import './ChatInterface.css';

const ChatInterface = ({ toolName, assistantName = "Assistant" }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: `Hello! I am your ${assistantName}. How can I help you with ${toolName} today?` }
    ]);
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const clearFile = () => {
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSend = () => {
        if (!input.trim() && !file) return;

        const userMsg = {
            id: Date.now(),
            sender: 'user',
            text: input,
            attachment: file ? { name: file.name, type: file.type } : null
        };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        clearFile();
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiMsg = {
                id: Date.now() + 1,
                sender: 'ai',
                text: `I have received your request regarding "${userMsg.text}". Processing with ${toolName}... (This is a demo response)`
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="chat-interface-wrapper">
            <div className="ai-sidebar">
                <div className="sidebar-header">
                    <Sparkles size={24} />
                    <h3>Optimization Assistant</h3>
                </div>
                <div className="sidebar-content">
                    <p>I am here to help optimize your prompt for better results.</p>
                    <div className="suggestion-box">
                        <h4>Tip:</h4>
                        <p>Try adding more specific constraints to your prompt for higher accuracy.</p>
                    </div>
                </div>
            </div>

            <div className="main-chat-area">
                <div className="chat-header">
                    <h2>{toolName}</h2>
                </div>

                <div className="messages-container">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            <div className="message-bubble">
                                {msg.sender === 'ai' && <Bot size={16} className="msg-icon" />}
                                {msg.attachment && (
                                    <div className="msg-attachment">
                                        <Paperclip size={14} />
                                        <span>{msg.attachment.name}</span>
                                    </div>
                                )}
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && <div className="typing-indicator">AI is working...</div>}
                </div>

                <div className="input-area">
                    {file && (
                        <div className="file-preview">
                            <span>{file.name}</span>
                            <button onClick={clearFile}><X size={14} /></button>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileSelect}
                        accept="image/*,.pdf,video/*"
                    />
                    <button className="attach-btn" onClick={() => fileInputRef.current?.click()}>
                        <Paperclip size={20} />
                    </button>
                    <textarea
                        placeholder="Type your prompt here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    />
                    <button onClick={handleSend} className="send-btn">
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
