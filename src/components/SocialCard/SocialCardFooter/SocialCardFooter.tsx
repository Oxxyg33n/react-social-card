import * as React from 'react';

interface ISocialCardFooterProps {
    likes: number;
    shares: number;
    comments: number;
}

interface ISocialCardFooterState {
    isLiked: boolean;
    isShared: boolean;

    likes: number;
    shares: number;
}

class SocialCardFooter extends React.Component<ISocialCardFooterProps, ISocialCardFooterState>{
    constructor(props: Readonly<ISocialCardFooterProps>) {
        super(props);

        this.state = {
            isShared: false,
            isLiked: false,

            likes: this.props.likes,
            shares: this.props.shares,
        }
    }

    toggleLiked() {
        const { isLiked, isShared } = this.state;
        const { likes, shares } = this.props;

        const likesTotal = !isLiked ? likes+1 : likes;

        if (isShared) {
            this.setState({
                isShared: !isShared,
                shares: shares-1,
            })
        }

        this.setState({
            isLiked: !isLiked,
            likes: likesTotal,
        })
    }

    toggleShared() {
        const { isShared } = this.state;
        const { shares, likes } = this.props;

        const sharesTotal = !isShared ? shares+1 : shares;
        const likesTotal = !isShared ? likes+1 : likes;

        this.setState({
            isShared: !isShared,
            shares: sharesTotal,
            isLiked: !isShared,
            likes: likesTotal,
        })
    }

    render() {
        const { comments } = this.props;
        const { isLiked, isShared, likes, shares } = this.state;

        return (
            <div className="social-card-footer">
                <div className="social-card-icon-wrapper">
                    <span className="icon">
                        <i className="far fa-comments"/>
                    </span>
                    <span className="icon-text">
                        {comments}
                    </span>
                </div>
                <div className="social-card-icon-wrapper" onClick={() => this.toggleShared()}>
                    <span className={'icon'.concat(isShared ? ' is-shared' : '' )}>
                        <i className="fa fa-share"/>
                    </span>
                    <span className={'icon-text'.concat(isShared ? ' is-shared' : '' )}>
                        {shares}
                    </span>
                </div>
                <div className="social-card-icon-wrapper" onClick={() => this.toggleLiked()}>
                    <span className={'icon'.concat(isLiked ? ' is-liked' : '' )}>
                        <i className="fa fa-heart"/>
                    </span>
                    <span className={'icon-text'.concat(isLiked ? ' is-liked' : '' )}>
                        {likes}
                    </span>
                </div>
                <div className="social-card-icon-wrapper">
                    <span className="icon">
                        <i className="far fa-envelope"/>
                    </span>
                </div>
            </div>
        )
    }
}

export default SocialCardFooter;