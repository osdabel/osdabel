import FormLogin from "@/components/FormLogin";
import db from "@/libs/db";


const Page = async () => {



    const dataAdmin = await db.admin.findMany({

    })


    return (
    <div className="flex items-center justify-center h-screen gap-10 mx-6 flex-col">
        <div className="bg-gray-200 h-75 w-full px-4 py-2 rounded-lg">
            <h1>Login Panitia/Administrator</h1>
            <FormLogin dataAdmin={dataAdmin} />
        </div>
    </div>
    )
}


export default Page;
