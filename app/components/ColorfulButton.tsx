import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ColorfulButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/images/button-bg.png')] bg-cover rounded-[40px] p-3">
      <Button
        asChild
        variant="ghost"
        className="bg-white rounded-[40px] text-2xl md:text-4xl font-bold tracking-wider px-12 py-8"
      >
        <Link href={href} target="_blank">
          {children}
        </Link>
      </Button>
    </div>
  );
}
