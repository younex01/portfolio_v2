import { ShineBorder } from "./ui/shine-border";
import { EmptyState } from "./ui/empty-state";
import { FileText, Link, Files } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Staking dApp",
      description:
        "A dApp for staking NFTs of my devnet collection, ensuring a secure and transparent process for users.",
      image: "/placeholder.svg?height=600&width=800",
      gradient:
        "bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-blue-800/20",
      technologies: ["/tech1.svg", "/tech2.svg", "/tech3.svg"],
    },
    {
      title: "SolanAuth",
      description: "Responsive Solana wallet authentication and account modal.",
      image: "/placeholder.svg?height=600&width=800",
      gradient:
        "bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-emerald-700/20",
      technologies: ["/tech1.svg", "/tech2.svg", "/tech3.svg"],
    },
  ];

  return (
    <section className="py-12">
      <h2 className="mb-8 text-xl font-semibold">Projects</h2>
      <div className="grid gap-6">
      <ShineBorder
            className="relative flex sm:h-[400px] h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl z-50"
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
      </div>
    </section>
  );
}
