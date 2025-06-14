import db from "@/libs/db";

export async function POST(request) {
    const body = await request.json();
    const { idTim, idInvoice, namaTim, kelas, namaKetua, lomba, total, payedTo} = body;
    try {
        const result = await db.payedTim.create({
            data: {
                idTim,
                idInvoice,
                namaTim,
                kelas,
                namaKetua,
                lomba,
                total,
                payedTo
            },
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error inserting data:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}


