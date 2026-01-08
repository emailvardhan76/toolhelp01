import React from 'react';
import './UseCases.css';

const UseCases = () => {
    const cases = [
        {
            title: "Startup Rapid Prototyping",
            tool: "Agent Generator + Prompt to Product",
            description: "A startup founder used our Agent Generator to create a customer support bot and the Product Designer to visualize their hardware prototype in under 24 hours.",
            stat: "90% Faster"
        },
        {
            title: "Enterprise System Migration",
            tool: "System Designing Help",
            description: "A Fortune 500 company re-architected their legacy monolith into microservices using our System Design helper, saving weeks of planning participation.",
            stat: "$50k Saved"
        },
        {
            title: "Content Creation scaling",
            tool: "Text to Video",
            description: "A marketing agency scaled their video production from 2 to 20 videos a week using our Text to Video tool for social media campaigns.",
            stat: "10x Growth"
        }
    ];

    return (
        <div className="usecases-page container">
            <h1>Real World Impact</h1>
            <div className="timeline">
                {cases.map((useCase, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-content">
                            <span className="case-stat">{useCase.stat}</span>
                            <h3>{useCase.title}</h3>
                            <p className="case-tool">{useCase.tool}</p>
                            <p>{useCase.description}</p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseCases;
