import About from "@/components/About";
import { Experience } from "@/components/Experience";
import Hero from "@/components/Hero";
import BlurFade from "@/components/ui/blur-fade";
import { EmptyState } from "@/components/ui/empty-state";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { ShineBorder } from "@/components/ui/shine-border";
import { FileText, Link, Files } from "lucide-react";

const BLUR_FADE_DELAY = 0.05;
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#121212] bg-grid-white/[0.02] text-white">
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-8">
        {/* <div className="h-[50rem] w-full bg-[#121212]   bg-grid-white/[0.2]  flex items-center justify-center"> */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

        <BlurFade delay={BLUR_FADE_DELAY}>
          <Hero />
          <About />
          <Experience />
          <ShineBorder
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={4}
          >
            <EmptyState
              title="No Messages"
              description="Start a conversation by sending a message."
              icons={[FileText, Link, Files]}
              action={{
                label: "Send Message",
                onClick: () => console.log("Send message clicked"),
              }}
            />
          </ShineBorder>
        </BlurFade>
        {/* </div> */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 justify-center mb-4 flex origin-bottom h-full max-h-14">
          <ExpandableTabs />
        </div>
      </div>
    </div>
  );
}
