import { memo, useState, VFC } from 'react'
import axios from 'axios';

const Registration: VFC = memo(() => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickRegisterButton = (event: any) => {
        const body = { name, email, password, nickname };

        axios.post('http://localhost:3000/api/v1/register',
            body, {
            withCredentials: true
        })
            .then(res => console.log(`res: ${JSON.stringify(res)}`))
            .catch(error => console.log(`error: ${error}`));
    }

    const onChangeNameField = (event: any) => {
        const name = event.target.value;
        setName(name);
    }

    const onChangeNicknameField = (event: any) => {
        const nickname = event.target.value;
        setNickname(nickname);
    }

    const onChangeEmailField = (event: any) => {
        const email = event.target.value;
        setEmail(email);
    }

    const onChangePasswordField = (event: any) => {
        const password = event.target.value;
        setPassword(password);
    }

    return (
        <>
            <div>
                <input type="text" name="name" placeholder='ユーザー名（変更不可能）' autoComplete='off' onChange={onChangeNameField} />
            </div>
            <div>
                <input type="text" name="name" placeholder='ニックネーム（変更可能）' autoComplete='off' onChange={onChangeNicknameField} />
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

export default Registration
