import Image from "next/image";
import {Plus, Clipboard} from "react-feather";
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex items-center justify-around h-screen">
            <Link href={"/sportif/lomba"}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold">Daftar Lomba</h1>
                <div className="flex items-center justify-center bg-foretext rounded-xl p-2"> 
                <Plus size={40} color="white"/>
                </div>
            </div>
        </Link>
        <Link href={"/sportif/transaksi"}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold">Cek Transaksi</h1>
                <div className="flex items-center justify-center bg-foretext rounded-xl p-2"> 
                <Clipboard size={40} color="white"/>
                </div>
            </div>
        </Link>
        </div>
    )
}


export default Page;