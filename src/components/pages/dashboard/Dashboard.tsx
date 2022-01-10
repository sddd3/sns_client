import { memo, VFC } from 'react';
import CommentsView from '../new/text/CommentsBoard/CommentsBoard';
import TextPost from '../new/text/TextPost';

const DashBoard: VFC = memo(() => {
    return (
        <>
            <div>dashboard画面です。</div>
            <TextPost />
            <CommentsView />
        </>
    )
});

export default DashBoard
