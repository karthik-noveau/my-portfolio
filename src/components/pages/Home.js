import Navibar from "../navbar/Navibar";
import '../css/Home.css';
import backgimage from '../Assests/backgimage.png'
import karthik from '../Assests/karthik.jpg'
import abt_img from '../Assests/abt_img.png'
import contact_bg from '../Assests/contact_bg.jpeg'
import getintotouch from '../Assests/getintotouch.jpg'

import { ImYoutube2 } from 'react-icons/im'
import { AiFillGooglePlusSquare, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaUserGraduate, FaLaptopCode } from 'react-icons/fa'
import GoogleMap from "./Map";

function Home() {
    const date = new Date();
    return (
        <div>

            {/* Home profile container  */}
            <div className="profile_cont">
                <img src={backgimage} className='home_back_img' />
                <Navibar className="navbar" />
                <div className='pro_container'>
                    <div className="pro_main_cont">
                        <div className='pro_txt_cont'>
                            <div className="pro_icon_cont">
                                <a href="https://www.linkedin.com/in/karthik-b-736308209/"><AiFillLinkedin className="icon" /></a>
                                <a href="https://myaccount.google.com/profile"><AiFillGooglePlusSquare className="icon" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100046117488268"><AiFillFacebook className="icon" /></a>
                                <a href="https://www.instagram.com/karthik_noveau/"><AiOutlineInstagram className="icon" /></a>
                                <a href="https://twitter.com/karthik_noveau"><FaTwitterSquare className="icon icon_tiw" /></a>
                                <a href="https://www.youtube.com/channel/UCnl4Bp2_kQkMfRasUMHamfA"><ImYoutube2 className="icon icon_you" /></a>
                            </div>
                            <div className="pro_name">
                                <p>Hello, I'm <span >karthik</span></p>
                                <p>Full stack Web developer</p>
                            </div>
                            <div className='pro_desc'>
                                <p>Knack of building applications with front and back end operations.</p>
                            </div>
                            <div className='abt_button_cont'>
                                <a href="#contact"><button>Hire Me</button></a>
                                <a href="https://firebasestorage.googleapis.com/v0/b/personal---portfolio.appspot.com/o/Resume-Kar.pdf?alt=media&token=4266bbf0-2f0f-42ca-b001-4a9f810e6e3e" download> <button>Get Resume</button></a>
                            </div>
                        </div>
                        <div className="pro_img_cont">
                            <img src={karthik} />
                        </div>
                    </div>
                </div>
            </div>



            {/* title- about me */}
            <div className="aboutme_title_container" id="aboutme">
                <div className="aboutme_main_title_container">
                    <p>About Me</p>
                    <p>Why choose me ?</p>
                    <div className="line_container">
                        <div className="line"></div>
                        <div className="line_center_design"></div>
                    </div>
                </div>
            </div>



            {/* about me  */}
            <div className="abt_main_cont">
                <div className="abt_cont">
                    <div className="abt_img">
                        <img src={abt_img} />
                    </div>
                    <div className="abt_discription_main_cont" >
                        <div className="abt_discription_cont">
                            <p>
                                Full stack web developer with background knowledge of MERN stacks, along with a knack of building applications with utmost efficiency.
                            </p>
                            <div className="highlights_cont">
                                <p >Here are a Few Highlights:</p>
                                <ul>
                                    <li>Full Stack web development</li>
                                    <li>Interactive Front End as per the design</li>
                                    <li>React Js</li>
                                    <li>Managing database</li>
                                    <li>Designing using Adobe PhotoShop and Adobe Illustrator</li>
                                    <li>Adobe Premier and Adobe Effects</li>

                                </ul>
                            </div>
                            <div className='abt_button_cont whyChooseMe'>
                                <a href="#contact"><button>Hire Me</button></a>
                                <a href="https://firebasestorage.googleapis.com/v0/b/personal---portfolio.appspot.com/o/Resume-Kar.pdf?alt=media&token=4266bbf0-2f0f-42ca-b001-4a9f810e6e3e" download> <button>Get Resume</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* education */}
            <div className="edu_cont">
                <div className="edu_main_cont" >
                    <div className="edu_title">
                        <FaUserGraduate className="edu_icon" />
                        <p>Education</p>
                    </div>
                    <div className="edu_content">
                        <table>
                            <tr>
                                <td>Kongunadu College of Engineering and Technology</td>
                                <td className="edu_td"><button>2019-2023</button></td>

                            </tr>
                            <tr>
                                <td className="edu_top" colSpan={2}>BE and Communication Engineering</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">8.4 CGPA</td>
                            </tr>
                        </table>

                        <table className="edu_table">
                            <tr>
                                <td>Sri Vidhya Bharathi Higher Secondary School</td>
                                <td className="edu_td"><button>2017-2019</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top" colSpan={2}>HSC TN State Board</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">79.8 %</td>
                            </tr>
                        </table>


                        <table className="edu_table">
                            <tr>
                                <td>Higher Secondary School Fort Namakkal</td>
                                <td className="edu_td"><button>2016-2017</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top" colSpan={2}>SSLC TN State Board</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">92 %</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>





            {/* title- skills */}
            <div className="aboutme_title_container" id="skills">
                <div className="aboutme_main_title_container">
                    <p>Skills</p>
                    <p>Belong anywhere !</p>
                    <div className="line_container">
                        <div className="line"></div>
                        <div className="line_center_design"></div>
                    </div>
                </div>
            </div>




            {/* sills */}

            <div className="skill_cont">
                <div className="skill_main_cont" >
                    <div className="skill_title">
                        <FaLaptopCode className="skill_icon" />
                        <p>Programing Skills</p>
                    </div>

                    <div className="skill_cont_1">
                        <div className="skill_main_cont_2">

                            <div className="skill_one">
                                <div className="skil_content__main_cont">
                                    <p>React 18</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 reactjs1"></div>
                                        <div className="s_rem2 reactjs2"></div>
                                    </div>
                                </div>

                                <div className="skil_content__main_cont">
                                    <p>Node Js</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 nodejs1"></div>
                                        <div className="s_rem2 nodejs2"></div>
                                    </div>
                                </div>


                                <div className="skil_content__main_cont">
                                    <p>Express Js</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 nodejs1"></div>
                                        <div className="s_rem2 nodejs2"></div>
                                    </div>
                                </div>



                                <div className="skil_content__main_cont">
                                    <p>Mongo Db</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 nodejs1"></div>
                                        <div className="s_rem2 nodejs2"></div>
                                    </div>
                                </div>


                                <div className="skil_content__main_cont">
                                    <p>MySql</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 nodejs1"></div>
                                        <div className="s_rem2 nodejs2"></div>
                                    </div>
                                </div>

                            </div>





                            <div className="skill_two">
                                <div className="skil_content__main_cont">
                                    <p>HTML5</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 reactjs1"></div>
                                        <div className="s_rem2 reactjs2"></div>
                                    </div>
                                </div>

                                <div className="skil_content__main_cont">
                                    <p>CSS3</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 reactjs1"></div>
                                        <div className="s_rem2 reactjs2"></div>
                                    </div>
                                </div>

                                <div className="skil_content__main_cont">
                                    <p>JavaScript</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 reactjs1"></div>
                                        <div className="s_rem2 reactjs2"></div>
                                    </div>
                                </div>


                                <div className="skil_content__main_cont">
                                    <p>Core Java</p>
                                    <div className="skil_content_cont">
                                        <div className="s_rem1 reactjs1"></div>
                                        <div className="s_rem2 reactjs2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>








            {/* title- projects */}
            <div className="aboutme_title_container" id="projects">
                <div className="aboutme_main_title_container">
                    <p>Projects</p>
                    <p>Explore The Wonders !</p>
                    <div className="line_container">
                        <div className="line"></div>
                        <div className="line_center_design"></div>
                    </div>
                </div>
            </div>






            {/* Projects */}
            <div className="edu_cont porject_cont">
                <div className="edu_main_cont" >

                    <div className="edu_content project_content">
                        <table >
                            <tr>
                                <td>Personal Portfolio Website</td>
                                <td className="edu_td project_td"><button>2021-2022</button></td>

                            </tr>
                            <tr>
                                <td className="edu_top project_edu_top" colSpan={2}><span className="tech_used">Technology Used :</span> React Js</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">A Personal Portfolio website to showcase all my details and projects at one place.</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project_buttons">
                                        <a href="https://portfolio.skynoveau.in/"><button>Link</button></a>
                                        <a href=""><button>Demo</button></a>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table className="edu_table">
                            <tr>
                                <td>Online Course Application</td>
                                <td className="edu_td project_td"><button>2021-2022</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top project_edu_top" colSpan={2}><span className="tech_used">Technology Used :</span> React Js</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">An ecommerce application designed to register online courses wth payment system integration</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project_buttons">
                                        <a href="https://skycourse.skynoveau.in"><button>Link</button></a>
                                        <a href="https://www.linkedin.com/posts/karthik-b-736308209_html5-css-js-activity-6977863714578264064-Sec0?utm_source=share&utm_medium=member_desktop"><button>Demo</button></a>
                                    </div>
                                </td>
                            </tr>
                        </table>


                        <table className="edu_table">
                            <tr>
                                <td>Simple Calculator</td>
                                <td className="edu_td project_td"><button>2021-2022</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top project_edu_top" colSpan={2}><span className="tech_used">Technology Used :</span> React Js</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">Calculator designed to do correct calculations, and to do so efficiently</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project_buttons">
                                        <a href="https://calc.skynoveau.in/"><button>Link</button></a>
                                        <a href="https://www.linkedin.com/posts/karthik-b-736308209_calculator-html5-css-activity-6991055538457333760-YaAH?utm_source=share&utm_medium=member_desktop"><button>Demo</button></a>
                                    </div>
                                </td>
                            </tr>
                        </table>


                        <table className="edu_table">
                            <tr>
                                <td>Flight Booking Application</td>
                                <td className="edu_td project_td"><button>2021-2022</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top project_edu_top" colSpan={2}><span className="tech_used">Technology Used :</span> React Js, Material UI, Email Js</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">The online flight booking application designed to book the National and International flights</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project_buttons">
                                        <a href="https://skytrip.skynoveau.in/"><button>Link</button></a>
                                        <a href="https://www.linkedin.com/posts/karthik-b-736308209_flight-frontenddevelopment-reactjs-activity-7008039148657790976-JrL3?utm_source=share&utm_medium=member_desktop"><button>Demo</button></a>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table className="edu_table">
                            <tr>
                                <td>Book Store Website</td>
                                <td className="edu_td project_td"><button>2021-2022</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top project_edu_top" colSpan={2}><span className="tech_used">Technology Used :</span> React Js, Express Js, Mongo DB, Swiper Js</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">An Online book store application designed to customers can search add update delete the books</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project_buttons">
                                        <a href="https://bookstore.skynoveau.in/"><button>Link</button></a>
                                        <a href="https://bookstore.skynoveau.in/"><button>Demo</button></a>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <table className="edu_table">
                            <tr>
                                <td>Quiz Application</td>
                                <td className="edu_td project_td"><button>2021-2022</button></td>
                            </tr>
                            <tr>
                                <td className="edu_top project_edu_top" colSpan={2}><span className="tech_used">Technology Used :</span> React Js</td>
                            </tr>
                            <tr>
                                <td className="edu_top edu_top1">The quiz application designed to take online exams with attractive user interface</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project_buttons">
                                        <a href="https://quiz.skynoveau.in/"><button>Link</button></a>
                                        <a href="https://www.linkedin.com/posts/karthik-b-736308209_quiz-javascriptdeveloper-frontend-activity-7012753757247606784-889-?utm_source=share&utm_medium=member_desktop"><button>Demo</button></a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>







            {/* title- projects */}
            <div className="aboutme_title_container" id="contact">
                <div className="aboutme_main_title_container">
                    <p>Contact Me</p>
                    <p>Lets Keep In Touch</p>
                    <div className="line_container">
                        <div className="line"></div>
                        <div className="line_center_design"></div>
                    </div>
                </div>
            </div>








            {/* contact */}
            <div className="contact_cont">
                <div className="contact_main_cont">
                    <div className="contact_cont_1">
                        <p>Get In Touch</p>
                        <div className="pro_icon_cont cont_icon">
                            <a href="https://www.linkedin.com/in/karthik-b-736308209/"><AiFillLinkedin className="icon" /></a>
                            <a href="https://myaccount.google.com/profile"><AiFillGooglePlusSquare className="icon" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100046117488268"><AiFillFacebook className="icon" /></a>
                            <a href="https://www.instagram.com/karthik_noveau/"><AiOutlineInstagram className="icon" /></a>
                            <a href="https://twitter.com/karthik_noveau"><FaTwitterSquare className="icon icon_tiw" /></a>
                            <a href="https://www.youtube.com/channel/UCnl4Bp2_kQkMfRasUMHamfA"><ImYoutube2 className="icon icon_you" /></a>
                        </div>
                        <img src={getintotouch} className="getIntoImg" />

                    </div>
                    <div className="contact_cont_2">
                        <GoogleMap className="map_cont" />
                    </div>

                </div>
            </div>










            {/* footer */}
            <div className="footer">
                <p>© {date.getFullYear()} All Rights reserved by karthik</p>
            </div>

        </div>
    )
}

export default Home;