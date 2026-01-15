import { useEffect } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { About } from '@/app/components/About';
import { Testimonials } from '@/app/components/Testimonials';
import { PropertySearch } from '@/app/components/PropertySearch';
import { PhotoGallery } from '@/app/components/PhotoGallery';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { FloatingChat } from '@/app/components/FloatingChat';
import { PropertyProvider } from '@/app/contexts/PropertyContext';

export default function App() {
  // Remove any Yelp widgets that get auto-injected
  useEffect(() => {
    const removeYelpWidgets = () => {
      // Selectors for Yelp widgets
      const yelpSelectors = [
        'iframe[src*="yelp"]',
        'div[id*="yelp"]',
        'div[class*="yelp"]',
        '.yelp-widget',
        '.yelp-badge',
        '#yelp-widget',
        '[data-yelp-widget]',
        '.yelp-review-badge',
        '.yelp-review-widget',
        '.yelp-biz-badge',
        '.yelp-biz-widget'
      ];

      yelpSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.height = '0';
            el.style.width = '0';
            el.style.overflow = 'hidden';
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.pointerEvents = 'none';
          }
        });
      });
    };

    // Run immediately
    removeYelpWidgets();

    // Set up MutationObserver to catch dynamically injected widgets
    const observer = new MutationObserver(removeYelpWidgets);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Also check periodically as a backup
    const interval = setInterval(removeYelpWidgets, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Remove any Trustmary widgets that get auto-injected, except in testimonials section
  useEffect(() => {
    const removeTrustmaryWidgets = () => {
      // Get the testimonials section
      const testimonialsSection = document.getElementById('testimonials-section');
      
      if (!testimonialsSection) return;
      
      // More specific selectors for Trustmary widgets - only target actual widget elements
      const trustmarySelectors = [
        'iframe[src*="trustmary"]',
        'div[id*="tm-a"]', // Trustmary widget IDs typically start with tm-a
        '.tm-widget',
        '.tm-wall',
        '.tm-wall-track'
      ];

      trustmarySelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          // Skip if element is inside testimonials section
          if (testimonialsSection.contains(el)) {
            return;
          }
          
          if (el instanceof HTMLElement) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.height = '0';
            el.style.width = '0';
            el.style.overflow = 'hidden';
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.pointerEvents = 'none';
          }
        });
      });
      
      // Also check for dynamically injected Trustmary content with go classes
      // but only if they're NOT inside the testimonials section
      const allGoElements = document.querySelectorAll('div[class*="go"]');
      allGoElements.forEach(el => {
        // Check if this element is part of a Trustmary widget structure
        const isTrustmaryWidget = el.closest('[data-trustmary-widget]') || 
                                  el.closest('.tm-widget') ||
                                  el.closest('#tm-a065t') ||
                                  (el.classList.contains('tm-widget') || 
                                   el.classList.contains('tm-wall') ||
                                   el.classList.contains('tm-wall-track'));
        
        if (isTrustmaryWidget) {
          // Only remove if NOT inside testimonials section
          if (!testimonialsSection.contains(el)) {
            if (el instanceof HTMLElement) {
              el.style.display = 'none';
              el.style.visibility = 'hidden';
              el.style.opacity = '0';
              el.style.height = '0';
              el.style.width = '0';
              el.style.overflow = 'hidden';
              el.style.position = 'absolute';
              el.style.left = '-9999px';
              el.style.pointerEvents = 'none';
            }
          }
        }
      });
    };

    // Run immediately
    removeTrustmaryWidgets();

    // Set up MutationObserver to catch dynamically injected widgets
    const observer = new MutationObserver(removeTrustmaryWidgets);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Also check periodically as a backup
    const interval = setInterval(removeTrustmaryWidgets, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <PropertyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <PropertySearch />
        <PhotoGallery />
        <Contact />
        <Footer />
        <FloatingChat />
      </div>
    </PropertyProvider>
  );
}
