import { NextResponse } from "next/server";

export async function GET(headers: {apiKey: string}) {
    let key = headers.apiKey
    let data;
    if (key === 'a1b2c3d4') {
        console.log(key)
        data = 'Welcome to Code'
    } else {
        data = 'Error'

    }
    return NextResponse.json({ data })
}