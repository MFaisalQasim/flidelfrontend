
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";


export default function createcampaign(posts) {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg background_color_nav">
                <div className="container-fluid">
                    <div className="flidel_logo_margin">
                        <Image src="/flidel_logo.png" width={100} height={25} ></Image>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Ad Studio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Audience Studio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Account Setting</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" class="btn nav-button" >Request Feature</button>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div class="dropdown">
                                <a><span> <img/>.</span>Login / Sign Up<button className="dropbtn dropdown-toggle"></button></a> 
                                <div className="dropdown-content">
                                    <a href="#">Login</a>
                                    <a href="#">Sign Up</a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </nav>
            <hr className='nav-' style={{height:'3px'}}/>
        </header>

            <body>
                <div id="wrapper">
                    <div id="sidebar-wrapper">
                        <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

                            <li class="active">
                                <a href="#"><span class="fa-stack fa-lg pull-left"><img src='/Group 87.png' alt='Group 87.png'></img></span> Ad Platform</a>
                            </li>
                            <li>
                                <a href="#"><span class="fa-stack fa-lg pull-left"><img src='/Group 97.png' alt='Group 97.png'></img></span> Campaign</a>
                            </li>
                            <li>
                                <a href="#"><span class="fa-stack fa-lg pull-left"><img src='/Group 94.png' alt='Group 94.png'></img></span>Audience</a>
                            </li>
                            <li>
                                <a href="#"> <span class="fa-stack fa-lg pull-left"><img src='/Group 92.png' alt='Group 92.png'></img></span>Ad Creation</a>
                            </li>
                            <li>
                                <a href="#"><span class="fa-stack fa-lg pull-left"><img src='/Group 95.png' alt='Group 95.png'></img></span>Review</a>
                            </li>
                            <li>
                                <a href="#"><span class="fa-stack fa-lg pull-left"><img src='/Group 96.png' alt='Group 96.png'></img></span>Publish</a>
                            </li>
                        </ul>
                    </div>
                    <div id="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div className="background">
                                        <div className="container">
                                            <div className="row ">
                                                <p className="ad_text">Please select the ad platform you want to advertise</p>
                                                <div className="row social-container">
                                                    <div className=" col-md-4 col-lg-4 mt-2 my-auto">
                                                        <a href="#"
                                                            className="youtube social">
                                                            {/* <FontAwesomeIcon icon={faYoutube} size="2x" />  */}
                                                            <Image src='/Group 42.png' width={250} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className=" col-md-4 col-lg-4 mt-2 my-auto">
                                                        <a href="#"
                                                            className="facebook social">
                                                            {/* <FontAwesomeIcon icon={faFacebook} size="6x" /> */}
                                                            <Image src='/Group 47.png' width={250} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className=" col-md-4 col-lg-4 mt-2 my-auto">
                                                        <a href="#" className="twitter social">
                                                            {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
                                                            <Image src='/Group 41.png' width={250} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className=" col-md-4 col-lg-4 mt-2 my-auto">
                                                        <a href="#"
                                                            className="instagram social">
                                                            {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
                                                            <Image src='/Group 46.png' width={250} height={200} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="main1">
                                                <div className="mt-2 float-right">
                                                    <a className="next">Next</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </body>
        </>
    )
}

