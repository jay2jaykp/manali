/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export const UserContext = createContext()

export const UserProvider = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);


    useEffect(() => {
        if(user === null) {
            navigate('/seller/signup')
        } else {
            navigate('/')
        }
    }, [user])

    return <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
}