"use client"
import { logoutHandle } from "@/app/action/logoutHandle";

const Logout = ({username}) => {


    return (
        <>
        <button onClick={() => logoutHandle()} className="text-foretext">
            {username}
        </button>
        </>
    )
}



export default Logout;