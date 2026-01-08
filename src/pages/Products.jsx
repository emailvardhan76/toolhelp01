import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Network, Video, Palette } from 'lucide-react';
import './Products.css';

const Products = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 'agent',
            title: 'AI Agent Generator',
            description: 'Create custom offline AI agents tailored to your specific needs. Input text, PDFs, or images, and get a fully configured agent.',
            features: ['Multi-modal Input', 'Offline Execution', 'Custom Personalities'],
            route: '/products/agent-generator',
            color: '#FF6B6B',
            icon: <Bot size={120} strokeWidth={1} />
        },
        {
            id: 'system',
            title: 'System Designing Help',
            description: 'Architect complex systems with ease. describe your requirements and get a complete system design diagram with component breakdown.',
            features: ['Architecture Diagrams', 'Component Analysis', 'Scalability Tips'],
            route: '/products/system-design',
            color: '#4ECDC4',
            icon: <Network size={120} strokeWidth={1} />
        },
        {
            id: 'video',
            title: 'Text to Video',
            description: 'Transform your stories into reality. Advanced generative models create high-quality video clips from your text descriptions.',
            features: ['High Resolution', 'Style Control', 'Scene Consistency'],
            route: '/products/text-to-video',
            color: '#FFE66D',
            icon: <Video size={120} strokeWidth={1} />
        },
        {
            id: 'product',
            title: 'Prompt to Product',
            description: 'Visualize your next big idea. Generate photorealistic product designs and mockups from simple text prompts.',
            features: ['3D Rendering Style', 'Material Selection', 'Rapid Prototyping'],
            route: '/products/product-design',
            color: '#1A535C',
            icon: <Palette size={120} strokeWidth={1} />
        }
    ];

    return (
        <div className="products-page container">
            <h1>Our Products</h1>
            <div className="products-list">
                {products.map(product => (
                    <div key={product.id} className="product-item" style={{ '--accent': product.color }}>
                        <div className="product-info">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <ul className="feature-list">
                                {product.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                            <button onClick={() => navigate(product.route)}>Try Now</button>
                        </div>
                        <div className="product-visual">
                            <div className="product-logo-container" style={{ color: product.color }}>
                                {product.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
