import Navibar from "../navbar/Navibar";
import '../css/Home.css';
import backgimage from '../Assests/backgimage.png'
import karthik from '../Assests/karthik.jpg'
import abt_img from '../Assests/abt_img.png'

import { ImYoutube2 } from 'react-icons/im'
import { AiFillGooglePlusSquare, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'

function Home() {
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
                                <AiFillLinkedin className="icon" />
                                <AiFillGooglePlusSquare className="icon" />
                                <AiFillFacebook className="icon" />
                                <AiOutlineInstagram className="icon" />
                                <FaTwitterSquare className="icon icon_tiw" />
                                <ImYoutube2 className="icon icon_you" />
                            </div>
                            <div className="pro_name">
                                <p>Hello, I'm <span >karthik</span></p>
                                <p>Full stack Web developer</p>
                            </div>
                            <div className='pro_desc'>
                                <p>Knack of building applications with front and back end operations.</p>
                            </div>
                            <div className='pro_button_cont'>
                                <button>Hide Me</button>
                                <button>Get Resume</button>
                            </div>
                        </div>
                        <div className="pro_img_cont">
                            <img src={karthik} />
                        </div>
                    </div>
                </div>
            </div>



            {/* title- about me */}
            <div className="aboutme_title_container">
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
                            <div className='abt_button_cont'>
                                <button>Hide Me</button>
                                <button>Get Resume</button>
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
                                <td className="edu_td"><button>2016-2017</button></td>
                                
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
                                <td className="edu_td"><button>2016-2017</button></td>
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





            {/* title- about me */}
            <div className="aboutme_title_container">
                <div className="aboutme_main_title_container">
                    <p>Skills</p>
                    <p></p>
                    <div className="line_container">
                        <div className="line"></div>
                        <div className="line_center_design"></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;