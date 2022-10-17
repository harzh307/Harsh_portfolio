import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useRef, useEffect } from 'react';

const Navigation = () => {
  const navbarRef = useRef(null);
  const ulRef = useRef(null);
  const scrollSpan = useRef(null);
  const collapseRef = useRef(null);
  const lineRef = useRef(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        // alert('lol');
        navbarRef.current.classList.add('fixed-header');
        ulRef.current.classList.add('nav-transparent');
        scrollSpan.current.classList.add('scrollSpan');
        lineRef.current.classList.add('nav-link-black');
      } else {
        navbarRef.current.classList.remove('fixed-header');
        ulRef.current.classList.remove('nav-transparent');
        scrollSpan.current.classList.remove('scrollSpan');
        lineRef.current.classList.remove('nav-link-black');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const toggleNavbar = () => {
    // const element = document.getElementById('navbarHarsh');
    if (collapseRef.current.style.display === 'flex') {
      collapseRef.current.style.display = 'none';
    } else {
      collapseRef.current.style.display = 'flex';
    }
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        // const element = document.getElementById('navbarHarsh');
        if (collapseRef.current.style.display === 'flex') {
          collapseRef.current.style.display = 'none';
        }
      }
    });
  };
  return (
    <header>
      <nav
        className={classNames(
          'navbar',
          'header-nav',
          'fixed-top',
          'navbar-expand-lg',
          'header-nav-white',
        )}
        ref={navbarRef}>
        <div className="container">
          <div className="sub-container">
            {/* Brand */}
            <Link href="/">
              <a aria-label="Harsh patel" href="/" className="navbar-brand">
                Harsh
                {/* <span className="theme-bg" /> */}
              </a>
            </Link>

            {/* / */}
            {/* Mobile Toggle */}
            <button
              ref={scrollSpan}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHarsh"
              aria-controls="navbarHarsh"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}>
              <span />
              <span />
              <span />
            </button>
          </div>
          {/* / */}
          {/* Top Menu */}
          <div className="navbar-collapse" ref={collapseRef} id="navbarHarsh">
            {/* <a href="#!" onClick={toggleNavbar} className="blankSpace" /> */}
            <button onClick={toggleNavbar} className="blankSpace" />
            <ul ref={ulRef} className="navbar-nav">
              <li>
                <Link href="/#Home">
                  <a
                    ref={lineRef}
                    className={classNames('nav-link-white', { active: pathname === '#Home' })}
                    onClick={toggleNavbar}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#About">
                  <a
                    ref={lineRef}
                    className={classNames('nav-link-white', { active: pathname === '#About' })}
                    onClick={toggleNavbar}>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#Services">
                  <a
                    ref={lineRef}
                    className={classNames('nav-link-white', { active: pathname === '#Services' })}
                    onClick={toggleNavbar}>
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#Work">
                  <a
                    ref={lineRef}
                    className={classNames('nav-link-white', { active: pathname === '#Work' })}
                    onClick={toggleNavbar}>
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#Skills">
                  <a
                    ref={lineRef}
                    className={classNames('nav-link-white', { active: pathname === '#Skills' })}
                    onClick={toggleNavbar}>
                    Skills
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#Contact">
                  <a
                    ref={lineRef}
                    className={classNames('nav-link-white', { active: pathname === '#Contact' })}
                    onClick={toggleNavbar}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* / */}
        </div>
        {/* Container */}
      </nav>
      {/* Navbar */}
    </header>
  );
};

export default Navigation;
