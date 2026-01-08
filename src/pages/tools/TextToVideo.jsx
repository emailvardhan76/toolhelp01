import React from 'react';
import ChatInterface from '../../components/ChatInterface';

const TextToVideo = () => {
    return (
        <div className="tool-page container" style={{ paddingTop: '100px' }}>
            <ChatInterface
                toolName="Text to Video"
                assistantName="Video Director"
            />
        </div>
    );
};

export default TextToVideo;
