import './style.css';
import pdf from './asset/resume.pdf';
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [navClick, setNavClick] = useState('home');

    let class1, class2, class3, class4, class5, class6;
    if (navClick === 'home') { class1 = 'active'; }
    else if (navClick === 'skills') { class2 = 'active'; }
    else if (navClick === 'education') { class3 = 'active'; }
    else if (navClick === 'experience') { class4 = 'active'; }
    else if (navClick === 'work') { class5 = 'active'; }
    else if (navClick === 'contact') { class6 = 'active'; }


    const [mobileNav, setMobileNav] = useState(null);
    let class7, class8;
    class7 = 'column navigate';
    class8 = 'column nav';
    if (mobileNav === 'navShow') {
        class8 = 'column nav navshow';
        class7 = 'column navigate navhide';
    } else if (mobileNav === 'navHide') {
        class8 = 'column nav';
        class7 = 'column navigate';
    }

    const [scrolling, setScrolling] = useState(false);

  // Effect to detect scroll and change color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);  // Change color when scrolled more than 50px
      } else {
        setScrolling(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <header className={`header ${scrolling ? 'scrolled' : ''}`}>
            <div className="header flex">
                <div className="column">
                    <a href='./index'><p>Apoorv Agarwal</p></a>
                    {/* <a href='./index'><img src={logo} alt='logo' /></a> */}
                </div>
                <div className={class7}>
                    <i onClick={() => setMobileNav('navShow')} className="fa-solid fa-grip-lines"></i>
                </div>
                <div className={class8}>
                    <i onClick={() => setMobileNav('navHide')} className="fa-solid fa-xmark"></i>
                    <ul className='d-flex'>
                        <li onClick={() => setNavClick('home')} className={class1}><a href='#home'>Home</a></li>
                        <li onClick={() => setNavClick('skills')} className={class2}><a href='#skills'>Skills</a></li>
                        <li onClick={() => setNavClick('education')} className={class3}><a href='#education'>Education</a></li>
                        <li onClick={() => setNavClick('experience')} className={class4}><a href='#experience'>Experience</a></li>
                        <li onClick={() => setNavClick('work')} className={class5}><a href='#work'>Work</a></li>
                        <li onClick={() => setNavClick('contact')} className={class6}><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="column btn">
                <a href={pdf} target='blank'><button>Download Resume <i className="fa-solid fa-download"></i></button></a>
                    {/* <button>Hire Me</button> */}
                </div>
            </div>
        </header>
    )
}