import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ToolCard.css';

const ToolCard = ({ title, description, icon, route, color }) => {
    const navigate = useNavigate();

    return (
        <div
            className="tool-card"
            onClick={() => navigate(route)}
            style={{ '--hover-color': color }}
        >
            <div className="tool-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ToolCard;
