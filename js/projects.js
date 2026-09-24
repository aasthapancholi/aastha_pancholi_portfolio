/**
 * Projects Renderer: Aastha Pancholi Portfolio
 */

import { projectsData } from './data.js';

export function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projectsData.map((project) => `
    <article class="project-card" id="project-${project.id}">
      <div class="project-visual-wrapper">
        <img 
          src="${project.image}" 
          alt="${project.imageAlt}" 
          width="720" 
          height="440" 
          loading="lazy"
        />
      </div>

      <div class="project-info">
        <div class="project-meta-top">
          <span class="project-number">PROJECT // ${project.id}</span>
          <span class="status-badge">
            <span class="status-dot"></span>
            Factual Implementation
          </span>
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-desc">${project.description}</p>

        <ul class="bullet-list" aria-label="Project Highlights">
          ${project.highlights.map((item) => `<li>${item}</li>`).join('')}
        </ul>

        <div class="tags-cloud" style="margin-top: 0.5rem;" aria-label="Technologies used">
          ${project.tags.map((tag) => `<span class="tag tag-cyan">${tag}</span>`).join('')}
        </div>

        <div class="project-actions">
          <a 
            href="${project.githubUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary btn-sm"
            aria-label="View source code for ${project.title} on GitHub (opens in new tab)"
          >
            <span>View Source Code</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}
