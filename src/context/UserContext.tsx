import React, { useState } from 'react';
import { FC, ReactNode, createContext } from 'react';
import { User } from '../types/entity/user';

type UserCtx = {
    user?: User
    setUserFunc: (user: User) => void
}

export const UserContext = createContext<UserCtx>({ setUserFunc: () => { return } });

export const UserProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | undefined>();
    return (
        <UserContext.Provider value={{ user, setUserFunc: setUser }}>
            {children}
        </UserContext.Provider>
    )
}
