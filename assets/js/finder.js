/**
 * Fernly — Houseplant Care & Plant Finder Guide
 * Plant Finder & Care Card Modal Module (finder.js)
 * Live multi-filter, search, sorting, deep linking, accessible care modal, and JSON-LD.
 */

(function () {
  'use strict';

  window.FernlyFinder = {
    currentFilters: {
      search: '',
      light: 'all',
      space: 'all',
      difficulty: 'all',
      size: 'all',
      petSafeOnly: false,
      category: 'all',
      sort: 'name-asc'
    },

    init: function () {
      this.bindControls();
      this.parseDeepLinks();
      this.applyFilters();
    },

    parseDeepLinks: function () {
      const params = new URLSearchParams(window.location.search);

      if (params.has('category')) {
        this.currentFilters.category = params.get('category').toLowerCase();
      }
      if (params.has('light')) {
        this.currentFilters.light = params.get('light').toLowerCase();
        const lightSelect = document.getElementById('filter-light');
        if (lightSelect) lightSelect.value = this.currentFilters.light;
      }
      if (params.has('pet')) {
        const petVal = params.get('pet').toLowerCase();
        if (petVal === 'safe' || petVal === 'true') {
          this.currentFilters.petSafeOnly = true;
          const petCheckbox = document.getElementById('filter-pet-safe');
          if (petCheckbox) petCheckbox.checked = true;
        }
      }
      if (params.has('difficulty')) {
        this.currentFilters.difficulty = params.get('difficulty').toLowerCase();
        const diffSelect = document.getElementById('filter-difficulty');
        if (diffSelect) diffSelect.value = this.currentFilters.difficulty;
      }
      if (params.has('space')) {
        this.currentFilters.space = params.get('space').toLowerCase();
        const spaceSelect = document.getElementById('filter-space');
        if (spaceSelect) spaceSelect.value = this.currentFilters.space;
      }
      if (params.has('q')) {
        this.currentFilters.search = params.get('q').toLowerCase();
        const searchInput = document.getElementById('finder-search');
        if (searchInput) searchInput.value = this.currentFilters.search;
      }
    },

    bindControls: function () {
      const searchInput = document.getElementById('finder-search');
      const lightSelect = document.getElementById('filter-light');
      const spaceSelect = document.getElementById('filter-space');
      const diffSelect = document.getElementById('filter-difficulty');
      const sizeSelect = document.getElementById('filter-size');
      const petCheckbox = document.getElementById('filter-pet-safe');
      const sortSelect = document.getElementById('finder-sort');
      const resetBtn = document.getElementById('filter-reset-btn');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.currentFilters.search = e.target.value.toLowerCase().trim();
          this.applyFilters();
        });
      }

      if (lightSelect) {
        lightSelect.addEventListener('change', (e) => {
          this.currentFilters.light = e.target.value;
          this.applyFilters();
        });
      }

      if (spaceSelect) {
        spaceSelect.addEventListener('change', (e) => {
          this.currentFilters.space = e.target.value;
          this.applyFilters();
        });
      }

      if (diffSelect) {
        diffSelect.addEventListener('change', (e) => {
          this.currentFilters.difficulty = e.target.value;
          this.applyFilters();
        });
      }

      if (sizeSelect) {
        sizeSelect.addEventListener('change', (e) => {
          this.currentFilters.size = e.target.value;
          this.applyFilters();
        });
      }

      if (petCheckbox) {
        petCheckbox.addEventListener('change', (e) => {
          this.currentFilters.petSafeOnly = e.target.checked;
          this.applyFilters();
        });
      }

      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          this.currentFilters.sort = e.target.value;
          this.applyFilters();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.resetFilters();
        });
      }
    },

    resetFilters: function () {
      this.currentFilters = {
        search: '',
        light: 'all',
        space: 'all',
        difficulty: 'all',
        size: 'all',
        petSafeOnly: false,
        category: 'all',
        sort: 'name-asc'
      };

      const searchInput = document.getElementById('finder-search');
      const lightSelect = document.getElementById('filter-light');
      const spaceSelect = document.getElementById('filter-space');
      const diffSelect = document.getElementById('filter-difficulty');
      const sizeSelect = document.getElementById('filter-size');
      const petCheckbox = document.getElementById('filter-pet-safe');
      const sortSelect = document.getElementById('finder-sort');

      if (searchInput) searchInput.value = '';
      if (lightSelect) lightSelect.value = 'all';
      if (spaceSelect) spaceSelect.value = 'all';
      if (diffSelect) diffSelect.value = 'all';
      if (sizeSelect) sizeSelect.value = 'all';
      if (petCheckbox) petCheckbox.checked = false;
      if (sortSelect) sortSelect.value = 'name-asc';

      // Update URL without reloading
      if (window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      this.applyFilters();
      window.FernlyUI.showToast('Filters reset', 'ph-arrows-counter-clockwise');
    },

    applyFilters: function () {
      if (!window.FERNLY_DATA || !window.FERNLY_DATA.plants) return;

      const all = window.FERNLY_DATA.plants;
      const f = this.currentFilters;

      let filtered = all.filter(plant => {
        // Search
        if (f.search) {
          const matchCommon = plant.commonName.toLowerCase().includes(f.search);
          const matchBotanical = plant.botanicalName.toLowerCase().includes(f.search);
          const matchAka = plant.aka && plant.aka.toLowerCase().includes(f.search);
          if (!matchCommon && !matchBotanical && !matchAka) return false;
        }

        // Light
        if (f.light !== 'all') {
          if (!plant.light.toLowerCase().includes(f.light)) return false;
        }

        // Space
        if (f.space !== 'all') {
          if (plant.space.toLowerCase() !== f.space) return false;
        }

        // Difficulty
        if (f.difficulty !== 'all') {
          if (plant.difficulty.toLowerCase() !== f.difficulty) return false;
        }

        // Size
        if (f.size !== 'all') {
          if (plant.size.toLowerCase() !== f.size) return false;
        }

        // Pet Safe Only
        if (f.petSafeOnly && !plant.petSafe) {
          return false;
        }

        // Category
        if (f.category !== 'all') {
          if (plant.category.toLowerCase() !== f.category) return false;
        }

        return true;
      });

      // Sorting
      filtered.sort((a, b) => {
        if (f.sort === 'name-asc') {
          return a.commonName.localeCompare(b.commonName);
        } else if (f.sort === 'name-desc') {
          return b.commonName.localeCompare(a.commonName);
        } else if (f.sort === 'diff-asc') {
          const order = { beginner: 1, intermediate: 2, expert: 3 };
          return (order[a.difficulty] || 2) - (order[b.difficulty] || 2);
        } else if (f.sort === 'size-asc') {
          const sOrder = { small: 1, medium: 2, large: 3 };
          return (sOrder[a.size] || 2) - (sOrder[b.size] || 2);
        }
        return 0;
      });

      this.renderGrid(filtered, all.length);
      this.updateActiveFilterTags();
      this.updateJsonLd(filtered);
    },

    renderGrid: function (plants, totalCount) {
      const grid = document.getElementById('finder-plants-grid');
      const countEl = document.getElementById('finder-results-count');
      const emptyState = document.getElementById('finder-empty-state');

      if (countEl) {
        countEl.textContent = `Showing ${plants.length} of ${totalCount} plants`;
      }

      if (!grid) return;

      if (plants.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.classList.add('visible');
        return;
      }

      grid.style.display = 'grid';
      if (emptyState) emptyState.classList.remove('visible');

      grid.innerHTML = '';
      plants.forEach(plant => {
        const isSaved = window.FernlyMyPlants ? window.FernlyMyPlants.isSaved(plant.id) : false;

        const card = document.createElement('article');
        card.className = 'plant-card';
        card.setAttribute('aria-label', `${plant.commonName} (${plant.botanicalName})`);

        card.innerHTML = `
          <div class="plant-card-media">
            <img src="${plant.image}" alt="${plant.altText}" loading="lazy">
            <button class="plant-favorite-btn ${isSaved ? 'saved' : ''}" data-plant-id="${plant.id}" aria-label="${isSaved ? 'Remove from My Plants' : 'Add to My Plants'}">
              <i class="ph ph-heart"></i>
            </button>
          </div>
          <div class="plant-card-body">
            <div class="plant-card-header">
              <h3 class="plant-card-title">${plant.commonName}</h3>
              <p class="plant-botanical-name">${plant.botanicalName}</p>
            </div>
            <div class="plant-chips-row">
              <span class="plant-chip">
                <i class="ph ph-sun"></i> ${plant.light}
              </span>
              <span class="plant-chip">
                <i class="ph ph-gauge"></i> ${plant.difficulty}
              </span>
              <span class="pet-badge ${plant.petSafe ? 'pet-badge-safe' : 'pet-badge-toxic'}">
                <i class="ph ${plant.petSafe ? 'ph-paw-print' : 'ph-warning-octagon'}"></i>
                ${plant.petSafe ? 'Pet-Safe' : 'Toxic to Pets'}
              </span>
            </div>
            <p class="plant-card-summary">${plant.summary}</p>
            <div class="plant-card-actions">
              <button class="btn btn-primary btn-sm" onclick="window.FernlyFinder.openCareModal('${plant.id}')">
                <i class="ph ph-file-text"></i> Care Card
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.FernlySchedule && window.FernlySchedule.prefillPlant('${plant.id}')" title="Calculate Watering Schedule">
                <i class="ph ph-drop"></i> Water
              </button>
            </div>
          </div>
        `;

        // Wire heart button
        const heartBtn = card.querySelector('.plant-favorite-btn');
        heartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (window.FernlyMyPlants) {
            window.FernlyMyPlants.toggleSave(plant.id);
          }
        });

        grid.appendChild(card);
      });
    },

    updateActiveFilterTags: function () {
      const container = document.getElementById('active-filters-tags');
      if (!container) return;

      container.innerHTML = '';
      const f = this.currentFilters;

      const addTag = (label, onRemove) => {
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        tag.innerHTML = `${label} <button type="button" aria-label="Remove filter">&times;</button>`;
        tag.querySelector('button').addEventListener('click', onRemove);
        container.appendChild(tag);
      };

      if (f.search) {
        addTag(`Search: "${f.search}"`, () => {
          const el = document.getElementById('finder-search');
          if (el) el.value = '';
          f.search = '';
          this.applyFilters();
        });
      }

      if (f.category !== 'all') {
        addTag(`Category: ${f.category}`, () => {
          f.category = 'all';
          this.applyFilters();
        });
      }

      if (f.light !== 'all') {
        addTag(`Light: ${f.light}`, () => {
          const el = document.getElementById('filter-light');
          if (el) el.value = 'all';
          f.light = 'all';
          this.applyFilters();
        });
      }

      if (f.space !== 'all') {
        addTag(`Space: ${f.space}`, () => {
          const el = document.getElementById('filter-space');
          if (el) el.value = 'all';
          f.space = 'all';
          this.applyFilters();
        });
      }

      if (f.difficulty !== 'all') {
        addTag(`Difficulty: ${f.difficulty}`, () => {
          const el = document.getElementById('filter-difficulty');
          if (el) el.value = 'all';
          f.difficulty = 'all';
          this.applyFilters();
        });
      }

      if (f.size !== 'all') {
        addTag(`Size: ${f.size}`, () => {
          const el = document.getElementById('filter-size');
          if (el) el.value = 'all';
          f.size = 'all';
          this.applyFilters();
        });
      }

      if (f.petSafeOnly) {
        addTag('Pet-Safe Only', () => {
          const el = document.getElementById('filter-pet-safe');
          if (el) el.checked = false;
          f.petSafeOnly = false;
          this.applyFilters();
        });
      }
    },

    // Care Card Accessible Detail Modal
    openCareModal: function (plantId) {
      if (!window.FERNLY_DATA || !window.FERNLY_DATA.plants) return;
      const plant = window.FERNLY_DATA.plants.find(p => p.id === plantId);
      if (!plant) return;

      const modal = document.getElementById('care-card-modal');
      if (!modal) return;

      // Populate elements
      const img = document.getElementById('modal-plant-img');
      const title = document.getElementById('modal-plant-title');
      const botanical = document.getElementById('modal-plant-botanical');
      const petCallout = document.getElementById('modal-pet-callout');
      const specsContainer = document.getElementById('modal-specs-grid');
      const careDetails = document.getElementById('modal-care-details');
      const problemsContainer = document.getElementById('modal-problems-list');
      const waterBtn = document.getElementById('modal-water-btn');
      const saveBtn = document.getElementById('modal-save-btn');

      if (img) {
        img.src = plant.image;
        img.alt = plant.altText;
      }
      if (title) title.textContent = plant.commonName;
      if (botanical) botanical.textContent = `${plant.botanicalName} (${plant.family})`;

      if (petCallout) {
        petCallout.className = `pet-safety-callout ${plant.petSafe ? 'pet-badge-safe' : 'pet-badge-toxic'}`;
        petCallout.innerHTML = `
          <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
            <i class="ph ${plant.petSafe ? 'ph-paw-print' : 'ph-warning-octagon'}" style="font-size: 1.5rem; margin-top: 0.1rem;"></i>
            <div>
              <strong>${plant.petSafe ? 'Pet-Safe Plant' : 'Toxic to Pets'}</strong>
              <p style="margin-top: 0.25rem; font-size: 0.85rem; color: inherit;">
                ${plant.petNote}
                <br><em>General guidance only. If ingestion occurs, immediately contact your veterinarian or a pet poison hotline.</em>
              </p>
            </div>
          </div>
        `;
      }

      if (specsContainer) {
        specsContainer.innerHTML = `
          <div class="care-spec-item">
            <span class="care-spec-label"><i class="ph ph-sun"></i> Light</span>
            <span class="care-spec-val">${plant.light}</span>
          </div>
          <div class="care-spec-item">
            <span class="care-spec-label"><i class="ph ph-drop"></i> Water</span>
            <span class="care-spec-val">Every ${plant.wateringFrequencyDays} days (general)</span>
          </div>
          <div class="care-spec-item">
            <span class="care-spec-label"><i class="ph ph-cloud"></i> Humidity</span>
            <span class="care-spec-val">${plant.humidity}</span>
          </div>
          <div class="care-spec-item">
            <span class="care-spec-label"><i class="ph ph-thermometer"></i> Temperature</span>
            <span class="care-spec-val">${plant.tempRange}</span>
          </div>
          <div class="care-spec-item">
            <span class="care-spec-label"><i class="ph ph-arrows-out"></i> Mature Size</span>
            <span class="care-spec-val">${plant.matureSize}</span>
          </div>
          <div class="care-spec-item">
            <span class="care-spec-label"><i class="ph ph-gauge"></i> Difficulty</span>
            <span class="care-spec-val" style="text-transform: capitalize;">${plant.difficulty}</span>
          </div>
        `;
      }

      if (careDetails) {
        careDetails.innerHTML = `
          <div class="care-details-block">
            <h4><i class="ph ph-sun"></i> Lighting Nuance</h4>
            <p>${plant.lightDetail}</p>
          </div>
          <div class="care-details-block">
            <h4><i class="ph ph-drop"></i> Watering Method</h4>
            <p>${plant.wateringDescription}</p>
          </div>
          <div class="care-details-block">
            <h4><i class="ph ph-plant"></i> Potting Substrate</h4>
            <p>${plant.soil}</p>
          </div>
          <div class="care-details-block">
            <h4><i class="ph ph-flask"></i> Fertilizer Schedule</h4>
            <p>${plant.fertilizer}</p>
          </div>
          <div class="care-details-block">
            <h4><i class="ph ph-arrows-clockwise"></i> Repotting & Propagation</h4>
            <p><strong>Repotting:</strong> ${plant.repotting}</p>
            <p style="margin-top: 0.35rem;"><strong>Propagation:</strong> ${plant.propagation}</p>
          </div>
        `;
      }

      if (problemsContainer) {
        problemsContainer.innerHTML = '';
        if (plant.commonProblems && plant.commonProblems.length > 0) {
          plant.commonProblems.forEach(prob => {
            const li = document.createElement('div');
            li.style.marginBottom = '0.75rem';
            li.style.padding = '0.75rem';
            li.style.background = 'var(--color-surface-soft)';
            li.style.borderRadius = 'var(--radius-inner)';
            li.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <strong style="color: var(--color-primary); font-size: 0.9rem;">
                  <i class="ph ph-warning-circle" style="color: var(--color-accent);"></i> ${prob.symptom.replace('-', ' ').toUpperCase()}
                </strong>
                <button class="btn btn-sm" style="color: var(--color-secondary); font-size: 0.8rem; padding: 0.2rem 0.5rem;" onclick="window.FernlyFinder.diagnoseSymptom('${plant.id}', '${prob.symptom}')">
                  Diagnose Fix &rarr;
                </button>
              </div>
              <p style="font-size: 0.84rem; color: var(--color-text-muted); margin: 0;">
                <em>Likely Cause:</em> ${prob.cause}. <br><em>Fix:</em> ${prob.fix}
              </p>
            `;
            problemsContainer.appendChild(li);
          });
        }
      }

      if (waterBtn) {
        waterBtn.onclick = () => {
          window.FernlyUI.closeModal('care-card-modal');
          if (window.FernlySchedule) {
            window.FernlySchedule.prefillPlant(plant.id);
          }
        };
      }

      if (saveBtn) {
        const updateSaveBtn = () => {
          const isSaved = window.FernlyMyPlants && window.FernlyMyPlants.isSaved(plant.id);
          saveBtn.innerHTML = `<i class="ph ${isSaved ? 'ph-heart-fill' : 'ph-heart'}"></i> ${isSaved ? 'In My Plants' : 'Add to My Plants'}`;
          if (isSaved) {
            saveBtn.classList.add('btn-accent');
            saveBtn.classList.remove('btn-secondary');
          } else {
            saveBtn.classList.remove('btn-accent');
            saveBtn.classList.add('btn-secondary');
          }
        };

        updateSaveBtn();
        saveBtn.onclick = () => {
          if (window.FernlyMyPlants) {
            window.FernlyMyPlants.toggleSave(plant.id);
            updateSaveBtn();
          }
        };
      }

      window.FernlyUI.openModal('care-card-modal');
    },

    diagnoseSymptom: function (plantId, symptomId) {
      window.FernlyUI.closeModal('care-card-modal');
      const troubleshooter = document.getElementById('troubleshooter');
      if (troubleshooter) {
        troubleshooter.scrollIntoView({ behavior: 'smooth' });
        if (window.FernlyTroubleshoot) {
          window.FernlyTroubleshoot.selectSymptom(symptomId, plantId);
        }
      }
    },

    updateJsonLd: function (visiblePlants) {
      let script = document.getElementById('json-ld-itemlist');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-itemlist';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      const jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Fernly Houseplant Catalog',
        'itemListElement': visiblePlants.slice(0, 15).map((p, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'item': {
            '@type': 'Thing',
            'name': p.commonName,
            'alternateName': p.botanicalName,
            'description': p.summary,
            'image': p.image
          }
        }))
      };

      script.textContent = JSON.stringify(jsonLdData);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('finder-plants-grid')) {
      window.FernlyFinder.init();
    }
  });
})();
