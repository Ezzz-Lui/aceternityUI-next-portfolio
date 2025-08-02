"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import PythonIcon from "../icons/PythonIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import TailwindIcon from "../icons/TailwindIcon";

const technologies = [
  {
    id: 1,
    name: "React",
    designation: "Frontend Library",
    icon: ReactIcon,
  },
  {
    id: 2,
    name: "Next.js",
    designation: "React Framework",
    icon: NextIcon,
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Type Safety",
    icon: TypescriptIcon,
  },
  {
    id: 4,
    name: "Python",
    designation: "Backend Development",
    icon: PythonIcon,
  },
  {
    id: 5,
    name: "PostgreSQL",
    designation: "Database",
    icon: PostgresqlIcon,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    icon: TailwindIcon,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
      <AnimatedTooltip items={technologies} />
    </div>
  );
}
