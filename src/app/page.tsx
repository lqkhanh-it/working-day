"use client";

import Table from "@/components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-24 py-12">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello there, &nbsp;
          <code className="font-mono font-bold">how are you!</code>
        </p>
      </div>
      <br />
      <div className="w-full h-full">
        <Table />
      </div>
    </main>
  );
}
