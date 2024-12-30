import { auth, signOut, signIn } from "@/auth";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface NavbaProps {}

interface SessionInterface extends Session {
  id?: number;
}

const Navbar: FC<NavbaProps> = async ({}) => {
  const session: SessionInterface | null = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={20}
            priority
            style={{ height: "auto", width: "auto" }}
          />
        </Link>
        <div className="flex items-center text-black gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="text-black">
                Sign In
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
