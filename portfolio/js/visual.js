/**
 * Interactive Data Science Canvas Visual: Aastha Pancholi Portfolio
 * Renders connected nodes, coordinate grid lines, and responsive data points.
 */

export function initDataVisual() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animationFrameId;
  let width = 0;
  let height = 0;
  const nodes = [];
  const nodeCount = 38;
  const connectionDistance = 100;
  const mouse = { x: -1000, y: -1000, radius: 120 };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  class Node {
    constructor(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.baseRadius = Math.random() * 2 + 2;
      this.radius = this.baseRadius;
      this.color = Math.random() > 0.4 ? '#38bdf8' : '#818cf8';
      this.alpha = Math.random() * 0.5 + 0.4;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update(w, h) {
      if (!prefersReducedMotion) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off canvas boundaries
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        this.pulsePhase += 0.03;
      }

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const factor = (1 - dist / mouse.radius);
        this.radius = this.baseRadius + factor * 2.5;
        this.x -= (dx / dist) * factor * 1.5;
        this.y -= (dy / dist) * factor * 1.5;
      } else {
        this.radius = this.baseRadius + (prefersReducedMotion ? 0 : Math.sin(this.pulsePhase) * 0.5);
      }
    }

    draw(context) {
      context.save();
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = this.color;
      context.globalAlpha = this.alpha;
      context.shadowColor = this.color;
      context.shadowBlur = 8;
      context.fill();
      context.restore();
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    if (nodes.length === 0) {
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(width, height));
      }
    }
  }

  function drawGrid() {
    ctx.save();
    ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
    ctx.lineWidth = 0.5;

    const step = 35;
    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.35;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = '#38bdf8';
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    drawGrid();

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update(width, height);
    }

    drawConnections();

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].draw(ctx);
    }

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  // Pointer event listeners
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Touch support for tablets/mobile
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    }
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('resize', () => {
    resize();
    if (prefersReducedMotion) {
      animate();
    }
  });

  // Initial startup
  resize();
  animate();

  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}
