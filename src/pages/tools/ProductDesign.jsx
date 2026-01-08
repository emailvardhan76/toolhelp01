import React from 'react';
import ChatInterface from '../../components/ChatInterface';

const ProductDesign = () => {
    return (
        <div className="tool-page container" style={{ paddingTop: '100px' }}>
            <ChatInterface
                toolName="Prompt to Product Design"
                assistantName="Product Designer"
            />
        </div>
    );
};

export default ProductDesign;
