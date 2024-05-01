import { buttonVariants } from "@/components/ui/button";
import { FLATTEND_ROUTES } from "@/lib/routes-config";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center text-center px-2 py-8">
      <p className="mb-5 sm:text-xl"><span className="bg-green-500 w-4 h-4 inline-block me-2"></span> DEVELOPER DOCUMENTATION</p>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
      PayerVault developer documentation
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
      Welcome to the PayerVault developer documentation. You will find help about PayerVault's APIs that will help you start using our products quickly.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${FLATTEND_ROUTES[0].href}`}
          className={buttonVariants({ className: "px-6" })}
        >
          Get Stared
        </Link>
        
      </div>
      
    </div>
  );
}
