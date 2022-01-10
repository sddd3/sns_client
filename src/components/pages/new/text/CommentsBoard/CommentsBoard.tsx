import axios from 'axios';
import { useEffect, useState, VFC } from 'react'
import Comment from '../../../../../types/Comment';
import CommentBoard from '../CommentBoard/CommentElement';
import stylecss from './CommentsBoard.module.css';

const CommentsBoard: VFC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/dashboard',
            {
                withCredentials: true
            })
            .then(res => {
                console.log(`res: ${JSON.stringify(res)}`);
                const response = res.data;
                const comments = response.comments ? response.comments : [];
                setComments(comments);
                console.log(`comments: ${comments}`);
            })
            .catch(error => console.log(`error: ${error}`));
    }, []);
    return (
        <div className={stylecss.board}>
            {
                comments.map(comment => (
                    <div key={comment.comment_id}><CommentBoard comment={comment} /></div>
                ))
            }
        </div>
    )
}

export default CommentsBoard
