import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers'

export async function GET(req: NextRequest) {
    const headersList = headers();
    const key = headersList.get('apiKey');
    let data;
    if (key === 'a1b2c3d4') {
        data = 'Welcome to Code'
    } else {
        data = 'Error'

    }
    return NextResponse.json({ data })
}

// curl --header "apiKey: a1b2c3d4" http://localhost:3000/headers
// curl --header "apiKey: a1b2c3d4" localhost:3000/api/headers