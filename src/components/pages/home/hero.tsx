import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full md:mt-42 mt-32">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-transparent text-base mb-4 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>
              ✨<span className="text-primary">DevFree</span> is a free tool for
              developers
            </span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <h1 className="text-4xl md:text-8xl font-extrabold text-primary md:w-2/3  text-center leading-tight">
          Your Personal Cold Outreach Assistant
        </h1>
        <p className="mt-4 md:text-lg text-md font-semibold text-primary text-center leading-loose md:w-1/2">
          Personalize emails, schedule outreach, and track engagement — without
          paying for bloated tools.
        </p>
        <div className="mt-8 flex gap-4 items-center">
          <div>
            <Button size={"lg"}>Start Outreach</Button>
          </div>
          <div>
            <Button variant={"outline"} size={"lg"}>
              Explore
            </Button>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-col items-center justify-center w-full mt-12 relative">
        <div className="flex flex-col items-center max-w-screen-xl mx-auto justify-center w-full  bg-white h-[200px] md:h-[500px] shadow-lg rounded-lg"></div>
        {/* <Image
          src="/patterns/heropage-pattern.svg"
          alt="Pattern"
          width={1000}
          height={1000}
          className="w-full h-full hidden md:block absolute  -bottom-64 left-0 -z-10 "
        /> */}
      </div>
    </div>
  );
}
