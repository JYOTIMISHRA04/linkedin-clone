import React, { forwardRef, useState } from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

export const Post = forwardRef(({ name, description, message, photoUrl, comment }, ref) => {

    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [commentBoxVisible, setCommentBoxVisible] = useState(false); // Step 1


    const handleLikedClick = (onClick) => {
        if (onClick) {
            setLiked(!liked);
            setLikeCount(liked ? likeCount - 1 : likeCount + 1);
        }
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            const userComment = `${name}: ${newComment}`;
            setComments([...comments, userComment]);
            setNewComment('');
        }
        setCommentBoxVisible(false);

    };


    const toggleCommentBox = () => {
        setCommentBoxVisible(!commentBoxVisible); // Step 2
    };

    const buttonStyle = likeCount ? { color: 'blue' } : { color: 'gray' };

    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                {/* <Avatar src={photoUrl}>{name[0]}</Avatar> */}
                <div className="post__info">
                    <h2>{name}</h2>
                    {/* <p>{description}</p> */}
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons" >
                <div className='like-btn' onClick={handleLikedClick} style={buttonStyle} >
                    <span className="like">{likeCount}</span>
                    <InputOption

                        Icon={ThumbUpOffAltIcon}
                        title="Like"
                        color="gray"

                    />
                </div>

                <div className='comment-btn' onClick={toggleCommentBox}> {/* Step 2 */}
                    <InputOption Icon={CommentIcon} title="Comment" color="gray" />
                </div>
                {commentBoxVisible && (

                    <div className="comment-section">
                        {/* <InputOption
                            Icon={CommentIcon}
                            title="Comment"
                            color="gray" /> */}

                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button onClick={handleCommentSubmit}>Post</button>
                    </div>
                )}
                <InputOption
                    Icon={RepeatIcon}
                    title="Repost"
                    color="gray" />

                <InputOption
                    Icon={SendIcon}
                    title="Send"
                    color="gray" />

            </div>
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    {comment}
                </div>
            ))}





        </div>
    );

})

