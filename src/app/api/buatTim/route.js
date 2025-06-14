

import db from "@/libs/db";

export async function POST(request) {
    const body = await request.json();
    const { namaTim, namaKetua, kelas, idTim } = body;
    try {
        const result = await db.tim.create({
            data: {
                namaTim,
                namaKetua,
                kelas,
                idTim,
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