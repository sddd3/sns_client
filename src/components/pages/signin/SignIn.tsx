import { memo, useState, useContext, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../providers/UserProvier';

const SignIn: VFC = memo(() => {
    const { setUserInfo } = useContext(UserContext);

    const [name, setName] = useState('test');
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('12345678');
    const history = useHistory();

    const onClickRegisterButton = (event: any) => {
        const body = { name, email, password };

        axios.post(`http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}${process.env.REACT_APP_API_BASE}/auth`,
            body, {
            withCredentials: true
        })
            .then(res => {
                console.log(`res: ${JSON.stringify(res)}`);
                setUserInfo({ loggedIn: true, user: res });
                history.push('/dashboard');
            })
            .catch(error => {
                setUserInfo({ loggedIn: false });
                console.log(`error: ${error}`);
            });
    }

    const onChangeNameField = (event: any) => {
        // const name = event.target.value;
        const name = 'test';
        setName(name);
    }

    const onChangeEmailField = (event: any) => {
        // const email = event.target.value;
        const email = 'test@gmail.com';
        setEmail(email);
    }

    const onChangePasswordField = (event: any) => {
        // const password = event.target.value;
        const password = '12345678';
        setPassword(password);
    }

    return (
        <>
            <div>
                <input type="text" name="name" placeholder='ユーザー名（変更不可能）' autoComplete='off' onChange={onChangeNameField} />
            </div>
            <div>
                <input type="text" name="email" placeholder='メールアドレス' autoComplete='off' onChange={onChangeEmailField} />
            </div>
            <div>
                <input type="password" name="password" placeholder='パスワード' autoComplete='off' onChange={onChangePasswordField} />
            </div>
            <div>
                <button onClick={onClickRegisterButton}>登録</button>
            </div>
        </>
    )
});

export default SignIn
