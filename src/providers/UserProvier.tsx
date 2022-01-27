import { createContext, useState } from "react";

export const UserContext = createContext<any>({});

export const UserProvider = (props: any) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState(null);
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
    )
}
