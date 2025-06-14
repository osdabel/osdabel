"use client";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [searchInvoice, setSearchInvoice] = useState();

    return (
        <div className="flex items-center justify-center h-screen gap-10 mx-6 flex-col">
                        <div className="bg-gray-200 h-45 w-full px-4 py-2 rounded-lg">
                            <h1>Cari Invoice Disini</h1>
                            <input
                                type="number"
                                className="w-full h-9 p-4 rounded-lg bg-bginput text-black my-2"
                                placeholder="Masukkan Nomor Invoice"
                                value={searchInvoice}
                                onChange={(e) => setSearchInvoice(e.target.value)}
                            />
                            <Link href={`/sportif/invoice/${searchInvoice}`}>
                                <div className="bg-foretext h-8 rounded-lg mt-10 flex items-center justify-center mx-4 text-white">
                                    <h1 className="text-xl">Cari Invoice</h1>
                                </div>
                            </Link>
                        </div>
        </div>
    )
}

export default Page;