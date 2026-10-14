/**
 * Fernly — Houseplant Care & Plant Finder Guide
 * Interactive Light-Level Guide Module (light.js)
 * Calculates computed illumination and renders dynamic SVG visualization.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const guideContainer = document.getElementById('light-guide');
    if (!guideContainer) return;

    let selectedDirection = 'south';
    let selectedDistance = 'medium';

    const directionBtns = guideContainer.querySelectorAll('[data-light-dir]');
    const distanceBtns = guideContainer.querySelectorAll('[data-light-dist]');

    const titleEl = document.getElementById('light-cat-title');
    const descEl = document.getElementById('light-cat-desc');
    const fcEl = document.getElementById('light-cat-fc');
    const recsContainer = document.getElementById('light-cat-recs');
    const svgBeam = document.getElementById('svg-sunbeam');
    const svgRoomGlow = document.getElementById('svg-room-glow');
    const deepLinkEl = document.getElementById('light-explore-link');

    function updateLightDisplay() {
      if (!window.FERNLY_DATA || !window.FERNLY_DATA.lightGuideData) return;

      const dirData = window.FERNLY_DATA.lightGuideData[selectedDirection];
      if (!dirData) return;
      const data = dirData[selectedDistance];
      if (!data) return;

      // Update text
      if (titleEl) titleEl.textContent = data.category;
      if (descEl) descEl.textContent = data.description;
      if (fcEl) fcEl.textContent = `Estimated Lux: ${data.footCandles}`;

      // Update recommended plants chips
      if (recsContainer) {
        recsContainer.innerHTML = '';
        data.recommended.forEach(name => {
          const tag = document.createElement('span');
          tag.className = 'light-rec-tag';
          tag.textContent = name;
          recsContainer.appendChild(tag);
        });
      }

      // Update explore link
      if (deepLinkEl) {
        let filterParam = 'bright';
        if (data.category.toLowerCase().includes('direct sun')) filterParam = 'direct';
        else if (data.category.toLowerCase().includes('low')) filterParam = 'low';
        else if (data.category.toLowerCase().includes('medium')) filterParam = 'medium';
        else filterParam = 'bright';

        deepLinkEl.href = `plant-finder.html?light=${filterParam}#finder`;
      }

      // Update SVG visualization
      if (svgBeam && svgRoomGlow) {
        let opacity = 0.6;
        let color = '#fcd34d'; // bright sunny yellow
        let spread = 'polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)';

        if (selectedDirection === 'north') {
          color = '#93c5fd'; // cool diffused sky blue
          opacity = 0.35;
        } else if (selectedDirection === 'south') {
          color = '#fbbf24'; // rich golden solar beam
          opacity = selectedDistance === 'sill' ? 0.85 : 0.6;
        } else if (selectedDirection === 'east') {
          color = '#fef08a'; // soft morning yellow
          opacity = 0.55;
        } else if (selectedDirection === 'west') {
          color = '#f97316'; // warm amber sunset
          opacity = 0.7;
        }

        // Adjust SVG beam transform and opacity
        svgBeam.style.fill = color;
        svgBeam.style.opacity = opacity;

        if (selectedDistance === 'sill') {
          svgBeam.setAttribute('d', 'M 160 30 L 240 30 L 320 220 L 80 220 Z');
          svgRoomGlow.style.opacity = '0.7';
        } else if (selectedDistance === 'medium') {
          svgBeam.setAttribute('d', 'M 175 30 L 225 30 L 360 220 L 40 220 Z');
          svgRoomGlow.style.opacity = '0.45';
        } else {
          svgBeam.setAttribute('d', 'M 185 30 L 215 30 L 390 220 L 10 220 Z');
          svgRoomGlow.style.opacity = '0.25';
        }
      }
    }

    // Direction button events
    directionBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        directionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDirection = btn.getAttribute('data-light-dir');
        updateLightDisplay();
      });
    });

    // Distance button events
    distanceBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        distanceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDistance = btn.getAttribute('data-light-dist');
        updateLightDisplay();
      });
    });

    // Initial render
    updateLightDisplay();
  });
})();
