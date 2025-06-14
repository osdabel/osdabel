"use client";
import { useState } from 'react';
import Link from 'next/link';



import { redirect } from "next/navigation";

const Tim = ({dataTim, basePemain1, basePemain2, basePemain3, basePemain4, basePemain5, invoice}) => {
    const [usernameKetua, setUsernameKetua] = useState(basePemain1?.username || '');
    const [idMLKetua, setIdMLKetua] = useState(basePemain1?.idML || '');

    const [namaPemain2, setNamaPemain2] = useState(basePemain2?.namaPeserta || '');
    const [usernamePemain2, setUsernamePemain2] = useState(basePemain2?.username || '');
    const [idMLPemain2, setIdMLPemain2] = useState(basePemain2?.idML || '');

    const [namaPemain3, setNamaPemain3] = useState(basePemain3?.namaPeserta || '');
    const [usernamePemain3, setUsernamePemain3] = useState(basePemain3?.username || '');
    const [idMLPemain3, setIdMLPemain3] = useState(basePemain3?.idML || '');

    const [namaPemain4, setNamaPemain4] = useState(basePemain4?.namaPeserta || '');
    const [usernamePemain4, setUsernamePemain4] = useState(basePemain4?.username || '');
    const [idMLPemain4, setIdMLPemain4] = useState(basePemain4?.idML || '');

    const [namaPemain5, setNamaPemain5] = useState(basePemain5?.namaPeserta || '');
    const [usernamePemain5, setUsernamePemain5] = useState(basePemain5?.username || '');
    const [idMLPemain5, setIdMLPemain5] = useState(basePemain5?.idML || '');

    const [error, setError] = useState("")

    const idTim = dataTim.map((tim) => tim.idTim)[0];
    // const idTim = 1012356;
    const jenisLombaNumber = Number(String(idTim).slice(0, 2));

    let jenisLomba = "";
    if (jenisLombaNumber === 10) {
        jenisLomba = "Mobile Legend";
            
    } else if (jenisLombaNumber === 20) {
        jenisLomba = "Futsal";
    } else if (jenisLombaNumber === 30) {
        jenisLomba = "Estafet_Lari";
    } else if (jenisLombaNumber === 40) {
        jenisLomba = "Bakiak";
    } else if (jenisLombaNumber === 50) {
        jenisLomba = "Balok";
    } else if (jenisLombaNumber === 60) {
        jenisLomba = "Egrang";
    }

    const dataPemain1 = {
        id: basePemain1?.id || String(idTim),
        idTim,
        lomba: jenisLomba,
        namaPeserta: dataTim.map((tim) => tim.namaKetua)[0],
        status: "Ketua_Tim",
        username: usernameKetua,
        idML: idMLKetua,
    }
    
    const dataPemain2 = {
        id: basePemain2?.id || String(idTim),
        idTim,
        lomba: jenisLomba,
        namaPeserta: namaPemain2,
        status: "Pemain-2",
        username: usernamePemain2,
        idML: idMLPemain2,
    }

    const dataPemain3 = {
        id: basePemain3?.id || String(idTim),
        idTim,
        lomba: jenisLomba,
        namaPeserta: namaPemain3,
        status: "Pemain-3",
        username: usernamePemain3,
        idML: idMLPemain3,
    }
    
    const dataPemain4 = {
        id: basePemain4?.id || String(idTim),
        idTim,
        lomba: jenisLomba,
        namaPeserta: namaPemain4,
        status: "Pemain-4",
        username: usernamePemain4,
        idML: idMLPemain4,
    }

    const dataPemain5 = {
        id: basePemain5?.id || String(idTim),
        idTim,
        lomba: jenisLomba,
        namaPeserta: namaPemain5,
        status: "Pemain-5",
        username: usernamePemain5,
        idML: idMLPemain5,
    }




    let handleSave = () => {};
    if (jenisLombaNumber === 10) {
        jenisLomba = "Mobile_Legend";
            handleSave = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain1),
                });

                const response2 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain2),
                });

                const response3 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain3),
                });
                
                const response4 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain4),
                });
                const response5 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain5),
                });
                
                if (response.ok && response2.ok && response3.ok && response4.ok && response5.ok) {
                    redirect(`/sportif/tim/${idTim}`);
                } else {
                    setError("Error");
                }
            }
    } else if (jenisLombaNumber === 20) {
        jenisLomba = "Futsal";
        handleSave = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain1),
                });

                const response2 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain2),
                });

                const response3 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain3),
                });
                
                const response4 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain4),
                });
                const response5 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain5),
                });
                
                if (response.ok && response2.ok && response3.ok && response4.ok && response5.ok) {
                    redirect(`/sportif/tim/${idTim}`);
                } else {
                    setError("Error");
                }
            }
    } else if (jenisLombaNumber === 30) {
        jenisLomba = "Estafet_Lari";
        handleSave = async (e) => {
                e.preventDefault();
                const response = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain1),
                });

                const response2 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain2),
                });

                const response3 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain3),
                });
                
                const response4 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain4),
                });
                
                if (response.ok && response2.ok && response3.ok && response4.ok) {
                    redirect(`/sportif/tim/${idTim}`);
                } else {
                    setError("Error");
                }
            }
    } else if (jenisLombaNumber === 40) {
        jenisLomba = "Bakiak";
        handleSave = async (e) => {
            e.preventDefault();
                const response = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain1),
                });

                const response2 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain2),
                });

                const response3 = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain3),
                });
                
                if (response.ok && response2.ok && response3.ok) {
                    redirect(`/sportif/tim/${idTim}`);
                } else {
                    setError("Error");
                }
            }
    } else if (jenisLombaNumber === 50) { 
        jenisLomba = "Balok";
        handleSave = async (e) => {
            e.preventDefault();
                const response = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain1),
                });
                
                if (response.ok) {
                    redirect(`/sportif/tim/${idTim}`);
                } else {
                    setError("Error");
                }
            }
    } else if (jenisLombaNumber === 60) {
        jenisLomba = "Egrang";
                handleSave = async (e) => {
            e.preventDefault();
                const response = await fetch('/api/addUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPemain1),
                });
                
                if (response.ok) {
                    redirect(`/sportif/tim/${idTim}`);
                } else {
                    setError("Error");
                }
            }
    }





    console.log(jenisLomba);

    
    
    

    
    
    
    
    
    
    const labelId = `ID Tim : #${idTim}`;
    const kelasList = [
        "Pilih Kelas", 
        "X-1", "X-2", "X-3", "X-4", "X-5", "X-6", "X-7", "X-8", "X-9", "X-10", "X-11", "X-12",
        "XI MIPA 1", "XI MIPA 2", "XI MIPA 3", "XI MIPA 4", "XI MIPA 5", "XI MIPA 6", "XI MIPA 7",
        "XI IPS 1", "XI IPS 2", "XI IPS 3", "XI IPS 4", "XI IPS 5",
        "XII MIPA 1", "XII MIPA 2", "XII MIPA 3", "XII MIPA 4", "XII MIPA 5", "XII MIPA 6", "XII MIPA 7",
        "XII IPS 1", "XII IPS 2", "XII IPS 3", "XII IPS 4", "XII IPS 5"
    ];
    console.log(kelasList[dataTim.map((tim) => tim.kelas)[0]]);
    const labelKelas = `Kelas : ${kelasList[dataTim.map((tim) => tim.kelas)[0]]}`;
    const labelNamaTim = `Nama Tim : ${dataTim.map((tim) => tim.namaTim)[0]}`;
    const labelKetuaTim = `Nama Ketua Tim : ${dataTim.map((tim) => tim.namaKetua)[0]}`;
    const labelJenisLomba = `Tim ${jenisLomba}`;
    
    const dataInvoice = {
        idInvoice: idTim + 1234,
        Payed: "-",
        idTim: idTim,
        namaKetua: dataTim.map((tim) => tim.namaKetua)[0],
        kelas: kelasList[dataTim.map((tim) => tim.kelas)[0]],
        PayStatus: "Unpaid",
        namaTim: dataTim.map((tim) => tim.namaTim)[0],
        lomba: jenisLomba,
    }

    const handleDaftar = async (e) => {
        e.preventDefault();

        if ((namaPemain2 === "" || namaPemain3 === "" || namaPemain4 === "" || namaPemain5 === "") && !jenisLombaNumber >= 50) {
            return;
        }
        if (invoice === "Unpaid") {
            redirect(`/sportif/invoice/${dataInvoice.idInvoice}`)
            return;
        }

                const response = await fetch('/api/addInvoice', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataInvoice),
                });

                if (response.ok) {
                    redirect(`/sportif/invoice/${dataInvoice.idInvoice}`);
                } else {
                    setError("Error");
                }
    }

    return (
        <div className="flex items-center mt-20 gap-10 mx-6 flex-col">
            <div className="bg-gray-200 h-320 w-full px-4 py-2 rounded-lg">
                <h1>{labelJenisLomba}</h1>
                <h1 className="text-3xl">{labelId}</h1>
                <h1>{labelKelas}</h1>
                <h1>{labelNamaTim}</h1>
                <br />
                <h1>Pemain 1 | <br /> {labelKetuaTim}</h1>
                <br />
                <hr />
                <br />
                {
                    jenisLombaNumber === 10 ?
                    <div>
                    <h1>Pemain-1 : Ketua Tim</h1>
                    <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Username Ketua Tim"
                    value={usernameKetua}
                    onChange={(e) => setUsernameKetua(e.target.value)}
                    />
                    <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Id ML Ketua Tim"
                    value={idMLKetua}
                    onChange={(e) => setIdMLKetua(e.target.value)}
                    />
                    </div>
                    :
                    <div></div>
                }
                {
                    jenisLombaNumber === 50 || jenisLombaNumber === 60 ?
                    <></>
                    :
                    <>
                    <h1>Pemain-2</h1>
                    <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Nama Asli"
                    value={namaPemain2}
                    onChange={(e) => setNamaPemain2(e.target.value)}
                    />
                    </>
                }
                {
                    jenisLombaNumber === 10 ?
                    <div>
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Username Pemain-2"
                    value={usernamePemain2}
                    onChange={(e) => setUsernamePemain2(e.target.value)}
                    />
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Id ML Pemain-2"
                    value={idMLPemain2}
                    onChange={(e) => setIdMLPemain2(e.target.value)}
                    />
                </div>
                :
                <></>
                }
                {
                    jenisLombaNumber === 50 || jenisLombaNumber === 60 ?
                    <></>
                    :
                    <>
                    
                    <h1>Pemain-3</h1>
                <input
                type="text"
                className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                placeholder="Masukkan Nama Asli"
                value={namaPemain3}
                onChange={(e) => setNamaPemain3(e.target.value)}
                />
                </>
                }   


                {
                    jenisLombaNumber === 10 ?
                    <>
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Username Pemain-3"
                    value={usernamePemain3}
                    onChange={(e) => setUsernamePemain3(e.target.value)}
                    />
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Id ML Pemain-3"
                    value={idMLPemain3}
                    onChange={(e) => setIdMLPemain3(e.target.value)}
                    />
                </> 
                :
                <></>
                }
                {
                    jenisLombaNumber === 40 || jenisLombaNumber === 50 || jenisLombaNumber === 60 ?
                    <></>
                    :
                <>
                <h1>Pemain-4</h1>
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Nama Asli"
                    value={namaPemain4}
                    onChange={(e) => setNamaPemain4(e.target.value)}
                    />
                </>
                }
                {
                    jenisLombaNumber === 10 ?   
                    <>
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Username Pemain-4"
                    value={usernamePemain4}
                    onChange={(e) => setUsernamePemain4(e.target.value)}
                    />
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Id ML Pemain-4"
                    value={idMLPemain4}
                    onChange={(e) => setIdMLPemain4(e.target.value)}
                    />
                </>
                :
                <></>
                }
                {
                    jenisLombaNumber >= 25 ?
                    <></>
                    :
                <>
                    <h1>Pemain-5</h1>
                    <input
                        type="text"
                        className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                        placeholder="Masukkan Nama Asli"
                        value={namaPemain5}
                        onChange={(e) => setNamaPemain5(e.target.value)}
                        />
                </>
                }
                {
                    jenisLombaNumber === 10 ? 
                    <>
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Username Pemain-5"
                    value={usernamePemain5}
                    onChange={(e) => setUsernamePemain5(e.target.value)}
                    />
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Id ML Pemain-5"
                    value={idMLPemain5}
                    onChange={(e) => setIdMLPemain5(e.target.value)}
                    />
                </>
                :
                <></>
                }
            <hr />
               {
                    (namaPemain2 === "" || namaPemain3 === "" || namaPemain4 === "" || namaPemain5 === "") && !jenisLombaNumber >= 30 ? 
                    <>

                    <p className='flex justify-center'>Lengkapi Data Terlebih Dahulu Untuk Daftarkan Tim</p>
                    <br />
                    </>
                    :
                    <>
                    <p className='flex justify-center'>Pastikan Klik Simpan Sebelum Daftarkan Tim</p>
                    <br />
                    </>
                }

            <div className="flex items-center justify-between">
                <button onClick={handleSave} className="bg-foretext text-white font-bold py-2 px-4 rounded w-25 text-md">
                    Simpan
                </button>
                {
                    invoice === "Paid" ?
                    <>
                    <button className="bg-green-600 text-white font-bold py-2 px-4 rounded w-40 text-md">
                    Tim Terdaftar
                    </button>
                    </>
                    :
                    <>
                <button onClick={handleDaftar} className="bg-foretext text-white font-bold py-2 px-4 rounded w-40 text-md">
                    Daftarkan Tim
                </button>
                    </>
                }
            </div>
            {
                error === "Error" ?
                <>
                <p className='text-red-600'>Error, Jika masalah berlanjut silahkan hubungi Panitia</p>
                </>
                :
                <></>
            }
            </div>
        </div>
    )
}

export default Tim;