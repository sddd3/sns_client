import { createContext, useState, VFC } from "react";

export const UserContext = createContext({});

export const UserProvider: VFC = (props: any) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState(null);
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
    )
}
