"use client"
import { useState } from "react"

const UpdateInvoice = ({status, dataInvoice, dataAdmin, total}) => {
    const [error, setError] = useState("")


    const updatedInv = {
        idInvoice: dataInvoice.idInvoice,
        Payed: dataAdmin.username,
        PayStatus: status
    }

    const addPayed = {
        idTim: dataInvoice.idTim,
        idInvoice: dataInvoice.idInvoice,
        namaTim: dataInvoice.namaTim,
        kelas: dataInvoice.kelas,
        namaKetua: dataInvoice.namaKetua,
        lomba: dataInvoice.lomba,
        total: total,
        payedTo: dataAdmin.username
    }


    console.log(updatedInv)

    const handleUpdate = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/updateInvoice', {
                         method: 'POST',
                         headers: {
                     'Content-Type': 'application/json',
                             },
                        body: JSON.stringify(updatedInv),
                        });
        const response2 = await fetch('/api/addPayed', {
                         method: 'POST',
                         headers: {
                     'Content-Type': 'application/json',
                             },
                        body: JSON.stringify(addPayed),
                        });
        
            if (response.ok && response2.ok) {
             window.location.reload();
            } else {
             setError("Error")
        }
    }


    return (
        <div>
        {
            error === "Error" ? 
            <p className="text-red-500">Error, Jika Error Berlanjut Hubungi Developer</p>
            :
        <button className="bg-foretext text-white font-bold py-2 px-4 rounded w-70 text-md" onClick={handleUpdate}>
            Konfirmasi Pembayaran Oleh {dataAdmin?.username}
        </button>
        }
        </div>
    )
}


export default UpdateInvoice;