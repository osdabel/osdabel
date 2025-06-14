"use client";
import { useState } from 'react';
import { redirect } from 'next/navigation';


const Daftar = ({dataIdTim, nomorlomba}) => {
    const [namaTim, setNamaTim] = useState("");
    const [namaKetua, setNamaKetua] = useState("");
    const [kelas, setKelas] = useState(0);
    
    const jenisLombaNumber = nomorlomba;
    let checkAlumni = "";



    let jenisLomba = "";
    if (jenisLombaNumber === 10) {
        jenisLomba = "Mobile Legend";
    } else if (jenisLombaNumber === 20) {
        jenisLomba = "Futsal";
        checkAlumni = "Alumni"
    } else if (jenisLombaNumber === 30) {
        jenisLomba = "Estafet_Lari";
        checkAlumni = "Alumni"
    } else if (jenisLombaNumber === 40) {
        jenisLomba = "Bakiak";
        checkAlumni = "Alumni"
    } else if (jenisLombaNumber === 50) {
        jenisLomba = "Balok";
        checkAlumni = "Alumni"
    } else if (jenisLombaNumber === 60) {
        jenisLomba = "Egrang"
        checkAlumni = "Alumni"
    }


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const first = nomorlomba;
    const second = kelas;
    const third = getRandom(100, 999);
    const idTimString = `${first}${second}${third}`;
    const idTim = parseInt(idTimString);
    if (dataIdTim.includes(idTim)) {
        console.log("ID Tim sudah ada, membuat ID baru...");
        third = getRandom(100, 999);
        idTimString = `${first}${second}${third}`;
        idTim = parseInt(idTimString);
    }
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!namaTim || !namaKetua || kelas === 0) {
            setError("Semua field harus diisi. Pastikan nama tim, nama ketua, dan kelas sudah diisi.");
            return;
        }

        const response = await fetch('/api/buatTim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ namaTim, namaKetua, kelas, idTim }),
        });

        if (response.ok) {
            redirect(`/sportif/tim/${idTim}`);
        } else {
            setError("Gagal membuat tim. Silakan coba lagi. Jika masalah berlanjut, hubungi panitia.");
        }
    }





    return (
        <div className="flex items-center justify-center h-screen gap-10 mx-6 flex-col">
            <div className="bg-gray-200 h-80 w-full px-4 py-2 rounded-lg">
                <h1>{jenisLomba}</h1>
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Nama Tim"
                    value={namaTim}
                    onChange={(e) => setNamaTim(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full h-9 p-4 rounded-lg bg-bginput text-white my-2"
                    placeholder="Masukkan Nama Ketua Tim"
                    value={namaKetua}
                    onChange={(e) => setNamaKetua(e.target.value)}
                />
                <select className="bg-gray-200 text-black overflow-hidden w-full h-9 rounded-lg my-2" defaultValue={0} onChange={(e) => setKelas(e.target.value)}>
                    <option value="0" disabled selected hidden>Pilih Kelas</option>
                    <option value="1">X-1</option>
                    <option value="2">X-2</option>
                    <option value="3">X-3</option>
                    <option value="4">X-4</option>
                    <option value="5">X-5</option>
                    <option value="6">X-6</option>
                    <option value="7">X-7</option>
                    <option value="8">X-8</option>
                    <option value="9">X-9</option>
                    <option value="10">X-10</option>
                    <option value="11">X-11</option>
                    <option value="12">X-12</option>
                    <option value="13">XI MIPA 1</option>
                    <option value="14">XI MIPA 2</option>
                    <option value="15">XI MIPA 3</option>
                    <option value="16">XI MIPA 4</option>
                    <option value="17">XI MIPA 5</option>
                    <option value="18">XI MIPA 6</option>
                    <option value="19">XI MIPA 7</option>
                    <option value="20">XI IPS 1</option>
                    <option value="21">XI IPS 2</option>
                    <option value="22">XI IPS 3</option>
                    <option value="23">XI IPS 4</option>
                    <option value="24">XI IPS 5</option>
                    {
                        checkAlumni === "Alumni" ?
                        <></>
                        :
                        <>
                    <option value="25">XII MIPA 1</option>
                    <option value="26">XII MIPA 2</option>
                    <option value="27">XII MIPA 3</option>
                    <option value="28">XII MIPA 4</option>
                    <option value="29">XII MIPA 5</option>
                    <option value="30">XII MIPA 6</option>
                    <option value="31">XII MIPA 7</option>
                    <option value="32">XII IPS 1</option>
                    <option value="33">XII IPS 2</option>
                    <option value="34">XII IPS 3</option>
                    <option value="35">XII IPS 4</option>
                    <option value="36">XII IPS 5</option>
                        </>
                    }


                </select>
                {error && <p className="text-red-500">{error}</p>}
                <button onClick={handleSubmit} className="w-full h-9 rounded-lg bg-foretext text-white font-bold mt-10">
                        <h1 className="text-xl">Buat Tim</h1>
                </button>
            </div>
        </div>
    )
}

export default Daftar;