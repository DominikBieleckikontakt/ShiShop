import React from "react";
import { auth } from "@clerk/nextjs";

import { isUserAdmin } from "@/lib/utils";
import Link from "next/link";
import { AdminDashboard } from "@/components/server";

const Dashboard = async () => {
  const { userId } = auth();

  const isAdmin = userId && (await isUserAdmin(userId));

  return (
    <main className="w-full">
      {!isAdmin && (
        <div className="mx-5 md:mx-auto max-w-[48rem] mt-48 p-5 rounded-lg bg-whiteDirty dark:bg-darkDirty text-center shadow-lg">
          <h1 className="text-2xl font-semibold">
            What are you doing here? 🤨
          </h1>
          <p className="my-5 font-light">
            You shouldn't be here. If it is a mistake, just click a link below
            to go back.
          </p>
          <Link
            href="/"
            className="text-primary hover:text-accent duration-300 font-semibold text-xl"
          >
            Go back to the home page.
          </Link>
        </div>
      )}
      {isAdmin && <AdminDashboard />}
    </main>
  );
};

export default Dashboard;
