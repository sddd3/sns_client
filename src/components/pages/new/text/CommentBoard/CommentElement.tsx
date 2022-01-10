import { useEffect, VFC } from 'react'
import stylecss from './CommentElement.module.css';
import Comment from '../../../../../types/Comment';
type Props = {
    comment: Comment,
}

const CommentElement: VFC<Props> = (props) => {

    useEffect(() => {
        return () => {
        }
    }, []);

    const { comment } = props;
    return (
        <div className={stylecss.element}>
            <div>
                parent_id : {comment.parent_id}
            </div>
            <div>
                comment_id : {comment.comment_id}
            </div>
            <div>
                comment : {comment.comment}
            </div>
            <div>
                created_at : {comment.created_at}
            </div>
            <div>
                updated_at : {comment.updated_at}
            </div>
        </div>
    )
}

export default CommentElement
