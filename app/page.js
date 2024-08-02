import Image from "next/image";
import Writer from "../components/Writer";
import Link from "next/link";
import { GlobeIcon } from "../components/Icons";
import { TwitterIcon } from "../components/Icons";
import { GithubIcon } from "../components/Icons";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm h-full lg:flex-row">
        <div className="flex flex-col h-full w-full">          
          <Writer />
          <footer className="bg-muted px-2 py-2 text-xs text-muted-foreground flex justify-center">
            Links:&nbsp;
            <Link href="https://x.com/gyurisc" className="ml-2" prefetch={false}>
              <TwitterIcon className="h-4 w-4" />
            </Link>
            <Link href="https://gyurisc.com" className="ml-2" prefetch={false}>
              <GlobeIcon className="h-4 w-4" />
            </Link>
            <Link href="https://github.com/gyurisc/" className="ml-2" prefetch={false}>
              <GithubIcon className="h-4 w-4" />
            </Link>
          </footer>          
        </div>
      </div>
    </main>
    </>
  );
}
