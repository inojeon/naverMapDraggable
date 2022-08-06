import Image from "next/image";
import Link from "next/link";
import BlueLBSLogo from "@images/BlueLBS.png";

interface HomeLogoProps {
  href: string;
  ariaLabel?: string;
}

export function LBSLogoPNG() {
  return <Image src={BlueLBSLogo} width="32" height="32" alt="logo" />;
}

export default function HomeLogo({ href, ariaLabel }: HomeLogoProps) {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <a className="flex flex-row items-center gap-x-4 cursor-pointer">
        <div>
          <LBSLogoPNG />
        </div>

        <p className=" text-xl text-slate-700 tracking-tight select-none">
          road
          <span className="text-sky-900 font-bold">Twin</span>
        </p>
      </a>
    </Link>
  );
}
