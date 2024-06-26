import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Ai interview </h1>
      <Link href="/dashboard">
        <Button>click here</Button>
      </Link>
    </div>
  );
}
