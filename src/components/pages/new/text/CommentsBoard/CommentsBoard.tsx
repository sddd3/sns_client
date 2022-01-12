import axios from 'axios';
import { useEffect, useState, VFC } from 'react'
import Comment from '../../../../../types/Comment';
import CommentElement from '../CommentBoard/CommentElement';
import stylecss from './CommentsBoard.module.css';

const CommentsBoard: VFC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/dashboard',
            {
                withCredentials: true
            })
            .then(res => {
                const response = res.data;
                const comments = response.comments ? response.comments : [];
                setComments(comments);
            })
            .catch(error => console.log(`error: ${error}`));
    }, []);
    return (
        <div className={stylecss.board}>
            {
                comments.map(comment => (
                    <div key={comment.comment_id}><CommentElement comment={comment} /></div>
                ))
            }
        </div>
    )
}

export default CommentsBoard
