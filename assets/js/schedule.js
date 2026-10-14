/**
 * Fernly — Houseplant Care & Plant Finder Guide
 * Watering Schedule Builder Module (schedule.js)
 * Calculates intervals based on environmental multipliers, calendar preview, and .ics export.
 */

(function () {
  'use strict';

  window.FernlySchedule = {
    selectedPlantId: 'monstera-deliciosa',

    init: function () {
      this.populatePlantPicker();
      this.bindInputs();
      this.calculate();
    },

    populatePlantPicker: function () {
      const picker = document.getElementById('schedule-plant-picker');
      if (!picker || !window.FERNLY_DATA || !window.FERNLY_DATA.plants) return;

      picker.innerHTML = '';
      window.FERNLY_DATA.plants.forEach(plant => {
        const opt = document.createElement('option');
        opt.value = plant.id;
        opt.textContent = `${plant.commonName} (${plant.botanicalName})`;
        if (plant.id === this.selectedPlantId) {
          opt.selected = true;
        }
        picker.appendChild(opt);
      });
    },

    prefillPlant: function (plantId) {
      this.selectedPlantId = plantId;
      const picker = document.getElementById('schedule-plant-picker');
      if (picker) {
        picker.value = plantId;
      }

      const section = document.getElementById('watering-builder');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }

      this.calculate();
      const plant = window.FERNLY_DATA.plants.find(p => p.id === plantId);
      if (plant) {
        window.FernlyUI.showToast(`Loaded "${plant.commonName}" into watering builder`, 'ph-drop');
      }
    },

    bindInputs: function () {
      const ids = [
        'schedule-plant-picker',
        'schedule-pot-material',
        'schedule-pot-size',
        'schedule-light',
        'schedule-humidity',
        'schedule-season'
      ];

      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('change', () => this.calculate());
        }
      });

      const icsBtn = document.getElementById('schedule-download-ics');
      if (icsBtn) {
        icsBtn.addEventListener('click', () => this.downloadIcs());
      }

      const printBtn = document.getElementById('schedule-print-btn');
      if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
      }
    },

    calculate: function () {
      const plantPicker = document.getElementById('schedule-plant-picker');
      const matSelect = document.getElementById('schedule-pot-material');
      const sizeSelect = document.getElementById('schedule-pot-size');
      const lightSelect = document.getElementById('schedule-light');
      const humSelect = document.getElementById('schedule-humidity');
      const seasonSelect = document.getElementById('schedule-season');

      if (!plantPicker || !window.FERNLY_DATA) return;

      this.selectedPlantId = plantPicker.value;
      const plant = window.FERNLY_DATA.plants.find(p => p.id === this.selectedPlantId);
      if (!plant) return;

      const f = window.FERNLY_DATA.wateringFactors;
      const matVal = matSelect ? matSelect.value : 'terracotta';
      const sizeVal = sizeSelect ? sizeSelect.value : 'medium';
      const lightVal = lightSelect ? lightSelect.value : 'bright';
      const humVal = humSelect ? humSelect.value : 'average';
      const seasonVal = seasonSelect ? seasonSelect.value : 'spring';

      const matFactor = f.potMaterial[matVal] ? f.potMaterial[matVal].multiplier : 1.0;
      const sizeFactor = f.potSize[sizeVal] ? f.potSize[sizeVal].multiplier : 1.0;
      const lightFactor = f.lightLevel[lightVal] ? f.lightLevel[lightVal].multiplier : 1.0;
      const humFactor = f.humidity[humVal] ? f.humidity[humVal].multiplier : 1.0;
      const seasonFactor = f.season[seasonVal] ? f.season[seasonVal].multiplier : 1.0;

      const baseDays = plant.wateringFrequencyDays || 7;
      const combinedMultiplier = matFactor * sizeFactor * lightFactor * humFactor * seasonFactor;
      const calculatedDays = Math.max(3, Math.round(baseDays * combinedMultiplier));

      this.currentCalculatedDays = calculatedDays;
      this.currentPlant = plant;

      // Update UI elements
      const intervalEl = document.getElementById('schedule-interval-output');
      const intervalSub = document.getElementById('schedule-interval-sub');
      const plantTitleEl = document.getElementById('schedule-plant-name');

      if (intervalEl) {
        intervalEl.textContent = `Every ${calculatedDays} Days`;
      }
      if (intervalSub) {
        intervalSub.textContent = `General rule: check top soil at day ${Math.max(2, calculatedDays - 2)} before pouring.`;
      }
      if (plantTitleEl) {
        plantTitleEl.textContent = `${plant.commonName} (${plant.botanicalName})`;
      }

      // Update Factors breakdown table
      this.renderFactorsTable({
        baseDays,
        mat: { val: matVal, factor: matFactor, note: f.potMaterial[matVal].note },
        size: { val: sizeVal, factor: sizeFactor, note: f.potSize[sizeVal].note },
        light: { val: lightVal, factor: lightFactor, note: f.lightLevel[lightVal].note },
        hum: { val: humVal, factor: humFactor, note: f.humidity[humVal].note },
        season: { val: seasonVal, factor: seasonFactor, note: f.season[seasonVal].note },
        total: combinedMultiplier,
        result: calculatedDays
      });

      // Update Calendar Preview
      this.renderCalendar(calculatedDays);
    },

    renderFactorsTable: function (data) {
      const tbody = document.getElementById('schedule-factors-tbody');
      if (!tbody) return;

      tbody.innerHTML = `
        <tr>
          <td><strong>Species Baseline</strong></td>
          <td>${data.baseDays} days</td>
          <td>Standard healthy adult specimen</td>
        </tr>
        <tr>
          <td><strong>Pot Material (${data.mat.val})</strong></td>
          <td>${data.mat.factor}x</td>
          <td>${data.mat.note}</td>
        </tr>
        <tr>
          <td><strong>Pot Volume (${data.size.val})</strong></td>
          <td>${data.size.factor}x</td>
          <td>${data.size.note}</td>
        </tr>
        <tr>
          <td><strong>Light Intensity (${data.light.val})</strong></td>
          <td>${data.light.factor}x</td>
          <td>${data.light.note}</td>
        </tr>
        <tr>
          <td><strong>Humidity (${data.hum.val})</strong></td>
          <td>${data.hum.factor}x</td>
          <td>${data.hum.note}</td>
        </tr>
        <tr>
          <td><strong>Current Season (${data.season.val})</strong></td>
          <td>${data.season.factor}x</td>
          <td>${data.season.note}</td>
        </tr>
        <tr style="background: var(--color-surface-tint); font-weight: 600;">
          <td><strong>Estimated Schedule</strong></td>
          <td colspan="2"><strong>${data.result} Days</strong> (Calculated guidance)</td>
        </tr>
      `;
    },

    renderCalendar: function (intervalDays) {
      const grid = document.getElementById('schedule-calendar-grid');
      if (!grid) return;

      grid.innerHTML = '';
      const today = new Date();
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      // Show next 14 days
      for (let i = 0; i < 14; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);

        const isWaterDay = (i === 0 || i % intervalDays === 0);
        const cell = document.createElement('div');
        cell.className = `cal-day-cell ${isWaterDay ? 'watering-day' : ''} ${i === 0 ? 'today' : ''}`;

        cell.innerHTML = `
          <span>${dayNames[d.getDay()]}</span>
          <strong>${d.getDate()}</strong>
          ${isWaterDay ? '<i class="ph ph-drop"></i>' : '<span style="height: 16px;"></span>'}
        `;

        if (isWaterDay) {
          cell.title = `Watering Day for ${this.currentPlant ? this.currentPlant.commonName : 'Plant'}`;
        }

        grid.appendChild(cell);
      }
    },

    downloadIcs: function () {
      if (!this.currentPlant || !this.currentCalculatedDays) return;

      const plant = this.currentPlant;
      const interval = this.currentCalculatedDays;
      const now = new Date();
      const dtstamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

      const startDate = new Date();
      startDate.setHours(9, 0, 0);
      const startStr = startDate.toISOString().replace(/[-:]/g, '').split('.')[0].slice(0, 15);

      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Fernly Houseplant Care//Watering Schedule//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:fernly-${plant.id}-${Date.now()}@fernly.guide`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART:${startStr}`,
        `RRULE:FREQ=DAILY;INTERVAL=${interval};COUNT=20`,
        `SUMMARY:💧 Check & Water ${plant.commonName}`,
        `DESCRIPTION:General guidance watering reminder for ${plant.commonName} (${plant.botanicalName}). Always insert finger 2 inches into soil first before pouring. If moist, wait 2-3 more days.`,
        'STATUS:CONFIRMED',
        'BEGIN:VALARM',
        'TRIGGER:-PT15M',
        'ACTION:DISPLAY',
        `DESCRIPTION:Reminder: Water ${plant.commonName}`,
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `fernly-watering-${plant.id}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.FernlyUI.showToast(`Calendar reminder downloaded (.ics)`, 'ph-calendar-check');
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('watering-builder')) {
      window.FernlySchedule.init();
    }
  });
})();
