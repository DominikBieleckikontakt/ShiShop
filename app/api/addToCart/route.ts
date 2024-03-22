import { addItemToUserCart } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId, uId, name, price } = await req.json();
  await addItemToUserCart(userId, uId, name, price);

  return NextResponse.json({ message: "done" }, { status: 201 });
}
