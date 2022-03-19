

export default function accountsetting() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg background_color_nav">
                    <div class="container-fluid">
                        <div class="flidel_logo_margin">
                            <a class="navbar-brand navbar_logo" href="#">FLIDEL LOGO</a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Dashboard</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Ad Studio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Audience Studio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Account Setting</a>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Username</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
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