

export default function register() {
    const handleChange = () => { }

    return (
        <>

            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="direction01">
                            </div>
                            <div className="direction">
                                <div>
                                    <img src='./flidel_logo.png'></img>
                                </div>
                                <div className="sub_direction">
                                    <div className="text-left">
                                        <p className="signin">Sign Up</p>
                                    </div>
                                    <div className="form_main_content">
                                        <label className="label">
                                            Email
                                        </label>
                                        <br />
                                        <input type="email" value="" onChange={handleChange} required />
                                        <br />
                                        <br />
                                        <label className="label">
                                            FirstName
                                        </label>
                                        <br />
                                        <input type="text" required />
                                        <br />
                                        <br />
                                        <label className="label">
                                            LastName
                                        </label>
                                        <br />
                                        <input type="text" required />
                                        <br />
                                        <br />
                                        <label>
                                            Password </label>
                                        <br />
                                        <input type="password" required />
                                        <br />
                                        <br />
                                        <label>
                                            Confirm Password </label>
                                        <br />
                                        <input type="password" required />
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                I agree all <a class="bluelink">Terms </a> and <a class="bluelink">Policies</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" class="blocksign">Signup</button>
                                    </div>
                                </div>
                                <div class="registerd">
                                    <p>Already Have an Account? <a class="loginlink">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
       
            </div>
        </>
    )
}


