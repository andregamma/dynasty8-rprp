import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  const Router = useRouter();

  const isNotIndex =
    Router.pathname !== "/list" && "/list/property/[pid]" ? true : false;

  console.log("type", isNotIndex);
  return (
    <nav className="flex flex-col">
      <div
        className="flex justify-center p-8"
        style={{ backgroundImage: "url(../background.jpg)" }}
      >
        <img
          src="https://vignette.wikia.nocookie.net/gtawiki/images/d/df/Dynasty8-GTAV-Logo.png/revision/latest?cb=20150814230544"
          alt=""
          className="h-20"
        />
      </div>
      <div className="p-2 text-lg text-center bg-primary">
        {isNotIndex ? (
          <p className="font-semibold text-white">
            A melhor mudança que você fará na vida
          </p>
        ) : (
          <p>teste</p>
        )}
      </div>
    </nav>
  );
}
