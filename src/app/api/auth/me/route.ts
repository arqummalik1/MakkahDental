import { NextResponse } from "next/server";
import { getServerSession } from "@/server/auth/session";

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  return NextResponse.json({ user: session.user });
}
