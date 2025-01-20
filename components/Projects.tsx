import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
  technologies: string[];
}

function ProjectCard({
  title,
  description,
  image,
  gradient,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-gradient-to-br shadow-lg transition-all hover:shadow-xl">
      <div className={`${gradient} p-8`}>
        <div className="mb-4 flex justify-between">
          <div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h3>
            <p className="text-lg text-neutral-200">{description}</p>
          </div>
          <div className="flex gap-1">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 backdrop-blur"
              >
                <Image src={tech} alt="Technology" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Card>
  );
}

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
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
