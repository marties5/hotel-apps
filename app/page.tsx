import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Link href={"/dashboard"}>
        <span className="bg-red-400 px-8 py-4 rounded-lg text-white font-bold">
          Go to Dashboard
        </span>
      </Link>
    </main>
  );
}
