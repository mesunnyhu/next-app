import Navbar from "@/components/Header/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main data-theme="wireframe" className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
    </main>
  );
}
