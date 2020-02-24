import * as React from 'react';
import SocialCardFooter from "./SocialCardFooter/SocialCardFooter";

interface ISocialCardProps {
    comments: number;
    likes: number;
    shares: number;
    image: string;
}

class SocialCard extends React.Component<ISocialCardProps, {}> {
    render() {
        const { image } = this.props;
        return (
            <div className="social-card-wrapper">
                <div className="social-card-wrapper-inner">
                    <div className="social-card-image has-text-centered">
                        <img src={image} alt="Social card image"/>
                    </div>
                    <div className="social-card-content">
                        <div className="social-card-content-title">
                            Learning React? Start small.
                        </div>
                        <div className="social-card-content-description">
                            Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps.
                        </div>
                        <div className="social-card-content-link">
                            <a href="#">dev.to</a>
                        </div>
                    </div>
                </div>
                <SocialCardFooter {...this.props} />
            </div>
        )
    }
}

export default SocialCard;