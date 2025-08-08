"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

// Technology Icons
import VueIcon from "@/components/icons/VueIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import DjangoIcon from "@/components/icons/DjangoIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import NextIcon from "@/components/icons/NextIcon";
import NestIcon from "@/components/icons/NestIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import PostgresqlIcon from "@/components/icons/PostgresqlIcon";
import JavascriptIcon from "@/components/icons/JavascriptIcon";
import AstroIcon from "@/components/icons/AstroIcon";
import VercelIcon from "@/components/icons/VercelIcon";
import DockerIcon from "@/components/icons/DockerIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";

// Technology mapping
const technologyIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Vue: VueIcon,
  TypeScript: TypescriptIcon,
  Python: PythonIcon,
  Django: DjangoIcon,
  "Django REST Framework": DjangoIcon,
  MySQL: PostgresqlIcon, // Using PostgreSQL icon as fallback for databases
  Docker: DockerIcon,
  Git: GitHubIcon,
  "Node.js": JavascriptIcon,
  React: ReactIcon,
  "Next.js": NextIcon,
  "Nest.js": NestIcon,
  "Tailwind CSS": TailwindIcon,
  PostgreSQL: PostgresqlIcon,
  JavaScript: JavascriptIcon,
  HTML: JavascriptIcon, // You might want to add HTML icon
  CSS: TailwindIcon, // Using Tailwind as fallback for CSS
  Astro: AstroIcon,
  Vercel: VercelIcon,
  "Microsoft Clarity": JavascriptIcon, // Fallback
  SQL: PostgresqlIcon,
  "SQL Report Builder": PostgresqlIcon,
  "MS SQL Server": PostgresqlIcon,
  "Reporting Services": PostgresqlIcon,
  "ORACLE Database": PostgresqlIcon,
  "Data Modeler": PostgresqlIcon,
  "PL/SQL": PostgresqlIcon,
};

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Tech Americas USA Inc.",
      position: "Python Developer",
      period: "Jan 2025 - Present",
      location: "Remote",
      description:
        "Backend and API development of scalable applications using Python, Django, Django Rest Framework, Swagger and Docker. Frontend development with Vue.js and Vuetify components, and documentation with Astro and Sarlight for projects. Collaborated with cross-functional teams to design and implement efficient solutions, ensuring high performance and scalability.",
      achievements: [
        "Developed RESTful APIs with Django Rest Framework",
        "Optimized frontend requests reducing response time by 40%",
        "UI/UX design improvements using Vuetify",
      ],
      technologies: [
        "Vue",
        "TypeScript",
        "Python",
        "Django",
        "Django REST Framework",
        "MySQL",
        "Docker",
        "Git",
      ],
      current: true,
    },
    {
      company: "ITCA - FEPADE",
      position: "Intern - FullStack Developer",
      period: "2020 - 2022",
      location: "El Salvador",
      description:
        "Built comprehensive web applications from conception to deployment. Designed and implemented RESTful APIs while collaborating with design and product teams to deliver exceptional user experiences.",
      achievements: [
        "Developed 5+ full-stack applications from scratch",
        "Implemented responsive designs across multiple devices",
        "Collaborated with teams of 8+ developers",
      ],
      technologies: [
        "Node.js",
        "React",
        "Next.js",
        "Nest.js",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      current: false,
    },
    {
      company: "MABRICK S.A. de C.V.",
      position: "Intern - Frontend Developer",
      period: "2019 - 2020",
      location: "El Salvador",
      description:
        "Specialized in creating responsive, high-performance websites for diverse clients. Focused on modern frontend technologies and performance optimization techniques.",
      achievements: [
        "Delivered 15+ responsive websites for clients",
        "Improved page load speeds by 60% through optimization",
        "Maintained and updated existing codebases",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Astro",
        "Tailwind CSS",
        "Vercel",
        "Microsoft Clarity",
      ],
      current: false,
    },
    {
      company: "KATA Software ES",
      position: "Developer Junior",
      period: "2019 - 2020",
      location: "El Salvador",
      description:
        "Focused on database development and reporting solutions. Created complex SQL queries and automated reporting systems for business intelligence.",
      achievements: [
        "Built 20+ automated reports for business analytics",
        "Optimized database performance and query efficiency",
        "Streamlined reporting processes saving 10+ hours weekly",
      ],
      technologies: [
        "SQL",
        "SQL Report Builder",
        "MS SQL Server",
        "Reporting Services",
      ],
      current: false,
    },
    {
      company: "CityLab",
      position: "Intern Developer Trainee",
      period: "2019",
      location: "El Salvador",
      description:
        "Entry-level position focusing on database management and report generation. Gained foundational experience in enterprise software development.",
      achievements: [
        "Learned enterprise development workflows",
        "Contributed to database optimization projects",
        "Developed technical documentation skills",
      ],
      technologies: [
        "SQL",
        "SQL Report Builder",
        "MS SQL Server",
        "Reporting Services",
      ],
      current: false,
    },
    {
      company: "CEL S.A. de C.V.",
      position: "Intern PSQL Developer",
      period: "2019",
      location: "El Salvador",
      description:
        "Specialized in Oracle database development and PL/SQL programming. Worked on data modeling and database optimization for enterprise applications.",
      achievements: [
        "Designed efficient database schemas",
        "Created stored procedures for data processing",
        "Improved data retrieval performance",
      ],
      technologies: ["ORACLE Database", "Data Modeler", "PL/SQL"],
      current: false,
    },
  ];

  return (
    <div id="experience" className="w-full py-16 col-span-full bg-black">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ease-out ${
                hoveredIndex === index ? "scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`relative bg-black rounded-2xl p-8 border transition-all duration-300 h-full ${
                  exp.current
                    ? "border-teal-500/50 shadow-teal-500/20"
                    : "border-stone-700/50 hover:border-stone-600/70"
                } shadow-xl hover:shadow-2xl backdrop-blur-sm`}
              >
                {/* Current position indicator */}
                {exp.current && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-teal-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Current
                    </div>
                  </div>
                )}

                <div className="flex flex-col justify-between h-full">
                  {/* Top content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 transition-colors">
                          {exp.position}
                        </h3>
                        <h4 className="text-teal-400 font-semibold text-lg">
                          {exp.company}
                        </h4>
                        <p className="text-stone-400 text-sm">
                          📍 {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-stone-300 mb-6 leading-relaxed text-base">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <span className="mr-2">🎯</span>
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-stone-300 flex items-start"
                          >
                            <span className="text-teal-400 mr-2 mt-1.5 text-xs">
                              ▸
                            </span>
                            <span className="text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <span className="mr-2">🛠️</span>
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => {
                          const IconComponent = technologyIcons[tech];
                          return (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="px-4 py-3 bg-stone-700/30 text-stone-300 rounded-lg text-sm border border-stone-600/30 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-200 hover:scale-105 flex items-center gap-2"
                            >
                              {IconComponent && (
                                <IconComponent className="w-8 h-8" />
                              )}
                              {tech}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bottom content - Period */}
                  <div className="mt-6">
                    <div className="bg-stone-800/50 px-4 py-3 rounded-xl border border-stone-700/50">
                      <div className="text-stone-300 text-sm font-medium">
                        📅 {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full border border-teal-500/30">
            <span className="text-stone-300 text-sm">
              🚀 Continuously learning and growing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
