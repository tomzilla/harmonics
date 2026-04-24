import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Black hole - accept and discard
  await request.json();

  return NextResponse.json({ success: true });
}
