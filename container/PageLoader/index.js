import { useEffect, useRef } from 'react';

const PageLoader = () => {
  const preLoaderRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      preLoaderRef.current.classList.add('loaded');
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div ref={preLoaderRef} className="preloader">
      <div className="loader " />
    </div>
  );
};
export default PageLoader;
