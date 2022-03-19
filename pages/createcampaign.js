

export default function createcampaign({ posts }) {
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
                                <p className="create_campaign">Create Campaign</p>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="form_main_content">
                                <label> Your Company/Product Name </label>
                                <br />
                                <input type="text" required />
                                <br />
                                <br />
                                <label> Search Words </label>
                                <br />
                                <input type="text" required />
                                <br />
                                <br />
                                <label> Select Campaign Type </label>
                                <br />
                                <input type="text" required />
                            </div>
                            <div className="ad_platform">
                                <p className="ad_text">Select the Ad Platform</p>
                            </div>
                            <div className="row">

                                <div className="row">
                                    {posts.data.map((res, index) => {
                                        return <div key={index} className="col-md-6 col-lg-6 mt-2 my-auto">
                                            <div className="ads">
                                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"> {res.id} </p></div>
                                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"> {res.targeting.age_max} </p></div>
                                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"> {res.targeting.age_min} </p></div>
                                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"> {res.targeting.genders} </p></div>
                                            </div>
                                        </div>

                                    })
                                    }
                                </div>
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
                </div>
            </main>
        </>
    )
}



export async function getStaticProps(context) {
    const res = await fetch(`https://infinite-atoll-05621.herokuapp.com/facebook/ads`)
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    }
}