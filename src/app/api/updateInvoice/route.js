import db from "@/libs/db";


export async function POST(request) {
    const body = await request.json();
    const { idInvoice, Payed, PayStatus} = body;

        try {
        const result = await db.invoice.update({
            where: { idInvoice },
            data: {
                Payed,
                PayStatus,
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