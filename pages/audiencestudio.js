

export default function audiencestudio() {
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
                        <div className="attendance">
                            <p className="audience">Audience Studio</p>
                        </div>
                        <div className="main2">
                            <input type="text" />
                            &nbsp;&nbsp;
                            <a className="next1">Location Filter</a>
                            &nbsp;&nbsp;
                            <a className="next1">Gender Filter</a>
                            &nbsp;&nbsp;
                            <a className="next1">Age Filter</a>
                            &nbsp;&nbsp;
                            <a className="next1">Location Filter</a>
                            &nbsp;&nbsp;
                            <a className="next1">Location Filter</a>
                        </div>
                        <div className="mt-5">
                            <table id="myTable">
                                <tr className="header">
                                    <th>Inetrest</th>
                                    <th>Audience Size</th>
                                    <th>Facebook</th>
                                    <th>Google</th>
                                    <th>Instagram</th>
                                    <th>Category</th>
                                    <th></th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Germany</td>
                                    </tr>
                                </tbody>
                            </table>
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