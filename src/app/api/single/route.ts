import { NextResponse } from "next/server";

export async function GET() {
    const data = 'Welcome to Code'
    return NextResponse.json({ data })
}