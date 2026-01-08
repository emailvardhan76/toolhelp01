import React from 'react';
import ToolCard from '../components/ToolCard';
import { Bot, Network, Video, Palette } from 'lucide-react';
import './Home.css';

const Home = () => {
    const tools = [
        {
            id: 1,
            title: 'AI Agent Generator',
            description: 'Summarize needs and generate accurate AI Agents.',
            icon: <Bot size={48} />,
            route: '/products/agent-generator',
            color: '#FF6B6B' // Pastel Red
        },
        {
            id: 2,
            title: 'System Designing Help',
            description: 'Get labeled system diagrams and explanations.',
            icon: <Network size={48} />,
            route: '/products/system-design',
            color: '#4ECDC4' // Teal
        },
        {
            id: 3,
            title: 'Text to Video',
            description: 'Generate accurate videos from your text prompts.',
            icon: <Video size={48} />,
            route: '/products/text-to-video',
            color: '#FFE66D' // Yellow
        },
        {
            id: 4,
            title: 'Prompt to Product',
            description: 'Visualize your product ideas from prompts or PDFs.',
            icon: <Palette size={48} />,
            route: '/products/product-design',
            color: '#1A535C' // Dark Teal
        }
    ];

    return (
        <div className="home-page">
            <div className="hero-section">
                <h1 className="hero-title">
                    {"TOOL help".split("").map((char, index) => (
                        <span key={index} className="hover-char" style={{ animationDelay: `${index * 50}ms` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <p className="hero-subtitle">Your Offline AI Powerhouse</p>
            </div>

            <div className="tools-grid container">
                {tools.map(tool => (
                    <ToolCard
                        key={tool.id}
                        {...tool}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
