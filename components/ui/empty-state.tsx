import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface EmptyStateProps {
  title: string;
  description: string;
  icons?: LucideIcon[];
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  title,
  description,
  icons = [],
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "p-4 text-center ",
        "rounded-xl sm:h-[400px] h-[300px] w-full",
        "group hover:bg-black/10 transition duration-500 hover:duration-200",
        className
      )}
      style={{
        opacity: 1,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4 ">
      <h2 className="font-OffBit text-3xl text-white drop-shadow-[rgba(255,255,255,0.2)_0px_-2px_10px]">{title}</h2>
      <div className="flex isolate">
        {icons.length === 3 ? (
          <>
            <div className="bg-background left-4 size-10 grid place-items-center rounded-xl relative z-0 rotate-6 shadow-lg ring-1 ring-border group-hover:-translate-x-7 transition group-hover:-rotate-0 group-hover:-translate-y-0.5 duration-500 group-hover:duration-200">
              {React.createElement(icons[1], {
                className: "w-6 h-6 text-muted-foreground",
              })}
            </div>
            <div className="bg-background size-10 grid place-items-center rounded-xl relative left-2.5 -rotate-6 shadow-lg ring-1 ring-border group-hover:-translate-x-4 group-hover:-rotate-0 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
              {React.createElement(icons[0], {
                className: "w-6 h-6 text-muted-foreground",
              })}
            </div>
            <div className="bg-background size-10 grid place-items-center rounded-xl relative z-10 shadow-lg ring-1 ring-border group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
              {React.createElement(icons[1], {
                className: "w-6 h-6 text-muted-foreground",
              })}
            </div>
            <div className="bg-background size-10 grid place-items-center rounded-xl relative z-20 right-2.5 rotate-6 shadow-lg ring-1 ring-border group-hover:translate-x-4 group-hover:rotate-0 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
              {React.createElement(icons[2], {
                className: "w-6 h-6 text-muted-foreground",
              })}
            </div>
          </>
        ) : (
          <div className="bg-background size-10 grid place-items-center rounded-xl shadow-lg ring-1 ring-border group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
            {icons[0] &&
              React.createElement(icons[0], {
                className: "w-6 h-6 text-muted-foreground",
              })}
          </div>
        )}
      </div>
        
      </div>
      <p className="text-center text-sm font-medium text-white md:text-justify mt-4 md:mt-2 pb-8">
        {description}
      </p>
      {/* {action && (
        <Button
          // onClick={action.onClick}
          variant="outline"
          className={cn("mt-4", "shadow-sm active:shadow-none")}
        >
          {action.label}
        </Button>
      )} */}
        <Image
  alt="Staking dApp"
  width={1080}
  height={1080}
  className="relative mx-auto w-[80%] rounded-lg transition group-hover:-translate-y-2"
  src="/staking_dapp.webp"
  quality={75}
  priority={false}
  sizes="(max-width: 768px) 100vw, 80vw"
/> 
      </div>
     
  );
}
