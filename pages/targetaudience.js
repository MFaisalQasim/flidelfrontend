

export default function targetaudience({ posts }) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg background_color_nav">
                    <div className="container-fluid">
                        <div className="flidel_logo_margin">
                            <a className="navbar-brand navbar_logo" href="#">FLIDEL LOGO</a>
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
                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Username</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="background">
                    <div className="container">
                        <div className="content_one">
                            <div className="center">
                                <p className="create_campaign">Target Audience and Interest</p>
                            </div>
                        </div>
                        <div className="container1">
                            {posts.data.map((res, index) => {
                                return <div key={index} >
                                    <div className="form_main_content">
                                        <label> Location </label>
                                        <br />
                                        <input type="text" placeholder="Search Location" required />
                                        <br />
                                        <br />
                                        <div className="map_div">
                                        </div>
                                    </div>
                                    <div className="main1">
                                        <div className="age_divs">Age Group Min <br />
                                            <br />
                                            <input type="number" value={res.targeting.age_max}/>
                                        </div>
                                        <div className="age_divs">Age Group Max <br /> <br />
                                            <input type="number" value={res.targeting.age_min}/>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="gender"> Gender</p>
                                    </div>
                                    <div className="main1">
                                        <div className="age_divs">
                                            <input type="number" className="another" placeholder="All"  value={res.targeting.genders}/>
                                        </div>
                                        <div className="age_divs">
                                            <input type="number" className="another" placeholder="Male" />
                                        </div>
                                        <div className="age_divs">
                                            <input type="number" className="another" placeholder="female" />
                                        </div>
                                    </div>
                                    <div className="keyword_div">
                                        <p className="keyword">Keywords</p>
                                    </div>
                                    <div className="dynamic">
                                        <div className="main1">
                                            <div className="keyword_dynamic">Keyword</div>
                                            <div className="keyword_dynamic">Keyword</div>
                                            <div className="keyword_dynamic">Keyword</div>
                                        </div>
                                    </div>
                                    <div className="main1 ">
                                        <div className="mt-2">
                                            <a className="next1">Back</a>
                                        </div>
                                        <div className="mt-2">
                                            <a className="next">Next</a>
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export async function getStaticProps() {

    const res = await fetch('https://infinite-atoll-05621.herokuapp.com/facebook/ad-sets')
    const posts = await res.json()
    console.log(typeof (posts))


    return {
        props: {
            posts,
        },
    }
}