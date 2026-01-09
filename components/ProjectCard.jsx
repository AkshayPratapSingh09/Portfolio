import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-secondary/20 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Top: Image Container */}
      <div className="relative h-[240px] w-full bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center p-6 overflow-hidden">
        {/* Inner Image with Shadow */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm group-hover:scale-[1.02] transition-transform duration-500">
          <Image
            src={project.image}
            fill
            className="object-cover object-top"
            alt={project.name}
            priority
          />
        </div>
      </div>

      {/* Bottom: Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start mb-3">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary dark:bg-primary/20 border-none font-medium px-2 py-1 text-[10px] uppercase tracking-wider">
              {project.category}
            </Badge>

            {/* Links */}
            <div className="flex gap-x-2">
              <Link href={project.link} target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                <Link2Icon className="w-5 h-5" />
              </Link>
              <Link href={project.github} target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <h4 className="h4 text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.name}</h4>
          <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
