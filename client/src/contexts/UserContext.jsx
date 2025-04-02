import { useState, useHook, useEffect, createContext } from 'react';
import * as cookie from 'cookie';

export const UserContext = createContext();

export function UserProvider({ children }) {


    // userID of 0 indicates logged out (it is an impossible value).
    let cookies = cookie.parse(document.cookie);
    const [userID, setUserID] = useState(parseInt(cookies.crud_application_project_user_id) || 0);

    // save user ID in cookies
    useEffect(() => {
        let expiry = new Date();
        expiry.setHours(24, 0, 0, 0);
        let expires = `expires=${expiry.toUTCString()}`;
        console.log(userID);
        document.cookie = `crud_application_project_user_id=${userID};${expires}`;
    }, [userID])

    return (
        <UserContext.Provider value={[userID, setUserID]}>
            {children}
        </UserContext.Provider>
    )
}