
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
                                <a><span> <img/>.</span>Login / Sign Up{posts.data.id}<button className="dropbtn dropdown-toggle"></button></a> 
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
            <main>
                <div className="background">
                    <div className="container">
                        <div className="stripes">
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <button type="button" class="btn sub-nav-button-view" >+ New Campaign</button>
                                    </div>
                                    <div className='col-6'>
                                        {/* <div className='row'>
                                                <div className=''>
                                                    <form action="#" className="searchform order-sm-start order-lg-last">
                                                        <div className="form-group d-flex  ">
                                                            <input type="text" className="form-control pl-3" placeholder="Search" />
                                                            <button type="submit" placeholder="" className="form-control search "><span><img src='/Vector (4).png' alt='Vector (4).png' /></span></button>
                                                        </div>
                                                <div className="col-md-1 col-lg-1"><img src='/Vector (4).png' alt='Vector (4).png' /></div>
                                                <div className="col-md-1 col-lg-1  sub-nav-imgs"><img src='/Vector (3).png' alt='Vector (3).png' /></div>
                                                <div className="col-md-1 col-lg-1  sub-nav-imgs"><img src='/Vector (2).png' alt='Vector (2).png' /></div>
                                                    </form>
                                                </div>
                                            </div> */}
                                        <div className='row'>
                                            <div className='col-6 sub-nav-search'>
                                                <form action="#" className="searchform order-sm-start order-lg-last">
                                                    <div className="form-group d-flex  ">
                                                        <input type="text" className="form-control pl-3" placeholder="Search" />
                                                        <button type="submit" placeholder="" className="form-control search"><span><img src='/Vector (4).png' alt='Vector (4).png' /></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <div className="col-md-1 col-lg-1"><img src='/Vector (4).png' alt='Vector (4).png' /></div> */}
                                            <div className="col-md-1 col-lg-1  sub-nav-imgs"><img src='/Vector (3).png' alt='Vector (3).png' /></div>
                                            <div className="col-md-1 col-lg-1  sub-nav-imgs"><img src='/Vector (2).png' alt='Vector (2).png' /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row1">
                                <div className="col-md-1 col-lg-1"></div>
                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">CAMPAIGN NAME</p></div>
                                <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">START DATE</p></div>
                                <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">END DATE</p></div>
                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">STATUS</p></div>
                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">PUBLISHED ON</p></div>
                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">CLICKS</p></div>
                                <div className="col-md-1 col-lg-1  my-auto" ><p className="cards_horizontal">REACH</p></div>
                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">BUDGET</p></div>
                                <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">SPENT</p></div>
                                <div className="col-md-1 col-lg-1  my-auto"><i className="fas fa-eye"></i></div>
                                <div className="col-md-1 col-lg-1  my-auto"><i className="fas fa-trash"></i></div>
                            </div>
                            {posts.data.map((res, index) => {
                                return <div key={index} className="row row1">
                                    <div className="col-md-1 col-lg-1"><div className="square_image"></div></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"> {res.id} </p></div>
                                    <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">{res.created_time}</p></div>
                                    <div className="col-md-2 col-lg-2  my-auto"><p className="cards_horizontal">{res.start_time}</p></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">{res.status} </p></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"> </p></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">{res.click}</p></div>
                                    <div className="col-md-1 col-lg-1  my-auto" ><p className="cards_horizontal">{res.reach}</p></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal">{res.budget_remaining}</p></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><p className="cards_horizontal"></p></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><i className="fas fa-eye"></i></div>
                                    <div className="col-md-1 col-lg-1  my-auto"><i className="fas fa-trash"></i></div>
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