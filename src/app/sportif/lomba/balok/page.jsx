import db from '@/libs/db';
import Daftar from '@/components/Daftar';

const Page = async () => {
    const databaseTim = await db.tim.findMany({
          select: {
             idTim: true
          },
    }); 

    const idTim = databaseTim.map((tim) => tim.idTim);

    return (
        <Daftar dataIdTim={idTim} nomorlomba={50} />
    )
}

export default Page;