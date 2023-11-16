import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, headers: {apiKey: string}) {
    const searchParams = request.nextUrl.searchParams
    const key = searchParams.get('apiKey')
    console.log(key);
    // let key = headers.apiKey
    let data;
    if (key === 'a1b2c3d4') {
        data = 'Welcome to Code'
    } else {
        data = 'Error'

    }
    return NextResponse.json({ data })
}