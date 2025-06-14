import db from "@/libs/db";
import { cookies } from "next/headers";
import UpdateInvoice from "@/components/UpdateInvoice";

const Page = async ({params}) => {
    let par = await params
    const databaseInvoice = await db.invoice.findMany({
        where: { idInvoice: parseInt(par.id) },
    });

    const dataInvoice = databaseInvoice[0];
    console.log(dataInvoice)

    const labelIdInvoice = `#${dataInvoice?.idInvoice}`;

    const labelIdTim = `Id Tim: #${dataInvoice?.idTim}`
    

    const date = dataInvoice?.createdAt;

    const day = String(date?.getUTCDate()).padStart(2, '0');
    const month = String(date?.getUTCMonth() + 1).padStart(2, '0');
    const year = date?.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const checkAlumni = (dataInvoice?.kelas)?.trim().split(/\s+/)[0]

    let contactPJ = ""
    let contactPJ2 = ""
    let biayaDaftar = ""


    const dataCookies = await cookies();
    const token = dataCookies.get("token")
    const password = dataCookies.get("password")


    console.log(token?.value)

    const admin = await db.admin.findFirst({
    where: {
      password: password?.value
    }
    })

    console.log(admin)
    console.log(dataInvoice)




    if (dataInvoice?.lomba === "Mobile_Legend" && checkAlumni === "XII") {
        contactPJ = "0819-3655-5700"
        contactPJ2 = "0815-7216-7594"
        biayaDaftar = "Rp 35.000"
    } else if (dataInvoice?.lomba === "Futsal" && checkAlumni === "XII" ) {
        contactPJ = "0882-0021-09667"
        biayaDaftar = "Rp 40.000"
    } else if (dataInvoice?.lomba === "Mobile_Legend") {
        contactPJ = "0819-3655-5700"
        contactPJ2 = "0815-7216-7594"
        biayaDaftar = "Rp 25.000"
    } else if (dataInvoice?.lomba === "Futsal") {
        contactPJ = "0882-0021-09667"
        biayaDaftar = "Rp 25.000"
    } else if (dataInvoice?.lomba === "Estafet_Lari") {
        contactPJ = "0895-8102-97733"
        biayaDaftar = "Rp 0"
    } else if (dataInvoice?.lomba === "Bakiak") {
        contactPJ = "0815-8622-5550"
        contactPJ2 = "0895-3922-17295"
        biayaDaftar = "Rp 0"
    } else if (dataInvoice?.lomba === "Balok") {
        contactPJ = "0838-1456-7626"
        biayaDaftar = "Rp 0"
    } else if (dataInvoice?.lomba === "Egrang") {
        contactPJ = "0838-1456-7626"
        biayaDaftar = "Rp 0"
    }



    const check = (databaseInvoice.length === 0)
    console.log(check)

    if (check) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <h1>Data Tidak Ditemukan</h1>
            </div>
        )
    } else {

    

    return (
        <div className="flex items-center mt-20 gap-10 mx-6 flex-col">
            <div className="bg-gray-200 h-270 w-full px-4 py-2 rounded-lg">
                <div className="flex items-center justify-between">
                <div>
                <h1 className="font-bold text-4xl">Invoice</h1>
                        <h1 className="text-4xl">{labelIdInvoice}</h1>
                        </div>
                        {
                            dataInvoice?.PayStatus === "Paid" ? 
                            <div className="flex items-center justify-center mr-2 w-20 h-9 bg-green-600 rounded-xs">
                            < h1 className="font-bold text-xl text-white">Paid</h1>
                            </div>
                            :
                            <div className="flex items-center justify-center mr-2 w-20 h-9 bg-red-500 rounded-xs">
                            <h1 className="font-bold text-xl text-white">Unpaid</h1>
                            </div>
                        }
                        </div>
                        <p className="text-sm tracking-widest text-justify">Bayar Sekarang Transaksi-mu di Ruang OSIS & MPK atau Hubungi Contact Person Terkait</p>
                        <br />
                        <hr />
                        <br />
                        <div className="flex items-center justify-between">
                    <h1>Tanggal</h1>
                    <h1>{formattedDate}</h1>
                    </div>
                    <div className="flex items-center justify-between">
                    <h1>Contact PJ</h1>
                    <div>
                    <h1>{contactPJ}</h1>
                    <h1>{contactPJ2}</h1>
                    </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <h1>Payment Method</h1>
                    <h1>Cash/Transfer</h1>
                    </div>
                    <div className="flex items-center justify-between">
                    <h1>Payed</h1>
                    <h1>{dataInvoice?.Payed}</h1>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                    <h1 className="font-bold">Pay To</h1>
                    <h1>Kepanitiaan Sportif 18 <br /> Organisasi Siswa Intra Sekolah <br /> SMAN 18 Garut</h1>
                    </div>
                    <br />
                    <div>
                    <h1 className="font-bold">Invoiced To</h1>
                    <h1>Ketua Tim {dataInvoice?.namaTim}</h1><h1>{dataInvoice?.namaKetua}</h1><h1>{dataInvoice?.kelas}</h1>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <h1 className="font-bold">Invoice Item</h1>
                    <div className="flex items-center justify-between">
                    <h1>Biaya Daftar <br />Tim {dataInvoice?.lomba} <br /> {labelIdTim}</h1>
                    <h1>{biayaDaftar}</h1>
                    </div>
                    <hr />
                    <div className=" flex items-center justify-between">
                    <h1 className="font-bold text-xl">Total</h1>
                    <h1 className="font-bold text-2xl">{biayaDaftar}</h1>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <p className="text-lg tracking-wider text-justify">Nomor Invoice Jangan Sampai Hilang !!</p>
                    <p className="text-lg text-red-500">Bayar/Konfirmasi sebelum tanggal 17/06/2025</p>
                    <br />
                    <div className="flex items-center justify-center">
                    {
                        token?.value === "019283" ? 
                        <UpdateInvoice status={"Paid"} dataInvoice={dataInvoice} dataAdmin={admin} total={biayaDaftar} />
                        :
                        <></>
                    }
                    </div>
                    </div>
                    </div>
                  
                
                )
            }
            }
            
            export default Page;