import { sendDataFromStorageToDatabase } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, items, totalAmount, totalPrice } = await req.json();
    await sendDataFromStorageToDatabase(userId, items, totalAmount, totalPrice);
  } catch (error) {
    return NextResponse.json({ message: "error", isSucceded: false });
  }

  return NextResponse.json(
    { message: "success", isSucceded: true },
    { status: 201 }
  );
}
