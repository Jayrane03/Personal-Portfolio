import  { useEffect } from 'react';
import { gsap } from 'gsap'; // Import GSAP
import project1Image from '../assets/Images/project_1.png'; 
import snake_game from '../assets/Images/snake_bg.jpeg'; 
import todo_list from '../assets/Images/todo-list.jpeg'; 
import hotel_menu from '../assets/Images/react_app.png'; 
// import budget from '../assets/Images/dynamic_budget.png'; 
import brain from '../assets/Images/brain_bost.png'; 
import '../assets/Style/about.css';
import '../assets/Style/index_2.css';
import '../assets/Style/index.css';
import '../assets/Style/project.css';
import '../assets/Style/skill.css';
import '../assets/Style/slider.css';
import '../assets/Style/main.css';
import '../assets/Style/active_class.css';
import budget from '../assets/Images/budget.png'; // Importing budget image
const Projects = () => {
    useEffect(() => {
        const filterButtons = document.querySelectorAll('.button_project');
        filterButtons.forEach(button => {
            button.addEventListener("click", filterCards);
        });
        
        // Initial animation for the project cards
        animateCards();

        return () => {
            filterButtons.forEach(button => {
                button.removeEventListener("click", filterCards);
            });
        };
    }, []);

    function animateCards() {
        gsap.fromTo(".project-cards", 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                stagger: 0.2 // Adds a stagger effect for each card
            }
        );
    }

    function filterCards(e) {
        const selectedFilter = e.target.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-cards');
        
        // GSAP animation for hiding and showing cards
        projectCards.forEach(card => {
            const cardFilters = card.getAttribute('data-filters').split(' ');

            if (cardFilters.includes(selectedFilter) || selectedFilter === 'all') {
                gsap.to(card, { opacity: 1, y: 0, duration: 0.5 }); // Animate in
                card.style.display = 'block'; // Ensure it's displayed
            } else {
                gsap.to(card, { opacity: 0, y: 50, duration: 0.5, onComplete: () => {
                    card.style.display = 'none'; // Hide after animation
                }}); // Animate out
            }
        });
    }

    const projectsData = [
        { 
          name: "TRAIN WITH US",
          image: project1Image,
          description: "This is a complete fitness package. I have made this whole website.",
          link: "https://fitnesspackage.000webhostapp.com/login2.php",
          filters: "website"
        },
        { 
            name: "SNAKE GAME",
            image: snake_game,
            description: "This is snake game for windows and mobile. By using keyboard arrow keys you can operate the snake.",
            link: "https://websnakegame2.netlify.app/",
            filters: "games"
          },
          { 
            name: "MY TO-DO'S LIST",
            image: todo_list,
            description: "This is a to-do list made using javascript. Your data is being saved in LocalStorage.",
            link: "https://add-your-doing.netlify.app/",
            filters: "website"
          },
        //   { 
        //     name: "DYNAMIC BUDGET PLANNER",
        //     image: budget,
        //     description: "You can plan your budget using this budget planner.",
        //     link: "https://planmybudget.netlify.app/",
        //     filters: "website"
        //   },
          { 
            name: "HOTEL-MENU",
            image: hotel_menu,
            description: "This is a React app for a hotel menu. This uses filter function.",
            link: "https://menuforhotel.netlify.app/",
            filters: "website"
          },
          { 
            name: "BRAIN BOOST",
            image: brain,
            description: "This is an Education Platform built using the MERN Stack.",
            link: "https://brain-boost-1.onrender.com/",
            filters: "mern"
          },
           { 
            name: "BudgetAI",
            image: budget,
            description: "BudgetAI is a MERN stack application that helps users manage their finances effectively.",
            link: "https://budget-tracker-frontend-ijfx.onrender.com/",
            filters: "mern"
          },
    ];

    const chunkedProjects = [];
    for (let i = 0; i < projectsData.length; i += 3) {
        chunkedProjects.push(projectsData.slice(i, i + 3));
    }

    return (
        <section className="projects" id="portfolio">
            <h2 className="section-title">PROJECTS</h2>
            <div className="skill_container bg-grid">
                <div className="skill_box">
                    <h3 className="skill_subtit">DEVELOPMENT</h3>
                    <ul id="project-list">
                        <li><button className="button_project skill_name_first skill_name" data-filter="all">ALL</button></li>
                        <li><button className="button_project skill_name_first skill_name" data-filter="games">GAMES</button></li>
                        <li><button className="button_project skill_name_first skill_name" data-filter="website">WEBSITE</button></li>
                        <li><button className="button_project skill_name_first skill_name" data-filter="mern">MERN STACK APP</button></li>
                    </ul>
                </div>
            </div>
            <div className="project-cont">
                {chunkedProjects.map((chunk, index) => (
                    <div key={index} className="project-box">
                        {chunk.map((project, i) => (
                            <div key={i} className={`project-cards ${project.filters}`} data-filters={project.filters}>
                                <div className="project-image">
                                    <img src={project.image} alt="" />
                                </div>
                                <div className="info-w">
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                    <button className="visit" type="button" value="New Tab" onClick={() => window.open(project.link)}>Visit <i className="bx bx-right-arrow-alt"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
