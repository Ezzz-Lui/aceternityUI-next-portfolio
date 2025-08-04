"use client";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { projects } from "@/components/data/projects";
import { Badge } from "@/components/ui/badge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "../ui/button";
import { IconGitBranch } from "@tabler/icons-react";

export default function Blog() {
  return (
    <div
      id="projects"
      className="w-full px-12 py-12 col-span-full border-hidden bg-black  shadow-lg backdrop-blur-sm bg-opacity-50"
    >
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <TextGenerateEffect
              filter
              words="Academic and personal projects"
            ></TextGenerateEffect>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full">
                <div className="p-3 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-teal-400">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="font-bold border-hidden rounded-sm text-xs text-gray-800 dark:text-gray-200 flex items-center gap-1"
                      >
                        {skill.icon({})}
                        <span>{skill.name}</span>
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-end space-x-2 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => console.log(`Viewing project`)}
                    >
                      <IconGitBranch />
                      Repository
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => console.log(`Viewing project`)}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
