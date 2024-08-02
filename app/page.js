import Image from "next/image";
import Writer from "../components/Writer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm h-full lg:flex-row">
        <Writer />
      </div>
    </main>
  );
}
