// app/api/readings/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://universalis.com/v2/en/today");
    if (!res.ok) throw new Error("Failed to fetch readings");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Could not fetch readings" },
      { status: 500 }
    );
  }
}
