import { useEffect } from 'react';

export default function useGlobalScroll() {
  useEffect(() => {
    // Standard Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Unobserve after animating once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // List of CSS selectors that should animate on scroll automatically
    const animateSelectors = [
      'h1:not(.welcome-logo)', 
      'h2', 
      'h3', 
      'p:not(.welcome-tagline)', 
      'img:not(.hero-fullscreen-canvas)', 
      '.stat-box', 
      '.pillar-themed-card', 
      '.client-themed-card', 
      '.product-card', 
      '.value-card', 
      '.trust-card',
      '.animated-timeline-item',
      '.c-info-card',
      '.form-container-card',
      '.config-estimator-card',
      '.config-result-card',
      '.b2b-form-card',
      '.map-info-panel',
      '.milestone-item',
      '.scroll-anim'
    ].join(', ');

    // Function to apply classes and observe
    const observeElements = () => {
      const elements = document.querySelectorAll(animateSelectors);
      elements.forEach((el) => {
        if (!el.classList.contains('scroll-anim')) {
          el.classList.add('scroll-anim');
        }
        observer.observe(el);
      });
    };

    // Run initially
    observeElements();

    // Use a MutationObserver to catch any new elements added to the DOM (like when changing tabs)
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldReObserve = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldReObserve = true;
          break;
        }
      }
      if (shouldReObserve) {
        observeElements();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
