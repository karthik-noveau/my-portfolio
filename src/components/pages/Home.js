import Navibar from "../navbar/Navibar";
import '../css/Home.css';
import backgimage from '../Assests/backgimage.png'
import karthik from '../Assests/karthik.jpg'
import abt_img from '../Assests/abt_img.png'

import { ImYoutube2 } from 'react-icons/im'
import { AiFillGooglePlusSquare, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'

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
                                Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.
                            </p>
                            <div className="highlights_cont">
                                <p >Here are a Few Highlights:</p>
                                <ul>
                                    <li>Full Stack web and mobile development</li>
                                    <li>Interactive Front End as per the design</li>
                                    <li>React and React Native</li>
                                    <li>Redux for State Mnanagement</li>
                                    <li>Building REST API</li>
                                    <li>Managing database</li>
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

        </div>
    )
}

export default Home;