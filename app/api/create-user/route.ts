import { checkIfUserExists, createNewUser } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (res: Response) => {
  const { userId } = await res.json();

  try {
    const isUserExisting = await checkIfUserExists(userId);
    if (!isUserExisting) {
      await createNewUser(userId);
      return NextResponse.json(
        { message: "created new user" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "user already exists" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 401 });
  }
};
