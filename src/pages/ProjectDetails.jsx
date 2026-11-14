import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, GitBranch, Play } from 'lucide-react';
import ProjectCover from '../components/ProjectCover';
import { projects } from '../data/projects';

const storyFields = [
  { key: 'problem', num: '01', label: 'The Problem' },
  { key: 'users', num: '02', label: 'Users & Pain Points' },
  { key: 'businessContext', num: '03', label: 'Business Context' },
  { key: 'researchInsights', num: '04', label: 'Research & Insights' },
  { key: 'strategy', num: '05', label: 'Product Strategy' },
  { key: 'tradeOffs', num: '06', label: 'Decisions & Trade-Offs' },
  { key: 'execution', num: '07', label: 'Execution & Implementation' },
  { key: 'outcome', num: '08', label: 'Outcome' },
  { key: 'learnings', num: '09', label: 'Key Learnings' },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--paper)] px-6 text-[var(--ink)]">
        <h1 className="mb-4 display text-3xl">Case study not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-[var(--accent)] hover:underline"
        >
          <ArrowLeft size={18} />
          Return to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--paper)] pb-24 text-[var(--ink)]">
      <div
        className="mx-auto max-w-6xl px-6 pt-12 md:px-12"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to case studies</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            {project.category} · {project.timeline}
          </span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="display text-[clamp(2.6rem,6vw,5rem)] leading-[0.96] tracking-[-0.03em] text-[var(--ink)]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              {project.tagline || project.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Live site
                <ExternalLink size={16} />
              </a>
            )}
            {project.videoId && (
              <a
                href={`https://www.youtube.com/watch?v=${project.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                Watch walkthrough
                <Play size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                GitHub repo
                <Github size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Cover */}
        <div className="mt-10">
          <ProjectCover project={project} />
        </div>

        {/* Metadata Strip */}
        <dl className="mt-10 grid gap-4 rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--accent)]">
              Role
            </dt>
            <dd className="mt-1.5 text-base font-medium text-[var(--ink)]">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--accent)]">
              Timeline
            </dt>
            <dd className="mt-1.5 text-base font-medium text-[var(--ink)]">{project.timeline}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--accent)]">
              Stack &amp; Focus
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{project.tools}</dd>
          </div>
        </dl>

        {/* System Flow Diagram */}
        {project.flow && (
          <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-6 sm:p-8">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
              <GitBranch size={14} />
              Product Flow Architecture
            </p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.flow.map((node) => (
                <li key={node.step} className="rounded-xl border border-[var(--line)] bg-[var(--paper)] p-4">
                  <span className="font-mono text-xs text-[var(--accent)]">STEP {node.step}</span>
                  <p className="mt-2 display text-base font-semibold text-[var(--ink)]">
                    {node.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{node.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* 9-Part Case Study Breakdown */}
        {project.story && (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {storyFields.map((field) => (
              <div
                key={field.key}
                className="rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-6"
              >
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                  <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--ink)]">
                    {field.label}
                  </h2>
                  <span className="font-mono text-xs text-[var(--accent)]">{field.num}</span>
                </div>
                <p className="mt-3.5 text-sm leading-relaxed text-[var(--muted)]">
                  {project.story[field.key]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
