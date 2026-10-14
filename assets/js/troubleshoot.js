/**
 * Fernly — Houseplant Care & Plant Finder Guide
 * Common-Problems Troubleshooter Module (troubleshoot.js)
 * Symptom selection, guided environmental diagnosis, ranked likely causes, and actionable fixes.
 */

(function () {
  'use strict';

  window.FernlyTroubleshoot = {
    selectedSymptomId: null,
    selectedPlantId: null,

    init: function () {
      this.populatePlantSelector();
      this.renderSymptomButtons();
      this.bindEvents();
    },

    populatePlantSelector: function () {
      const select = document.getElementById('troubleshoot-plant-select');
      if (!select || !window.FERNLY_DATA || !window.FERNLY_DATA.plants) return;

      select.innerHTML = '<option value="">-- General Houseplant (Any species) --</option>';
      window.FERNLY_DATA.plants.forEach(plant => {
        const opt = document.createElement('option');
        opt.value = plant.id;
        opt.textContent = `${plant.commonName} (${plant.botanicalName})`;
        select.appendChild(opt);
      });

      select.addEventListener('change', (e) => {
        this.selectedPlantId = e.target.value;
        if (this.selectedSymptomId) {
          this.diagnose();
        }
      });
    },

    renderSymptomButtons: function () {
      const container = document.getElementById('symptom-buttons-grid');
      if (!container || !window.FERNLY_DATA || !window.FERNLY_DATA.troubleshooterSymptoms) return;

      container.innerHTML = '';
      window.FERNLY_DATA.troubleshooterSymptoms.forEach(sym => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'symptom-btn';
        btn.setAttribute('data-symptom-id', sym.id);
        btn.innerHTML = `
          <i class="ph ph-stethoscope" style="font-size: 1.15rem; color: var(--color-accent);"></i>
          <span>${sym.label}</span>
        `;

        btn.addEventListener('click', () => {
          this.selectSymptom(sym.id);
        });

        container.appendChild(btn);
      });
    },

    selectSymptom: function (symptomId, plantId) {
      this.selectedSymptomId = symptomId;
      if (plantId) {
        this.selectedPlantId = plantId;
        const select = document.getElementById('troubleshoot-plant-select');
        if (select) select.value = plantId;
      }

      // Update button active state
      document.querySelectorAll('.symptom-btn').forEach(b => {
        if (b.getAttribute('data-symptom-id') === symptomId) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      // Show guided questions step
      const questionsCard = document.getElementById('troubleshoot-questions-box');
      if (questionsCard) {
        questionsCard.style.display = 'block';
        questionsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      this.diagnose();
    },

    bindEvents: function () {
      const qInputs = document.querySelectorAll('[name="q-soil"], [name="q-light"], [name="q-recent"]');
      qInputs.forEach(input => {
        input.addEventListener('change', () => {
          if (this.selectedSymptomId) {
            this.diagnose();
          }
        });
      });

      const resetBtn = document.getElementById('troubleshoot-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.selectedSymptomId = null;
          document.querySelectorAll('.symptom-btn').forEach(b => b.classList.remove('active'));
          const resultsBox = document.getElementById('diagnostic-results-box');
          const questionsBox = document.getElementById('troubleshoot-questions-box');
          if (resultsBox) resultsBox.classList.remove('visible');
          if (questionsBox) questionsBox.style.display = 'none';
          window.FernlyUI.showToast('Diagnostic cleared', 'ph-arrows-counter-clockwise');
        });
      }
    },

    diagnose: function () {
      if (!this.selectedSymptomId || !window.FERNLY_DATA || !window.FERNLY_DATA.diagnosticRules) return;

      const rule = window.FERNLY_DATA.diagnosticRules[this.selectedSymptomId];
      if (!rule) return;

      const resultsBox = document.getElementById('diagnostic-results-box');
      if (!resultsBox) return;

      // Get guided answers
      const soilAnswer = document.querySelector('[name="q-soil"]:checked')?.value || 'unknown';
      const lightAnswer = document.querySelector('[name="q-light"]:checked')?.value || 'unknown';
      const recentAnswer = document.querySelector('[name="q-recent"]:checked')?.value || 'unknown';

      // Check if specific plant selected
      let plantContext = '';
      if (this.selectedPlantId) {
        const plant = window.FERNLY_DATA.plants.find(p => p.id === this.selectedPlantId);
        if (plant) {
          plantContext = ` (Diagnosing for <strong>${plant.commonName}</strong> — standard water interval: every ${plant.wateringFrequencyDays} days)`;
        }
      }

      // Dynamic confidence phrasing
      let dynamicLikely = rule.primaryLikelyCause;
      let dynamicConfidence = rule.confidence;

      if (this.selectedSymptomId === 'yellow-leaves') {
        if (soilAnswer === 'wet') {
          dynamicLikely = 'Primary Likely Cause: Chronic Overwatering & Root Saturation';
          dynamicConfidence = 'Very High (95% match based on soggy soil report)';
        } else if (soilAnswer === 'dry') {
          dynamicLikely = 'Primary Likely Cause: Severe Underwatering & Dehydration Chlorosis';
          dynamicConfidence = 'High (80% match based on bone-dry soil report)';
        }
      } else if (this.selectedSymptomId === 'drooping') {
        if (soilAnswer === 'wet') {
          dynamicLikely = 'Primary Likely Cause: Root Rot Suffocation (Loss of root membrane pressure)';
          dynamicConfidence = 'High (85% match based on wet soil)';
        } else if (soilAnswer === 'dry') {
          dynamicLikely = 'Primary Likely Cause: Thirst & Loss of Foliar Turgor';
          dynamicConfidence = 'Very High (90% match based on dry soil)';
        }
      }

      resultsBox.innerHTML = `
        <div class="diag-header">
          <div class="diag-title-area">
            <h3>${rule.symptomTitle}${plantContext}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-top: 0.25rem;">
              ${rule.summary}
            </p>
          </div>
          <span class="diag-confidence-badge">
            <i class="ph ph-chart-bar"></i> ${dynamicConfidence}
          </span>
        </div>

        <div class="diag-ranked-causes">
          <h4 style="font-size: 1.05rem; color: var(--color-primary); margin-bottom: 0.65rem;">
            <i class="ph ph-magnifying-glass"></i> Ranked Likely Causes (General Guidance)
          </h4>
          <div style="background: var(--color-surface-tint); padding: 1rem; border-radius: var(--radius-inner); margin-bottom: 0.85rem; border: 1px solid var(--color-border);">
            <strong style="color: var(--color-primary); font-size: 0.98rem;">1. ${dynamicLikely}</strong>
            <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-top: 0.25rem;">
              Most frequent factor observed in indoor houseplants displaying this symptom.
            </p>
          </div>
          <div style="background: var(--color-surface-soft); padding: 0.85rem; border-radius: var(--radius-inner);">
            <strong style="color: var(--color-text); font-size: 0.9rem;">2. Secondary Contributing Factor:</strong>
            <ul style="padding-left: 1.25rem; margin-top: 0.35rem; font-size: 0.85rem; color: var(--color-text-muted);">
              ${rule.contributingFactors.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="diag-fix-steps">
          <h4 style="font-size: 1.05rem; color: var(--color-primary); margin-bottom: 0.65rem;">
            <i class="ph ph-wrench"></i> Recommended Step-by-Step Fixes
          </h4>
          <ol>
            ${rule.fixes.map(fix => `<li>${fix}</li>`).join('')}
          </ol>
        </div>

        <div class="diag-advisory-grid">
          <div class="advisory-box advisory-repot">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.35rem;">
              <i class="ph ph-plant"></i> When to Repot
            </h4>
            <p style="font-size: 0.85rem; line-height: 1.5;">${rule.whenToRepot}</p>
          </div>
          <div class="advisory-box advisory-help">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.35rem;">
              <i class="ph ph-first-aid-kit"></i> When to Seek Expert Help
            </h4>
            <p style="font-size: 0.85rem; line-height: 1.5;">${rule.whenToSeekHelp}</p>
          </div>
        </div>

        <div style="margin-top: 1.5rem; text-align: center; border-top: 1px solid var(--color-border-subtle); padding-top: 1rem;">
          <small style="color: var(--color-text-light); display: block; margin-bottom: 0.75rem;">
            <em>Diagnostic notes are provided as general guidance and do not replace professional agricultural or veterinary consultations.</em>
          </small>
          <button class="btn btn-secondary btn-sm" id="troubleshoot-reset-btn-inner">
            <i class="ph ph-arrows-counter-clockwise"></i> Diagnose Another Symptom
          </button>
        </div>
      `;

      resultsBox.classList.add('visible');

      const innerReset = document.getElementById('troubleshoot-reset-btn-inner');
      if (innerReset) {
        innerReset.addEventListener('click', () => {
          const resetBtn = document.getElementById('troubleshoot-reset-btn');
          if (resetBtn) resetBtn.click();
        });
      }
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('troubleshooter')) {
      window.FernlyTroubleshoot.init();
    }
  });
})();
