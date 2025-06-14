import Daftar from "@/components/Daftar";
import db from "@/libs/db";

const Page = async () => {

    const databaseTim = await db.tim.findMany({
          select: {
             idTim: true
          },
    }); 

    const idTim = databaseTim.map((tim) => tim.idTim);
    console.log(idTim);

    return (
        <>
        <Daftar dataIdTim={idTim} nomorlomba={10} />
        </>
    )
}

export default Page;