/**
 * Fernly — Houseplant Care & Plant Finder Guide
 * Core Application Module (main.js)
 * Manages Navigation, Mobile Drawer, Modals, Form Validation, Toasts, and Shared Interactivity.
 */

(function () {
  'use strict';

  // Global namespace for Fernly UI utilities
  window.FernlyUI = {
    // Show toast message
    showToast: function (message, iconClass = 'ph-check-circle') {
      let container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'alert');
      toast.innerHTML = `<i class="ph ${iconClass}"></i><span>${message}</span>`;
      container.appendChild(toast);

      // Trigger animation
      requestAnimationFrame(() => {
        toast.classList.add('show');
      });

      // Auto dismiss after 3.2s
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 350);
      }, 3200);
    },

    // Accessible Modal Open with focus trap
    openModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus first focusable element
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length) {
        focusable[0].focus();
      }

      // Add keydown trap
      modal.onkeydown = function (e) {
        if (e.key === 'Escape') {
          window.FernlyUI.closeModal(modalId);
          return;
        }

        if (e.key === 'Tab') {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
    },

    // Accessible Modal Close
    closeModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      modal.onkeydown = null;
    }
  };

  function initBackToTop() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="ph ph-arrow-up" aria-hidden="true"></i>';
    document.body.appendChild(btn);

    function toggle() {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();

    btn.addEventListener('click', function () {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initBackToTop();
    initNewsletterForms();
    initContactForm();
    initWorkshopReserve();
    initFaqAccordion();
    initMyPlantsBadge();
    initPremiumEffects();
  });

  // Header shadow on scroll + fade-up reveal for section content
  function initPremiumEffects() {
    var header = document.querySelector('.site-header');
    if (header) {
      var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    if (!('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.section .section-header, .section .card, .section .plant-card, .section .category-card, .section .testimonial-card, .newsletter-card');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 70 + 'ms';
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------------
     NAVIGATION & MOBILE DRAWER
     ------------------------------------------------------------- */
  function initNavigation() {
    const hamburger = document.getElementById('hamburger-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const drawerClose = document.getElementById('drawer-close-btn');

    if (hamburger && drawer && overlay) {
      function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }

      function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }

      hamburger.addEventListener('click', openDrawer);
      if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);

      // Close on escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          closeDrawer();
        }
      });
    }

    // Drawer Accordion for Services
    const accordionBtn = document.getElementById('drawer-services-accordion');
    const accordionContent = document.getElementById('drawer-services-content');

    if (accordionBtn && accordionContent) {
      accordionBtn.addEventListener('click', function () {
        const isExpanded = accordionContent.classList.contains('expanded');
        if (isExpanded) {
          accordionContent.classList.remove('expanded');
          accordionBtn.setAttribute('aria-expanded', 'false');
          const icon = accordionBtn.querySelector('.accordion-icon');
          if (icon) icon.className = 'ph ph-caret-down accordion-icon';
        } else {
          accordionContent.classList.add('expanded');
          accordionBtn.setAttribute('aria-expanded', 'true');
          const icon = accordionBtn.querySelector('.accordion-icon');
          if (icon) icon.className = 'ph ph-caret-up accordion-icon';
        }
      });
    }

    // Modal background click close
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          window.FernlyUI.closeModal(modal.id);
        }
      });
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          window.FernlyUI.closeModal(modal.id);
        });
      }
    });
  }

  /* -------------------------------------------------------------
     MY PLANTS BADGE SYNC
     ------------------------------------------------------------- */
  function initMyPlantsBadge() {
    updateBadge();
    window.addEventListener('storage', updateBadge);
    window.addEventListener('fernly:myplants-updated', updateBadge);

    // Wire any .my-plants-btn to open drawer or scroll to section
    document.querySelectorAll('.my-plants-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (btn.closest('.mobile-drawer')) {
          const closeBtn = document.getElementById('drawer-close-btn');
          if (closeBtn) closeBtn.click();
        }
        if (window.FernlyMyPlants && window.FernlyMyPlants.openDrawer) {
          window.FernlyMyPlants.openDrawer();
        } else {
          window.location.href = 'plant-finder.html#my-plants-section';
        }
      });
    });
  }

  function updateBadge() {
    try {
      const saved = JSON.parse(localStorage.getItem('fernly_saved_plants') || '[]');
      const count = saved.length;
      document.querySelectorAll('.my-plants-badge').forEach(el => {
        el.textContent = count;
        el.setAttribute('aria-label', `${count} plants saved in your collection`);
      });
    } catch (e) {
      // LocalStorage disabled or blocked
    }
  }

  /* -------------------------------------------------------------
     NEWSLETTER FORM VALIDATION (Home & Shared)
     ------------------------------------------------------------- */
  function initNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = form.querySelector('.newsletter-input');
        const feedback = form.parentElement.querySelector('.newsletter-feedback');

        if (!emailInput) return;
        const val = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!val || !emailRegex.test(val)) {
          emailInput.classList.add('invalid');
          if (feedback) {
            feedback.className = 'newsletter-feedback error';
            feedback.textContent = 'Please enter a valid email address (e.g., name@domain.com).';
          }
          return;
        }

        emailInput.classList.remove('invalid');
        emailInput.value = '';
        if (feedback) {
          feedback.className = 'newsletter-feedback success';
          feedback.textContent = 'Thank you for subscribing! Your monthly botanical guide is on its way.';
        }
        window.FernlyUI.showToast('Subscribed to Fernly Monthly Dispatch!', 'ph-envelope-simple');
      });
    });
  }

  /* -------------------------------------------------------------
     FAQ ACCORDION (Services Page)
     ------------------------------------------------------------- */
  function initFaqAccordion() {
    document.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');

        // Optional: close siblings
        document.querySelectorAll('.faq-item').forEach(el => {
          if (el !== item) el.classList.remove('active');
        });

        if (isActive) {
          item.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* -------------------------------------------------------------
     CONTACT FORM VALIDATION (Contact Page & Services Page)
     ------------------------------------------------------------- */
  function initContactForm() {
    const contactForms = document.querySelectorAll('#fernly-contact-form, .fernly-contact-form');
    if (!contactForms.length) return;

    contactForms.forEach(contactForm => {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Fields scoped to this form instance
        const nameInput = contactForm.querySelector('#contact-name, [name="name"]');
        const emailInput = contactForm.querySelector('#contact-email, [name="email"]');
        const topicSelect = contactForm.querySelector('#contact-topic, [name="topic"]');
        const msgTextarea = contactForm.querySelector('#contact-message, [name="message"]');
        const termsCheck = contactForm.querySelector('#contact-terms, [name="terms"]');
        const successBanner = contactForm.querySelector('#contact-success, .form-success-banner');

        // Helper to flag errors
        function validateField(input, condition) {
          if (!input) return;
          const group = input.closest('.form-group');
          if (!condition) {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            if (group) group.classList.add('has-error');
            isValid = false;
          } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            if (group) group.classList.remove('has-error');
          }
        }

        // Validate Name (min 2 chars)
        if (nameInput) {
          validateField(nameInput, nameInput.value.trim().length >= 2);
        }

        // Validate Email (regex)
        if (emailInput) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          validateField(emailInput, emailRegex.test(emailInput.value.trim()));
        }

        // Validate Topic
        if (topicSelect) {
          validateField(topicSelect, topicSelect.value !== '');
        }

        // Validate Message (min 10 chars)
        if (msgTextarea) {
          validateField(msgTextarea, msgTextarea.value.trim().length >= 10);
        }

        // Validate Terms Checkbox
        if (termsCheck) {
          const termsGroup = termsCheck.closest('.form-group');
          if (!termsCheck.checked) {
            isValid = false;
            if (termsGroup) termsGroup.classList.add('has-error');
          } else {
            if (termsGroup) termsGroup.classList.remove('has-error');
          }
        }

        if (isValid) {
          // Show inline success message without reload
          contactForm.reset();
          contactForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
            el.classList.remove('is-valid');
          });
          if (successBanner) {
            successBanner.classList.add('visible');
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          window.FernlyUI.showToast('Message sent! An advisor will review your note.', 'ph-paper-plane-tilt');
        }
      });
    });
  }

  /* -------------------------------------------------------------
     WORKSHOP RESERVATION MODAL
     ------------------------------------------------------------- */
  function initWorkshopReserve() {
    const modal = document.getElementById('workshop-modal');
    if (!modal) return;

    document.querySelectorAll('.reserve-workshop-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const title = btn.getAttribute('data-workshop-title') || 'Botanical Workshop';
        const date = btn.getAttribute('data-workshop-date') || 'Upcoming Session';

        const titleEl = document.getElementById('workshop-modal-title');
        const dateEl = document.getElementById('workshop-modal-date');
        if (titleEl) titleEl.textContent = title;
        if (dateEl) dateEl.textContent = `Scheduled: ${date}`;

        window.FernlyUI.openModal('workshop-modal');
      });
    });

    const form = document.getElementById('workshop-reserve-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('reserve-name');
        const email = document.getElementById('reserve-email');

        if (!name.value.trim() || !email.value.trim()) {
          window.FernlyUI.showToast('Please provide your name and email.', 'ph-warning-circle');
          return;
        }

        window.FernlyUI.closeModal('workshop-modal');
        form.reset();
        window.FernlyUI.showToast('Seat reserved! Check your email for joining details.', 'ph-calendar-check');
      });
    }
  }

})();
