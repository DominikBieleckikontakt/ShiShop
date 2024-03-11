"use client";
import { Hero } from "@/components/client";
import { Sections } from "@/components/server";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();

  if (userId) {
    fetch(`${process.env.WEBSITE_URL}/api/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
  }

  return (
    <main className="w-full overflow-x-hidden overflow-y-hidden">
      <Hero />
      <div className="mx-5 sm:mx-20 md:mx-[10rem] lg:mx-[14rem] xl:mx-[20rem] 2xl:mx-[25rem]">
        <Sections />
      </div>
    </main>
  );
}
