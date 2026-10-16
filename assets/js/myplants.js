/**
 * Fernly — Houseplant Care & Plant Finder Guide
 * My Plants Saved Collection Module (myplants.js)
 * Persistent localStorage storage, notes, slide-over drawer, and section rendering.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'fernly_saved_plants';

  function setHeartIcon(btn, saved) {
    const icon = btn.querySelector('i');
    if (!icon) return;
    icon.classList.toggle('ph-fill', saved);
    icon.classList.toggle('ph', !saved);
    icon.classList.add('ph-heart');
  }

  window.FernlyMyPlants = {
    // Get array of saved plant records: [{ id, notes, addedAt }]
    getSavedPlants: function () {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      } catch (e) {
        return [];
      }
    },

    isSaved: function (plantId) {
      const list = this.getSavedPlants();
      return list.some(item => item.id === plantId);
    },

    toggleSave: function (plantId) {
      let list = this.getSavedPlants();
      const existingIdx = list.findIndex(item => item.id === plantId);
      const plant = (window.FERNLY_DATA && window.FERNLY_DATA.plants) ?
        window.FERNLY_DATA.plants.find(p => p.id === plantId) : null;

      const name = plant ? plant.commonName : 'Plant';

      if (existingIdx >= 0) {
        list.splice(existingIdx, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        window.FernlyUI.showToast(`Removed "${name}" from My Plants`, 'ph-heart-break');
      } else {
        list.push({
          id: plantId,
          notes: '',
          addedAt: new Date().toISOString()
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        window.FernlyUI.showToast(`Saved "${name}" to My Plants!`, 'ph-heart-fill');
      }

      this.notifyUpdate();
      return this.isSaved(plantId);
    },

    remove: function (plantId) {
      let list = this.getSavedPlants();
      list = list.filter(item => item.id !== plantId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      this.notifyUpdate();
      window.FernlyUI.showToast('Removed from collection', 'ph-trash');
    },

    updateNotes: function (plantId, notes) {
      let list = this.getSavedPlants();
      const item = list.find(p => p.id === plantId);
      if (item) {
        item.notes = notes;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        this.notifyUpdate();
      }
    },

    notifyUpdate: function () {
      window.dispatchEvent(new CustomEvent('fernly:myplants-updated'));
      this.renderDrawer();
      this.renderSection();
      this.updateCardHearts();
    },

    updateCardHearts: function () {
      document.querySelectorAll('.plant-favorite-btn').forEach(btn => {
        const id = btn.getAttribute('data-plant-id');
        if (id) {
          if (this.isSaved(id)) {
            btn.classList.add('saved');
            setHeartIcon(btn, true);
            btn.setAttribute('aria-label', 'Remove from My Plants');
          } else {
            btn.classList.remove('saved');
            setHeartIcon(btn, false);
            btn.setAttribute('aria-label', 'Save to My Plants');
          }
        }
      });
    },

    openDrawer: function () {
      const drawer = document.getElementById('my-plants-drawer');
      const overlay = document.getElementById('my-plants-drawer-overlay');
      if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
      this.renderDrawer();
    },

    closeDrawer: function () {
      const drawer = document.getElementById('my-plants-drawer');
      const overlay = document.getElementById('my-plants-drawer-overlay');
      if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    },

    renderDrawer: function () {
      const container = document.getElementById('my-plants-drawer-list');
      if (!container) return;

      const saved = this.getSavedPlants();
      const allPlants = (window.FERNLY_DATA && window.FERNLY_DATA.plants) || [];

      if (saved.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 2.5rem 1rem; color: var(--color-text-muted);">
            <i class="ph ph-plant" style="font-size: 2.5rem; color: var(--color-text-light); margin-bottom: 0.75rem; display: block;"></i>
            <h4 style="margin-bottom: 0.35rem; font-size: 1.1rem; color: var(--color-primary);">Your garden is empty</h4>
            <p style="font-size: 0.88rem; margin-bottom: 1.25rem;">Tap the heart icon on any plant card to save it to your private collection.</p>
            <button class="btn btn-primary btn-sm" onclick="window.FernlyMyPlants.closeDrawer(); window.location.href='plant-finder.html#finder';">
              Browse Plant Finder
            </button>
          </div>
        `;
        return;
      }

      container.innerHTML = '';
      saved.forEach(item => {
        const plant = allPlants.find(p => p.id === item.id);
        if (!plant) return;

        const card = document.createElement('div');
        card.className = 'saved-plant-card';
        card.innerHTML = `
          <img src="${plant.image}" alt="${plant.commonName}" class="saved-plant-thumb" loading="lazy">
          <div class="saved-plant-info">
            <h4>${plant.commonName}</h4>
            <span class="saved-plant-botanical">${plant.botanicalName}</span>
            <textarea class="saved-plant-notes" placeholder="Add personal note (e.g., location, last repotted)..." data-notes-id="${plant.id}">${item.notes || ''}</textarea>
            <div class="saved-plant-actions">
              <button class="btn btn-secondary btn-sm" onclick="window.FernlyFinder && window.FernlyFinder.openCareModal('${plant.id}')">
                <i class="ph ph-file-text"></i> Care Card
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.FernlySchedule && window.FernlySchedule.prefillPlant('${plant.id}')">
                <i class="ph ph-drop"></i> Water
              </button>
              <button class="btn btn-sm" style="color: #b53820; padding: 0.4rem;" onclick="window.FernlyMyPlants.remove('${plant.id}')" title="Remove">
                <i class="ph ph-trash" style="font-size: 1.1rem;"></i>
              </button>
            </div>
          </div>
        `;

        // Notes change listener
        const textarea = card.querySelector('textarea');
        textarea.addEventListener('change', function () {
          window.FernlyMyPlants.updateNotes(plant.id, this.value);
        });

        container.appendChild(card);
      });
    },

    renderSection: function () {
      const container = document.getElementById('my-plants-section-grid');
      const countEl = document.getElementById('my-plants-section-count');
      if (!container) return;

      const saved = this.getSavedPlants();
      const allPlants = (window.FERNLY_DATA && window.FERNLY_DATA.plants) || [];

      if (countEl) {
        countEl.textContent = `${saved.length} plant${saved.length === 1 ? '' : 's'} in your collection`;
      }

      if (saved.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-global);">
            <i class="ph ph-heart" style="font-size: 2.5rem; color: var(--color-accent); margin-bottom: 0.75rem; display: block;"></i>
            <h3 style="margin-bottom: 0.4rem;">No saved plants yet</h3>
            <p style="margin-bottom: 1.5rem;">Click the heart icon on any plant card in the finder to bookmark care cards and sync with the watering schedule.</p>
            <a href="#finder" class="btn btn-primary btn-sm">Explore Plants Above</a>
          </div>
        `;
        return;
      }

      container.innerHTML = '';
      saved.forEach(item => {
        const plant = allPlants.find(p => p.id === item.id);
        if (!plant) return;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
            <img src="${plant.image}" alt="${plant.commonName}" style="width: 80px; height: 80px; border-radius: var(--radius-inner); object-fit: cover;">
            <div>
              <h3 style="font-size: 1.15rem; margin-bottom: 0.2rem;">${plant.commonName}</h3>
              <p style="font-style: italic; font-size: 0.82rem; color: var(--color-text-light);">${plant.botanicalName}</p>
              <div style="margin-top: 0.4rem;">
                <span class="pet-badge ${plant.petSafe ? 'pet-badge-safe' : 'pet-badge-toxic'}">
                  <i class="ph ${plant.petSafe ? 'ph-paw-print' : 'ph-warning-octagon'}"></i>
                  ${plant.petSafe ? 'Pet-Safe' : 'Toxic to Pets'}
                </span>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 1rem; flex-grow: 1;">
            <label style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: var(--color-secondary); display: block; margin-bottom: 0.25rem;">Personal Notes:</label>
            <textarea class="form-textarea" style="padding: 0.5rem; font-size: 0.85rem; height: 70px;" placeholder="Add location notes, repotting dates..." data-section-notes="${plant.id}">${item.notes || ''}</textarea>
          </div>
          <div style="display: flex; gap: 0.5rem; border-top: 1px solid var(--color-border-subtle); padding-top: 0.85rem;">
            <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="window.FernlyFinder && window.FernlyFinder.openCareModal('${plant.id}')">
              <i class="ph ph-file-text"></i> Care Card
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.FernlySchedule && window.FernlySchedule.prefillPlant('${plant.id}')" title="Schedule">
              <i class="ph ph-drop"></i>
            </button>
            <button class="btn btn-secondary btn-sm" style="color: #b53820;" onclick="window.FernlyMyPlants.remove('${plant.id}')" title="Remove">
              <i class="ph ph-trash"></i>
            </button>
          </div>
        `;

        const textarea = card.querySelector('textarea');
        textarea.addEventListener('change', function () {
          window.FernlyMyPlants.updateNotes(plant.id, this.value);
        });

        container.appendChild(card);
      });
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    const drawerOverlay = document.getElementById('my-plants-drawer-overlay');
    const drawerClose = document.getElementById('my-plants-drawer-close');

    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', function () {
        window.FernlyMyPlants.closeDrawer();
      });
    }
    if (drawerClose) {
      drawerClose.addEventListener('click', function () {
        window.FernlyMyPlants.closeDrawer();
      });
    }

    window.FernlyMyPlants.renderDrawer();
    window.FernlyMyPlants.renderSection();
  });
})();
