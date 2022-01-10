import { memo, useState, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TextPost: VFC = memo(() => {
    const [comment, setComment] = useState('');
    const history = useHistory();

    const onClickPostTextButton = (event: any) => {
        const body = { comment };

        axios.post(`http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}${process.env.REACT_APP_API_BASE}/new/comment`,
            body, {
            withCredentials: true
        })
            .then(res => {
                console.log(`res: ${JSON.stringify(res)}`);
                history.push('/dashboard');
            })
            .catch(error => console.log(`error: ${error}`));
    }

    const onChangeComment = (event: any) => {
        const comment = event.target.value;
        setComment(comment);
    }

    return (
        <>
            <div>
                <input type="text" name="comment" placeholder='投稿' autoComplete='off' onChange={onChangeComment} />
            </div>
            <div>
                <button onClick={onClickPostTextButton}>登録</button>
            </div>
        </>
    )
});

export default TextPost
