import React from 'react';
import ChatInterface from '../../components/ChatInterface';

const AgentGenerator = () => {
    return (
        <div className="tool-page container" style={{ paddingTop: '100px' }}>
            <ChatInterface
                toolName="AI Agent Generator"
                assistantName="Agent Architect"
            />
        </div>
    );
};

export default AgentGenerator;
