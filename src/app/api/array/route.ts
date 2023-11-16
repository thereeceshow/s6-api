import { NextResponse } from "next/server";

export async function GET() {
    const data = ['Link', 'Mario', 'Sonic', 'Ash', 'Steve', 'Alex']
    return NextResponse.json({ data })
}