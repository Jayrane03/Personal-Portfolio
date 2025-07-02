import React, { useState, useEffect } from 'react';
import "../assets/Style/index_2.css";
import "../assets/Style/index.css";
import "../assets/Style/main.css";
import "../assets/Style/active_class.css"; // Make sure to include necessary styles

const Header = () => {
    // State to manage the active state of items and toggle ball
    const [activeItem, setActiveItem] = useState(null);
    const [isToggleActive, setIsToggleActive] = useState(false);

    useEffect(() => {
        const items = document.querySelectorAll(".visit,.hor-line, .about_icons, .footer-distributed, .arrow_icon, .con-container, .footer, .con-sub, .dark_mode_text, .form_input_tag, .skill_subtit, .down_button, .about_icons, .about_profession, .about_subtitile, .about_text, .project-cards, .nav_list li a, .l-header, .but button, .section-title, .skills, .sliderd, .skill_box h3, .projects, .contact, .skill_name, .button_filter, .skill_name_first, .about, .vertical-line, .shape_blob, .arr-icon, .cont-img, .res_btn , .orb-container,       .custom-card , #cert-tit");
        items.forEach(item => {
            item.classList.toggle("active", isToggleActive);
            
        });
    }, [isToggleActive]);

    // Function to handle click event on the nav items
    const handleItemClick = (itemName) => {
        setActiveItem(itemName); // Set the clicked item as active
    };

    // Function to handle click event on the toggle ball
    const handleToggleClick = () => {
        setIsToggleActive(!isToggleActive); // Toggle the active state of the toggle ball
    };

    // List of nav items
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'portfolio', label: 'Projects' },
        { id: 'contact', label: 'Contact Me' }
    ];

    // Function to send email


    useEffect(() => {
        const toggle = document.getElementById('nav-toogle');
        const navMenu = document.getElementById('nav-menu');

        const showMenu = () => {
            navMenu.classList.toggle('show');
        };

        if (toggle && navMenu) {
            toggle.addEventListener('click', showMenu);
        }

        const navLinks = document.querySelectorAll('.nav_link');
        const linkAction = () => {
            navMenu.classList.remove('show');
        };

        navLinks.forEach(link => link.addEventListener('click', linkAction));

        const subBtn = document.getElementById('sub_btn');
        subBtn.style.cursor = "pointer";

        // Cleanup
        return () => {
            if (toggle && navMenu) {
                toggle.removeEventListener('click', showMenu);
            }
            navLinks.forEach(link => link.removeEventListener('click', linkAction));
        };
    }, []);

    return (
        <header className={`l-header ${isToggleActive ? 'active' : ''}`}>
            <nav className="nav bg-grid">
                <div id="logo">
                    <a href="#" className="nav_logo">Jay Rane</a>
                </div>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        {/* Map over the navItems array and create list items */}
                        {navItems.map((item) => (
                            <li key={item.id} className={`nav_item ${activeItem === item.id ? 'active' : ''}`}>
                                {/* Set the href attribute dynamically */}
                                <a href={`#${item.id}`} className="nav_link navlin" onClick={() => handleItemClick(item.id)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <div className="toog" onClick={handleToggleClick}>
                                <box-icon className={`icon-ball moon ${isToggleActive ? 'active' : ''}`} type='solid' name='moon'></box-icon>
                                <box-icon className={`icon-ball sun ${isToggleActive ? 'active' : ''}`} name='sun' type='solid'></box-icon>
                                <div className={`toog_ball ${isToggleActive ? 'active' : ''}`}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav_toogle" id="nav-toogle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
