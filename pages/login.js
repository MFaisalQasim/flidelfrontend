import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default function login() {
    const handleChange = () => { }

    return (
        <>

            <div className="container-fluid ">

                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="direction0">
                        </div>
                        <div className="direction">
                            <div>
                                <img src='./flidel_logo.png'></img>
                            </div>
                            <div className="sub_direction">
                                <div className="text-left">
                                    <p className="signin">Sign In</p>
                                </div>
                                <div className="form_main_content">
                                    <label className="label">
                                        Username
                                    </label>
                                    <br />
                                    <input type="text" value="" onChange={handleChange} required />
                                    <br />
                                    <br />
                                    <label className="label">
                                        Password </label>
                                    <br />
                                    <input type="text" required />
                                </div>
                                <br />

                                <br />
                                <div>
                                    <button type="button" className="blocklogin">Login</button>
                                </div>
                                <div className="or">
                                    Forgot Password?
                                </div>
                                <div className="google_login">
                                    <button type="button" className="block1">           <img src='./google_icon.png'></img> Sign in with Google</button>
                                </div>
                                <div className="google_login">
                                    <button type="button" className="block1">   <img src='./facebook_icon.png'></img>  Sign in with Facebook</button>
                                </div>
                            </div>
                            <div className="registerd">
                                <p>Don't you have Account?</p>
                            </div>

                            <div>
                                <button type="button" className="block2">Signup</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
