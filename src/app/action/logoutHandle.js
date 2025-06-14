"use server"

import { cookies } from "next/headers"

export async function logoutHandle() {
    const dataCookies = await cookies();
    dataCookies.delete("password")
    dataCookies.delete("token")
}