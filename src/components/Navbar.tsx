import { useEffect, useRef, useState } from 'preact/hooks';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      class={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}
    >
      <a href={`${import.meta.env.BASE_URL}`} class="nav-link">Gallery</a>
      <a href={`${import.meta.env.BASE_URL}/about`} class="nav-link">About</a>
      <a href={`${import.meta.env.BASE_URL}/moodboard`} class="nav-link">Process</a>
    </nav>
  );
}
