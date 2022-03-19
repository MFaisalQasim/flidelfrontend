

export default function adstudio() {
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
                        </div>


                        <div>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 mt-2">
                                    <div className="borde">
                                        <div className="ad_title">
                                            Ad Title
                                        </div>
                                        <div className="card_image">
                                        </div>
                                        <div className="just">
                                            <div className="ad_title">
                                                Headline1
                                            </div>
                                            <div className="ad_title">
                                                Ad Type
                                            </div>
                                        </div>
                                        <div >
                                            <p className="ad_title">Add Platform</p>
                                        </div>
                                        <div>
                                            <p className="ad_title">Add Description</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 mt-2">
                                    <div className="borde">
                                        <div className="ad_title">
                                            Ad Title
                                        </div>
                                        <div className="card_image">
                                        </div>
                                        <div className="just">
                                            <div className="ad_title">
                                                Headline1
                                            </div>
                                            <div className="ad_title">
                                                Ad Type
                                            </div>
                                        </div>
                                        <div >
                                            <p className="ad_title">Add Platform</p>
                                        </div>
                                        <div>
                                            <p className="ad_title">Add Description</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 mt-2">
                                    <div className="borde">
                                        <div className="ad_title">
                                            Ad Title
                                        </div>
                                        <div className="card_image">
                                        </div>
                                        <div className="just">
                                            <div className="ad_title">
                                                Headline1
                                            </div>
                                            <div className="ad_title">
                                                Ad Type
                                            </div>
                                        </div>
                                        <div >
                                            <p className="ad_title">Add Platform</p>
                                        </div>
                                        <div>
                                            <p className="ad_title">Add Description</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 mt-2">
                                    <div className="borde">
                                        <div className="ad_title">
                                            Ad Title
                                        </div>
                                        <div className="card_image">
                                        </div>
                                        <div className="just">
                                            <div className="ad_title">
                                                Headline1
                                            </div>
                                            <div className="ad_title">
                                                Ad Type
                                            </div>
                                        </div>
                                        <div >
                                            <p className="ad_title">Add Platform</p>
                                        </div>
                                        <div>
                                            <p className="ad_title">Add Description</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 mt-2">
                                    <div className="borde">
                                        <div className="ad_title">
                                            Ad Title
                                        </div>
                                        <div className="card_image">
                                        </div>
                                        <div className="just">
                                            <div className="ad_title">
                                                Headline1
                                            </div>
                                            <div className="ad_title">
                                                Ad Type
                                            </div>
                                        </div>
                                        <div >
                                            <p className="ad_title">Add Platform</p>
                                        </div>
                                        <div>
                                            <p className="ad_title">Add Description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}



export async function getStaticProps(context) {
    const res = await fetch(`https://infinite-atoll-05621.herokuapp.com/facebook/campaigns`)
    const posts = await res.json();
 
    return {
        props: {
          posts,
        },
      }
  }