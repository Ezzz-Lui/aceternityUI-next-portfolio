"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import PythonIcon from "../icons/PythonIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import TailwindIcon from "../icons/TailwindIcon";
import VueIcon from "../icons/VueIcon";
import NestJsIcon from "../icons/NestIcon";
import DjangoIcon from "../icons/DjangoIcon";
import PiniaIcon from "../icons/PiniaIcon";
import shadcnui from "../icons/ShadcnIcon";
import RadixUI from "../icons/RadixUi";
import SupabaseIcon from "../icons/SupabaseIcon";
import Dart from "../icons/DartIcon";
import Flutter from "../icons/FlutterIcon";
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
    name: "Vue.js",
    designation: "Frontend Framework",
    icon: VueIcon,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    icon: TailwindIcon,
  },
  {
    id: 7,
    name: "NestJs",
    designation: "Backend Framework",
    icon: NestJsIcon,
  },
  {
    id: 8,
    name: "Django",
    designation: "Backend Framework",
    icon: DjangoIcon,
  },
  {
    id: 9,
    name: "Pinia",
    designation: "State Management",
    icon: PiniaIcon,
  },
  {
    id: 11,
    name: "Radix UI",
    designation: "Headless UI Components",
    icon: RadixUI,
  },
  {
    id: 12,
    name: "Supabase",
    designation: "Database as a Service",
    icon: SupabaseIcon,
  },
  {
    id: 13,
    name: "Dart",
    designation: "Programming Language",
    icon: Dart,
  },
  {
    id: 14,
    name: "Flutter",
    designation: "Mobile Development",
    icon: Flutter,
  }

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full px-4 sm:px-6 lg:px-8">
      <AnimatedTooltip items={technologies} />
    </div>
  );
}
