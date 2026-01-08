import React from 'react';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah J.",
            role: "Designer",
            text: "The Prompt to Product tool saved me hours of rendering time. Incredible!",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4"
        },
        {
            id: 2,
            name: "Mike T.",
            role: "Developer",
            text: "System Design helper clarified our entire backend architecture.",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-marketing-manager-working-in-office-42774-large.mp4"
        },
        {
            id: 3,
            name: "Jessica R.",
            role: "Content Creator",
            text: "Text to Video is a game changer for my TikTok channel.",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-creative-team-working-together-42779-large.mp4"
        }
    ];

    return (
        <div className="reviews-page container">
            <h1>APPRAISALS</h1>
            <div className="reviews-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="video-container">
                            <video
                                src={review.videoUrl}
                                className="review-video"
                                loop
                                muted
                                playsInline
                                onMouseOver={(e) => e.target.play()}
                                onMouseOut={(e) => e.target.pause()}
                            />
                            <div className="play-overlay">▶</div>
                        </div>
                        <div className="review-content">
                            <p>"{review.text}"</p>
                            <div className="reviewer">
                                <strong>{review.name}</strong>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
