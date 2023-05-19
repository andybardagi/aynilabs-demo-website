import Hero from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Services } from "@/components/home/Services";
import { Team } from "@/components/home/Team";

export default function HomePage() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="py-12 bg-blue-100" id="services">
        <div className="w-full max-w-7xl m-auto px-4 xl:px-0">
          <Services />
        </div>
      </section>
      <section className="py-12" id="about">
        <div className="w-full max-w-7xl m-auto px-4 xl:px-0">
          <Mission />
        </div>
      </section>
      <section className="text-white" id="team">
        <Team />
      </section>
    </main>
  );
}
