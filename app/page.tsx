import { Hero } from "@/components/client";
import { Sections } from "@/components/server";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <div className="mx-5 sm:mx-20 md:mx-[10rem] lg:mx-[14rem] xl:mx-[20rem] 2xl:mx-[25rem]">
        <Sections />
      </div>
    </main>
  );
}
