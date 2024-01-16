import React from 'react';
import './style.css';

// right component implementation 
// there are mainly six sections that we have implemented including the introduction, skills, education, experience, projects and resume section  
const Right = (props) => {
    return (
        <div className="right">
            <div className="right-inner">
            
                <div className="introduction">
                    <h4>Intro</h4>
                    <div className="content">
                        <p className="intro-p">I&#39;m currently enrolled in my fourth year (final year), pursuing my Bachelor&#39;s Degree in Computer Science at National University of Computer and Emerging Sciences, Karachi Campus.</p>
                        <p className="intro-p">I enjoy being the bridge between engineering and design, and feel right at home as a front end software developer. I&#39;m experienced in developing and designing products for both the app and the web, from simple landing pages to full-fledged web apps.</p>
                        <span className="intro-p job-pls">I&#39;m currently looking for an opportunity that is the right choice for my skill set, experience, and career goals. I'm eager to work together with software development experts to obtain hands-on expertise.</span>
                    </div>
                </div>
                
                <div className="skills">
                    <h4>Skills</h4>
                    <div className="content">
                        <div className="skill-category">
                            <strong>Languages: &nbsp;</strong>
                            <span>Dart, JavaScript (ES6), HTML5, CSS3, Python, C++, C#, C</span>
                        </div>
                        <div className="skill-category">
                            <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                            <span>Flutter, React Native, Bootstrap, jQuery, React.JS, Next.JS, WordPress</span>
                        </div>
                        <div className="skill-category">
                            <strong>Database: &nbsp;</strong>
                            <span>SQL, PostgreSQL, SQflite, Firebase</span>
                        </div>
                        <div className="skill-category">
                            <strong>Tools: &nbsp;</strong>
                            <span>Git &amp; Github, Command Line, Postman, Figma, Canva, Adobe Photoshop, Adobe Illustrator, Microsoft Office</span>
                        </div>
                    </div>
                </div>
                
                <div className="education">
                    <h4>Education</h4>
                    <div className="content">
                        <div className="university"><a href="https://www.nu.edu.pk/" rel='noreferrer' target="_blank">National University of Computer and Emerging Sciences <i className="fa-solid fa-up-right-from-square"></i></a></div>
                        <div className="college">Bachelor&#39;s Degree</div>
                        <div className="major"><strong>Major:</strong> Computer Science</div>
                        <div className="minor"><strong>Minor:</strong> Interaction Design</div>
                        <div className="conc"><strong>Concentration:</strong> Human Computer Interaction</div>
                        <div className="desc"><strong>Description:</strong> The National University of Computer and Emerging Sciences, a premier Pakistani university, has five modern campuses, employing over 11,000 students, 25% of whom are female, and employs over 500 skilled faculty members.</div>
                        <div className="grad-date">Expected Graduation: June 2024</div>
                    </div>
                </div>
                
                <div className="experience">
                    <h4>Experience</h4>
                    <div className="content">

                        <div className="exp-item">
                            <div className="job">
                                <a className="company" href="https://www.codsoft.in/" rel='noreferrer' target="_blank">CodSoft <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                            <div className="title">Frontend Web Developer</div>
                            <ul className="description">
                                <li>I had the opportunity to dive deep into the world of web development, learning hands-on skills through challenging projects that have expanded my horizons.</li>
                                <li>Build out some web based applications utilizing JavaScript (ES6), CSS3, HTML5.</li>
                                <li>Propose and implement design and engineering solutions is to ensure optimal and coherent user experiences.</li>
                                <li>The tasks, including Personal Portfolio Website, Website Landing Page, and Calculator provided a diverse range of challenges and opportunities for learning.</li>
                            </ul>
                            <div className="duration">Aug 2023 &mdash; Sept 2023</div>
                        </div>
                        
                        <div className="exp-item">
                            <div className="job">
                                <a className="company" href="https://interns.pk/" rel='noreferrer' target="_blank">Interns Pakistan <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                            <div className="title">Frontend Web Developer</div>
                            <ul className="description">
                                <li>It is an Online Internship Program which will cover a minimum of four weeks, with students starting to learn first and later you will get an opportunity to work on the real-world problem and have fun along the way.</li>
                                <li>Developed and maintained code by primarily using HTML5, CSS3, Bootstrap, JavaScript (ES6), jQuery, PHP and WordPress.</li>
                                <li>Throughout this internship program, we have built a number of projects, which includes HTML/CSS Conversion | Login Page Challenge, Responsive Design Conversion | Widget Challenge, Bootstrap Design Conversion | App Challenge, Building Screening App Challenge, WordPress Project.</li>
                            </ul>
                            <div className="duration">Jun 2023 &mdash; Jul 2023</div>
                        </div>

                        <div className="exp-item">
                            <div className="job">
                                <a className="company" href="https://www.linkedin.com/company/procom-fast/" rel='noreferrer' target="_blank">PROCOM'23 (Flagship Event of FAST-NUCES) <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                            <div className="title">Senior Cordinator Guest Relations</div>
                            <ul className="description">
                                <li>Procom.net is the legacy event of Karachi Chapter of FAST NUCES. Continuing on for the last 22 years just defines its magnitude and importance for the institute itself.</li>
                                <li>Featuring competitions of all kinds, tech talks, panel discussions and seminars, it is highlighted as the biggest job fair in Karachi.</li>
                            </ul>
                            <div className="duration">Dec 2022 &mdash; Mar 2023</div>
                        </div>

                        <div className="exp-item">
                            <div className="job">
                                <a className="company" href="https://www.linkedin.com/company/ieee/" rel='noreferrer' target="_blank">IEEE NUCES Student Branch Karachi <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                            <div className="title">Member of Event Management Team</div>
                            <ul className="description">
                                <li>The IEEE NUCES aims to integrate the students and provide them a platform where they could get recognized for their contributions for the development of technology for humanity.</li>
                                <li>IEEE NUCES plays important role in reducing the gap between the industry and students through innovative programs and projects.</li>
                            </ul>
                            <div className="duration">Dec 2021 &mdash; Mar 2022</div>
                        </div>

                    </div>
                </div>
                
                <div className="projects">
                    <h4>Projects</h4>
                    <div className="content">
                        
                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Personal-Portfolio-Website" rel='noreferrer' target="_blank">Personal Portfolio Website <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">My personal portfolio which features some of my github projects as well as my resume and technical skills.</p>
                        </div>
                        
                        <div className="project-item">
                        <a className="project-title" href="https://github.com/hacker1649/Screening-Application-Using-Flutter" rel='noreferrer' target="_blank">Screening Application using Flutter <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">Provides information on symptoms and preventive measures, along with self-assessment tools, enabling users to determine the need for virus testing.</p>
                        </div>
                        
                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Banking-Application-Using-SQflite" rel='noreferrer' target="_blank">Banking Application using SQflite <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">This application, leveraging SQflite database, facilitates seamless money transfers between user accounts.</p>
                        </div>

                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Multi-Role-Based-Application" rel='noreferrer' target="_blank">Multi-Role Based Application <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">It facilitates seamless access to user features and preferences through the utilization of Shared Preferences.</p>
                        </div>

                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/COVID19-Screening-Tool-Application" rel='noreferrer' target="_blank">COVID-19 Screening Tool (Using Bootstrap and jQuery) <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">It identifies potential cases, curbs virus spread, and prioritizes testing based on symptoms, and risk factors.</p>
                        </div>

                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Codsoft-Internship-Tasks-Repository/tree/master/codsoft/task2" rel='noreferrer' target="_blank">Proton VPN Website Landing Page <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">Through this website landing page project, I enhanced my HTML, CSS, and JavaScript skills, and mastered the art of crafting an immersive user experience.</p>
                        </div>

                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Socket-Programming-with-GUI-in-Python" rel='noreferrer' target="_blank">Simple Client-Server Chatting Application in Python <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">Created a client-server application featuring TCP communication and a graphical user interface (GUI).</p>
                        </div>

                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Code-Smashers-Website-Using-Wordpress" rel='noreferrer' target="_blank">Code Smashers Website using WordPress <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">A website that empowers individuals of all levels to unlock their coding potential through a single platform, executed using XAMPP.</p>
                        </div>

                        <div className="project-item">
                            <a className="project-title" href="https://github.com/hacker1649/Manipulation-of-Large-DataSet" rel='noreferrer' target="_blank">Manipulation with Big Data <i className="fa-solid fa-up-right-from-square"></i></a>
                            <p className="project-desc">The project optimized binary search tree data structures on a 1 GB dataset using C++, including data cleansing, filtering, search operations, and user recommendations.</p>
                        </div>
                    
                    </div>
                </div>

                <a className="resume" href={props.resumeURL} rel='noreferrer' target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
            
            </div>
        </div>
    );
}

export default Right;
