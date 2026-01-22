import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, Paperclip, X, Play, Image as ImageIcon, Download, Code, Network, Loader2 } from 'lucide-react';
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

        // Simulate AI response with a "generating" state
        setIsTyping(true);
        setTimeout(() => {
            let mediaContent = null;
            let responseText = "";
            const lowerToolName = toolName.toLowerCase();

            if (lowerToolName.includes("video")) {
                mediaContent = { type: 'video' };
                responseText = "I've analyzed your prompt and crafted a cinematic sequence that aligns with your creative vision. The video features dynamic lighting and smooth transitions to enhance the narrative flow.";
            } else if (lowerToolName.includes("product")) {
                mediaContent = { type: 'image' };
                responseText = "Based on your specifications, I've generated a high-fidelity product prototype. Notice the attention to ergonomic details and the modern material finish.";
            } else if (lowerToolName.includes("agent")) {
                mediaContent = {
                    type: 'code',
                    codeArgs: {
                        name: "SalesAgent_Turbo",
                        role: "Senior Sales Representative",
                        model: "gpt-4-turbo-preview"
                    }
                };
                responseText = "I've architected a robust agent configuration tailored for high-performance sales interactions. This setup includes advanced natural language processing capabilities and automated objection handling.";
            } else if (lowerToolName.includes("system")) {
                mediaContent = { type: 'diagram' };
                responseText = "Here is an optimized system architecture designed for scalability and fault tolerance. I've successfully decoupled the core services to ensure high availability under load.";
            } else {
                responseText = `I have successfully processed your request regarding "${userMsg.text}". I've applied optimization algorithms to ensure the best possible result for you.`;
            }

            const aiMsg = {
                id: Date.now() + 1,
                sender: 'ai',
                text: responseText,
                media: mediaContent
            };
            // Ensure mediaContent is surely attached
            console.log("Generating response for:", toolName, "Media:", mediaContent);

            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500); // Reduced to 1.5s to be faster
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
                                {msg.media && (
                                    <div className="media-container">
                                        {msg.media.type === 'video' && (
                                            <div className="mock-video-player">
                                                <div className="video-preview-overlay">
                                                    <Play size={48} fill="white" />
                                                </div>
                                                <div className="video-controls">
                                                    <div className="progress-bar"></div>
                                                    <div className="controls-row">
                                                        <Play size={16} fill="white" />
                                                        <span>00:00 / 00:15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {msg.media.type === 'image' && (
                                            <div className="mock-product-image">
                                                <ImageIcon size={48} />
                                                <span>Product Design Preview</span>
                                            </div>
                                        )}
                                        {msg.media.type === 'code' && (
                                            <div className="mock-code-block">
                                                <div className="code-header">
                                                    <Code size={16} />
                                                    <span>agent_config.json</span>
                                                </div>
                                                <pre>
                                                    {`{
  "agent_name": "${msg.media.codeArgs.name}",
  "role": "${msg.media.codeArgs.role}",
  "capabilities": [
    "natural_language_processing",
    "data_analysis",
    "automated_response"
  ],
  "model_config": {
    "provider": "openai",
    "model": "${msg.media.codeArgs.model}",
    "temperature": 0.7
  }
}`}
                                                </pre>
                                            </div>
                                        )}
                                        {msg.media.type === 'diagram' && (
                                            <div className="mock-system-diagram">
                                                <div className="diagram-node node-client">Client</div>
                                                <div className="diagram-files">
                                                    <div className="diagram-line"></div>
                                                    <div className="diagram-arrow">↓</div>
                                                </div>
                                                <div className="diagram-node node-lb">Load Balancer</div>
                                                <div className="diagram-files">
                                                    <div className="diagram-line"></div>
                                                    <div className="diagram-arrow">↓</div>
                                                </div>
                                                <div className="diagram-row">
                                                    <div className="diagram-node node-service">API Service A</div>
                                                    <div className="diagram-node node-service">API Service B</div>
                                                </div>
                                                <div className="diagram-watermark">
                                                    <Network size={24} />
                                                    <span>System Architecture</span>
                                                </div>
                                            </div>
                                        )}
                                        <button className="download-btn">
                                            <Download size={16} />
                                            Download {msg.media.type === 'video' ? 'Video' : msg.media.type === 'image' ? 'Design' : msg.media.type === 'code' ? 'Config' : 'Diagram'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message ai">
                            <div className="message-bubble generating-bubble">
                                <Bot size={16} className="msg-icon" />
                                <div className="typing-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <span className="generating-text">Generating premium content...</span>
                            </div>
                        </div>
                    )}
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
