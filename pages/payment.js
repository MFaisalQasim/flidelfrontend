

export default function payment() {
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
                                <p className="payment">payment</p>
                            </div>
                        </div>
                        <div className="container1">
                            <div className="payment_div">
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
                </div>
            </main>
        </>

    )
}


// export async function getStaticProps() {
  
//     const res = await fetch('https://infinite-atoll-05621.hrokuapp.com/faceboeok/campaigns')
//     const posts = await res.json()
//     console.log(typeof(posts))
  
    
//     return {
//       props: {
//         posts,
//       },
//     }
//   }