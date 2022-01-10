import React, { memo, VFC } from 'react'
import { useHistory } from 'react-router-dom';

const Index: VFC = memo(() => {
    // const arr = [...Array(100).keys()];
    const history = useHistory();
    const onClickLogin = () => history.push('/signin');
    const onClickRegister = () => history.push('/register');

    return (
        <>
            <h1>index画面です。</h1>
            <button onClick={onClickRegister}>登録</button>
            <button onClick={onClickLogin}>ログイン</button>
        </>
    )
});

export default Index
