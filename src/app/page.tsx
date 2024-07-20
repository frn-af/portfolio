import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {

  return (
    <main className="h-screen mx-auto p-4 bg-gradient-to-tr from-black to-zinc-700">
      <Header />
      <Hero />
    </main>
  );
}
