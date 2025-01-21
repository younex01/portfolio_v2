import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button2 } from "./ui/button2";
import { ArrowRight } from "lucide-react";

// import BlurFadeText from "@/components/magicui/blur-fade-text";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-semibold">Youness Elousse</h1>
          <p className="text-sm text-neutral-400">Frontend developer</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="grid size-9 place-content-center rounded-full border border-black/30 bg-[#24292e] p-2 text-white transition-all hover:bg-[#24292e]/60 dark:border-white/10"
        >
          <Mail className="h-4 w-4 text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="grid size-9 place-content-center rounded-full border border-black/30 bg-[#24292e] p-2 text-white transition-all hover:bg-[#24292e]/60 dark:border-white/10"
        >
          <Linkedin className="h-4 w-4 text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="grid size-9 place-content-center rounded-full border border-black/30 bg-[#24292e] p-2 text-white transition-all hover:bg-[#24292e]/60 dark:border-white/10"
        >
          <Github className="h-4 w-4 text-white" />
        </Button>
        <Button2
          variant="expandIcon"
          Icon={() => <ArrowRight className="h-4 w-4" />}
          iconPlacement="right"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative px-4 py-2 h-fit rounded-full bg-[#24292e] text-foreground hover:bg-[#24292e]/70 text-white"
        >
          Resume
        </Button2>
        <div className="ml-2 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs text-neutral-400">Available for work</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
