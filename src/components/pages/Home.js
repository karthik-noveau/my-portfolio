import Navibar from "../navbar/Navibar";
import '../css/Home.css';
import backgimage from '../Assests/backgimage.png'
import karthik from '../Assests/karthik.jpg'

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
                                <AiFillLinkedin className="icon"/>
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

        </div>
    )
}

export default Home;