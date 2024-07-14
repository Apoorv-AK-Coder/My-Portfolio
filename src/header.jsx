import './style.css';
import logo from './asset/logo.png';
import { useState } from 'react';

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
    if(mobileNav === 'navShow'){class8 = 'display: block !important;';} else if(mobileNav ==='navHide'){class8 = 'display: none !important;';}

    return (
        <header className='flex'>
            <div className="column">
                <a href='./index'><img src={logo} alt='logo' /></a>
            </div>
            <div className="column navigate" id={class7}>
                <i onClick={() => setMobileNav('navShow')} className="fa-solid fa-grip-lines"></i>
            </div>
            <div className="column nav" id={class8}>
                <i onClick={() => setMobileNav('navHide')} className="fa-solid fa-xmark"></i>
                <ul className='d-flex'>
                    <li onClick={() => setNavClick('home')} className={class1}><a href='#home'>Home</a></li>
                    <li onClick={() => setNavClick('skills')} className={class2}><a href='#skills'>Skills</a></li>
                    <li onClick={() => setNavClick('education')} className={class3}><a href='./index'>Education</a></li>
                    <li onClick={() => setNavClick('experience')} className={class4}><a href='./index'>Experience</a></li>
                    <li onClick={() => setNavClick('work')} className={class5}><a href='./index'>Work</a></li>
                    <li onClick={() => setNavClick('contact')} className={class6}><a href='./index'>Contact</a></li>
                </ul>
            </div>
            <div className="column btn">
                <button>Hire Me</button>
            </div>
        </header>
    )
}