import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <section className="flex w-full flex-col items-center gap-4 border-b px-4 py-12 md:flex-row md:px-8 md:py-24 lg:px-12 lg:py-20">
        <div className="grow space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Welcome to ShopWave
          </h1>
          <p className="max-w-[600px] text-gray-700 md:text-xl">
            Where the only thing we take seriously is your shopping
            satisfaction! Get ready to embark on a wild ride through a galaxy of
            gadgets, gizmos, and good times. We are here to make your shopping
            experience as fun and funky as possible, because life is too short
            for boring purchases!
          </p>
        </div>
        <Image
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full md:w-1/2 lg:order-last"
          src="/about-hero.jpg"
          width={500}
          height={500}
        />
      </section>
      <section className="flex w-full flex-col items-center gap-8 border-b px-4 py-12 md:flex-row md:px-8 md:py-24 lg:px-12 lg:py-20">
        <Image
          alt="Mission"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full md:w-1/2"
          height={500}
          width={500}
          src="/mission.jpg"
        />
        <div className="flex flex-col justify-center space-y-4 py-4 md:w-1/2">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Our Mission and Values
            </h1>
            <p className="max-w-[1000px] leading-normal text-gray-700  md:text-xl">
              At ShopWave, we are on a quest to make shopping as fun as a roller
              coaster ride through a candy factory! Our mission? To hook you up
              with the coolest gear while keeping the planet and our values in
              check. Last but not least: to turn every frown upside down with
              each purchase and to make shopping feel more like winning the
              jackpot.
            </p>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Quality and customer satisfaction that is so good, it will make
                your taste buds tingle.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Eco-friendliness and ethical practices that even Mother Nature
                gives a high-five.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Innovating and improving faster than you can say &quot;add to
                cart&quot;, because why settle for just okay when you can have
                awesome?
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 pb-4 text-center md:pb-8 lg:pb-12">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Meet Our Team
            </h1>
            <p className="max-w-[900px] text-pretty text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here at ShopWave, our &quot;team&quot; consists of just one
              over-caffeinated, sleep-deprived individual (yes, that&apos;s
              me!). Committed to delivering the most epic shopping experience
              this side of the internet, I wear all the hats: CEO, customer
              service rep, and resident meme curator. So, buckle up, because
              you&apos;re in for a wild ride with this one-man show!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Avatar className="h-40 w-40">
              <AvatarImage alt="Sofia Davis" src="/avatar.jpg" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Alejandro Perez Duran</h3>
            <p className="text-gray-700">One Man Team</p>
          </div>
        </div>
      </section>
    </main>
  );
}
