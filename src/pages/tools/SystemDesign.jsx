import React from 'react';
import ChatInterface from '../../components/ChatInterface';

const SystemDesign = () => {
    return (
        <div className="tool-page container" style={{ paddingTop: '100px' }}>
            <ChatInterface
                toolName="System Designing Help"
                assistantName="Systems Architect"
            />
        </div>
    );
};

export default SystemDesign;
