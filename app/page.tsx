import { Hero } from "@/components/client";
import { Sections } from "@/components/server";
import { checkIfUserExists, createNewUser } from "@/lib/utils";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    const isUserExisting = await checkIfUserExists(userId);
    if (!isUserExisting) {
      await createNewUser(userId);
    }
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
