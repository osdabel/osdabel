import Tim from "@/components/Tim";
import db from "@/libs/db";

const Page = async ({params}) => {
    let par = await params
    console.log(par)
    const databaseTim = await db.tim.findMany({
        where: { idTim: parseInt(par.id) },
    });
    console.log(databaseTim)

    const baseTim = await db.peserta.findMany({
        where: { idTim: parseInt(par.id) },
    })

    const cekTim = (databaseTim.length === 0)
    
    const dataInvoice = await db.invoice.findFirst({
        where: { idTim: parseInt(par.id) }
    })
    console.log(dataInvoice?.PayStatus)


    return (
        <>
        {
            cekTim ?
            <>
            <div className="w-screen h-screen flex justify-center items-center">
                <h1 className="">Tim Tidak Ditemukan</h1>
            </div>
            </>
            :
            <>
            <Tim dataTim={databaseTim} basePemain1={baseTim[0]} basePemain2={baseTim[1]} basePemain3={baseTim[2]} basePemain4={baseTim[3]} basePemain5={baseTim[4]} invoice={dataInvoice?.PayStatus} />
            </>
        }
        </>
    )
}

export default Page;