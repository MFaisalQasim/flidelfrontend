
import Image from "next/image";

export default function createcampaign({ posts }) {
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
                                    <a><span> <img />.</span>Login / Sign Up{posts.data.id}<button className="dropbtn dropdown-toggle"></button></a>
                                    <div className="dropdown-content">
                                        <a href="#">Login</a>
                                        <a href="#">Sign Up</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                <hr className='' style={{ height: '3px' }} />
            </header>
            <body>
                <div id="wrapper">
                    <div id="sidebar-wrapper">
                        <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
                            {posts.data.map((res, index) => {
                                return (
                                    <>
                                        <li class="active">
                                            <a href="#"><span class="fa-stack fa-lg pull-left"><div className="square_image"></div></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span class="fa-stack fa-lg pull-left"><p className="cards_horizontal"> {res.id} </p></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span class="fa-stack fa-lg pull-left"><p className="cards_horizontal">{res.created_time}</p></span></a>
                                        </li>
                                        <li>
                                            <a href="#"> <span class="fa-stack fa-lg pull-left"><p className="cards_horizontal">{res.start_time}</p></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span class="fa-stack fa-lg pull-left"><p className="cards_horizontal">{res.click}</p></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span class="fa-stack fa-lg pull-left"><p className="cards_horizontal">{res.reach}</p></span></a>
                                            <li>
                                            </li>
                                            <a href="#"><span class="fa-stack fa-lg pull-left"><p className="cards_horizontal">{res.budget_remaining}</p></span></a>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <main>
                        <div className="background">
                            <div className="container">
                                <div className="stripes">
                                    <div className='row'>
                                        <div className='col-12'>
                                            <ul className="sidebar-nav  " style={{ display: 'inline-flex' }} id="menu">
                                                <li className="active">
                                                    <a href="#">Metrics</a>
                                                </li>
                                                <li>
                                                    <a href="#">Preview Ads</a>
                                                </li>
                                            </ul>
                                            <button type="button" className="btn sub-nav-button-details">Back</button>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className='col-12'>
                                        <div className='row details-boxs'>
                                            <div className='col-3 details-box1'>
                                                <div className='row'>
                                                    
                                                    <p className='col-1'><img  src='/Vector (5).png' height='50' width='50'></img></p>
                                                    <h1>{ }</h1>
                                                </div>
                                            </div>
                                            <div className='col-3 details-box2'>
                                                <div className='row'>
                                                    <img></img>
                                                    <h1>{ }</h1>
                                                </div>
                                            </div>
                                            <div className='col-3 details-box3'>
                                                <div className='row'>
                                                    <i></i>
                                                    <h1>{ }</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row1">
                                        <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">PUBLISHED ON</p></div>
                                        <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">CLICKS</p></div>
                                        <div className="col-md-2 col-lg-2  my-auto" ><p className="cards_horizontal">REACH</p></div>
                                        <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">BUDGET</p></div>
                                        <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">SPENT</p></div>
                                        <div className="col-md-2 col-lg-2  my-auto"><i className="fas fa-eye"></i></div>
                                        <div className="col-md-2 col-lg-2  my-auto"><i className="fas fa-trash"></i></div>
                                    </div>
                                    {posts.data.map((res, index) => {
                                        return <div key={index} className="row row2">
                                            <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal"> </p></div>
                                            <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">{res.click}</p></div>
                                            <div className="col-md-2 col-lg-2  my-auto" ><p className="cards_horizontal">{res.reach}</p></div>
                                            <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">{res.budget_remaining}</p></div>
                                            <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal"></p></div>
                                            <div className="col-md-2 col-lg-2  my-auto"><i className="fas fa-eye"></i></div>
                                            <div className="col-md-2 col-lg-2  my-auto"><i className="fas fa-trash"></i></div>
                                        </div>
                                    })}
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

                </div>
            </body>
        </>
    )
}



export async function getStaticProps(context) {
    // const res = await fetch(`https://infinite-atoll-05621.herokuapp.com/facebook/ads`)
    const res = await fetch(`https://infinite-atoll-05621.herokuapp.com/facebook/ad-sets`)
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    }
}