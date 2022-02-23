import { atom } from 'recoil';

// TODO 永続化 recoil-persist?
export const userState = atom({
    key: "userState",
    default: { user: {}, loggedIn: false }
});