import React from 'react'
import MainContext from './MainContext';

const baseUrl = 'http://localhost:5000';

const MainState = (props) => {
    const getUsers = async () => {
        let res = await fetch(`${baseUrl}/user/getUsers`, {
            method: 'GET'
        });
        let data = await res.json();
        return data;
    };

    const postUser = async ({ name, email, phone, password }) => {
        let res = await fetch(`${baseUrl}/user/postUser`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, password })
        });
        let data = await res.json();
        return data;
    };

    return (
        <>
            <MainContext.Provider value={{getUsers, postUser}}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}

export default MainState;
