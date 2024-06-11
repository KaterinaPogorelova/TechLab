import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const {pathname, key} = useLocation();
  const htmlEl = document.querySelector('html');

  useEffect(() => {
    if (pathname.includes('catalogue') && pathname !== '/catalogue/all') {
      return;
    }
    if (htmlEl) {
      htmlEl.style.scrollBehavior = 'auto';
    }
    window.scrollTo({top: 0, behavior: 'auto'})
    if (htmlEl) {
      htmlEl.style.scrollBehavior = 'smooth';
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes('catalogue') && pathname.includes('filters')) {
      return;
    }
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'auto'});
    }, 0);
  }, [key]);

  return null;
}

export default ScrollToTop;