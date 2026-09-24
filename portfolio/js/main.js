/**
 * Main Application Bootstrap: Aastha Pancholi Portfolio
 */

import { initNavbar } from './navbar.js';
import { renderProjects } from './projects.js';
import { initDataVisual } from './visual.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Navbar & Drawer interactions
  initNavbar();

  // 2. Render Project Cards dynamically
  renderProjects();

  // 3. Initialize Interactive Canvas Visual
  initDataVisual();

  // 4. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Contact Assistant: Topic selector for pre-composed emails
  const topicSelect = document.getElementById('contact-topic');
  const launchEmailBtn = document.getElementById('launch-email-btn');

  if (topicSelect && launchEmailBtn) {
    const updateMailto = () => {
      const topic = topicSelect.value;
      let subject = 'Inquiry for Aastha Pancholi';
      let body = 'Hello Aastha,\n\nI came across your portfolio and would like to connect regarding ';

      if (topic === 'opportunity') {
        subject = 'Career / Internship Opportunity - Data Science & ML';
        body += 'an opportunity in data science and machine learning at our organisation.\n\nBest regards,\n[Your Name]';
      } else if (topic === 'project') {
        subject = 'Question regarding your Data Science Projects';
        body += 'your projects (Mood Medic / Road Lane Requirement Prediction).\n\nBest regards,\n[Your Name]';
      } else if (topic === 'academic') {
        subject = 'Health Informatics & Academic Collaboration';
        body += 'collaboration in healthcare technology and data analytics.\n\nBest regards,\n[Your Name]';
      } else {
        subject = 'General Discussion / Professional Networking';
        body += 'connecting professionally.\n\nBest regards,\n[Your Name]';
      }

      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      launchEmailBtn.setAttribute('href', `mailto:aasthapancholi28@gmail.com?subject=${encodedSubject}&body=${encodedBody}`);
    };

    topicSelect.addEventListener('change', updateMailto);
    updateMailto();
  }

  // 6. Smooth scrolling for internal anchor links with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update browser URL without jumping
        history.pushState(null, '', href);
      }
    });
  });
});
