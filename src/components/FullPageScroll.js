import React, { useRef, useEffect } from 'react';
import './FullPageScroll.css';

const FullPageScroll = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sections = sectionsRef.current;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollTop >= top && scrollTop < top + height) {
          window.location.hash = `#section-${index + 1}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="full-page-scroll">
      <section ref={ref => sectionsRef.current[0] = ref} className="section section-1">
        <h1>Section 1</h1>
        <p>Content of section 1</p>
      </section>
      <section ref={ref => sectionsRef.current[1] = ref} className="section section-2">
        <h1>Section 2</h1>
        <p>Content of section 2</p>
      </section>
      <section ref={ref => sectionsRef.current[2] = ref} className="section section-3">
        <h1>Section 3</h1>
        <p>Content of section 3</p>
      </section>
    </div>
  );
};

export default FullPageScroll;
