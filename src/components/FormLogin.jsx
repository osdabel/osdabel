"use client"
import { useState } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";



const FormLogin = ({dataAdmin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const admin = password;
    
    const matchedAdmin = dataAdmin.find(user => user.password === admin);
    console.log(matchedAdmin)

    let labelStatus = "Masukan Username dan Password";

    if (matchedAdmin) {
        labelStatus = ""
    }

    const handleSubmit = () => {
        if (!matchedAdmin) {
            return;
        }
        Cookies.set('token', matchedAdmin.token, {expires: 1})
        Cookies.set('password', matchedAdmin.password, {expires: 1})
        window.location.reload()
    }




    return (
        <>
            <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-black my-2"
                    placeholder="Masukkan Nama"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
            />
            <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-black my-2"
                    placeholder="Masukkan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
            />
            <p>{labelStatus}</p>
                <button onClick={handleSubmit} className="w-full h-8 rounded-lg bg-foretext text-white mt-10">
                        <h1 className="text-xl">Login</h1>
                </button>
        </>
    )
}

export default FormLogin;