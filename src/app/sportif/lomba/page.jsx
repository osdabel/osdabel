"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [searchTim, setSearchTim] = useState();


    return (
        <div className="flex items-center justify-center h-250 gap-10 mx-6 flex-col">
            <div className="bg-gray-100 h-45 w-full px-4 py-2 rounded-lg">
                <h1 className="text-black">Cari Tim Disini</h1>
                <input
                    type="number"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-black my-2"
                    placeholder="Masukkan Id Tim"
                    value={searchTim}
                    onChange={(e) => setSearchTim(e.target.value)}
                />
                <Link href={`/sportif/tim/${searchTim}`}>
                    <div className="bg-foretext h-7 rounded-lg mt-10 flex items-center justify-center mx-15 text-white">
                        <h1 className="text-lg">Cari Tim</h1>
                    </div>
                </Link>
            </div>
            <div className="w-full px-8 py-1 items-center justify-center text-white">
                <Link href={"/sportif/lomba/mobile-legend"}>
                <div className="bg-foretext h-9 rounded-lg flex items-center justify-center">
                    <h1 className=" text-xl">Daftar Mobile Legend</h1>
                </div>
                </Link>
            </div>
            <div className="w-full px-8 py-1 items-center justify-center text-white">
                <Link href={"/sportif/lomba/futsal"}>
                <div className="bg-foretext h-9 rounded-lg flex items-center justify-center">
                    <h1 className=" text-xl">Daftar Futsal</h1>
                </div>
                </Link>
            </div>
            <div className="w-full px-8 py-1 items-center justify-center text-white">
                <Link href={"/sportif/lomba/estafet"}>
                <div className="bg-foretext h-9 rounded-lg flex items-center justify-center">
                    <h1 className=" text-xl">Daftar Estafet Lari</h1>
                </div>
                </Link>
            </div>
            <div className="w-full px-8 py-1 items-center justify-center text-white">
                <Link href={"/sportif/lomba/bakiak"}>
                <div className="bg-foretext h-9 rounded-lg flex items-center justify-center">
                    <h1 className=" text-xl">Daftar Bakiak</h1>
                </div>
                </Link>
            </div>
            <div className="w-full px-8 py-1 items-center justify-center text-white">
                <Link href={"/sportif/lomba/balok"}>
                <div className="bg-foretext h-9 rounded-lg flex items-center justify-center">
                    <h1 className=" text-xl">Daftar Balok</h1>
                </div>
                </Link>
            </div>
            <div className="w-full px-8 py-1 items-center justify-center text-white">
                <Link href={"/sportif/lomba/egrang"}>
                <div className="bg-foretext h-9 rounded-lg flex items-center justify-center">
                    <h1 className=" text-xl">Daftar Egrang</h1>
                </div>
                </Link>
            </div>
        </div>
    )

}

export default Page;