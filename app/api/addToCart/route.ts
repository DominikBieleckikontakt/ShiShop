import { addItemToUserCart } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, uId, name, price } = await req.json();
    await addItemToUserCart(userId, uId, name, price);
  } catch (error) {
    return NextResponse.json({ message: "error", isSucceded: false });
  }

  return NextResponse.json(
    { message: "success", isSucceded: true },
    { status: 201 }
  );
}
