"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import FilterTabs from "@/components/sections/work/FilterTabs";
import ProjectCard from "@/components/sections/work/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function WorkPageEN() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.categorySlug === filter);

  return (
    <>
      <PageHero badge="Our Work" title="Projects that made a difference" description="Over 150 projects with 85+ partners across government and private sectors" />
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FilterTabs active={filter} onChange={setFilter} locale="en" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} locale="en" index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
