import { memo, useContext, useEffect, VFC } from 'react';
import { UserContext } from '../../../providers/UserProvier';
import CommentsBoard from '../new/text/CommentsBoard/CommentsBoard';
import TextPost from '../new/text/TextPost';

const DashBoard: VFC = memo(() => {

    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        console.log(userInfo);
        return () => {

        }
    }, [userInfo]);

    return (
        <>
            <div>dashboard画面です。</div>
            <TextPost />
            <CommentsBoard />
        </>
    )
});

export default DashBoard
