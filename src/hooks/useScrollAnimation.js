import { useEffect, useRef } from 'react';

export default function useScrollAnimation(options = { threshold: 0.15 }) {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Optionally unobserve after animating to only animate once
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentElements = elementsRef.current;
    
    // Fallback if elements aren't added via ref callback, we can just query them globally
    // But ref is better. For global querying of .scroll-anim:
    const nodes = document.querySelectorAll('.scroll-anim');
    nodes.forEach((node) => {
      observer.observe(node);
    });

    return () => {
      nodes.forEach((node) => {
        if (node) observer.unobserve(node);
      });
      observer.disconnect();
    };
  }, [options.threshold]);

  return elementsRef;
}
