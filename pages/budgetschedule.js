

export default function budgetschedule() {
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
                            <div className="text-center">
                                <p className="create_campaign">Budget Sceduling</p>
                            </div>
                        </div>
                        <div className="form_main_content">
                            <label>
                                Budget
                            </label>
                            <br />
                            <input type="text" placeholder="Buget Amount" required />
                            <br />
                            <br />
                            <label>Budget Allocation</label>
                            <br />
                            <div>
                                <label htmlFor="file">Google :</label>
                                <progress className="progress" id="file" max="100"> 32% </progress> <br />
                            </div>
                            <div className="main1">
                                <div className="age_divs">Start Date <br />
                                    <input type="number" placeholder="Start Date" />
                                </div>
                                <div className="age_divs">Time <br />
                                    <input type="number" placeholder="Time" />
                                </div>
                            </div>
                            <div className="main1">
                                <div className="age_divs">End Date <br />
                                    <input type="number" placeholder="End Date" />
                                </div>
                            </div>
                            <div className="advanced">
                                Advanced Option
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
    const res = await fetch(`https://infinite-atoll-05621.herokuapp.com/facebook/campaigns`)
    const posts = await res.json();
 
    return {
        props: {
          posts,
        },
      }
  }