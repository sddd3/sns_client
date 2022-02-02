import { createContext, useState } from "react";
import { userInfo } from "../types/UserInfo";

// 今はanyにしておく
export const UserContext = createContext<any>({});

export const UserProvider = (props: any) => {
    const { children } = props;
    const [user, setUserInfo] = useState<userInfo>({ loggedIn: false, user: {} });
    return (
        <UserContext.Provider value={{ user, setUserInfo }}>{children}</UserContext.Provider>
    )
}
