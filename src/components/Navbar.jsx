const NavBar = () => {

    return (
        <>
           <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="logo">
                                <a href="/">Portfolio</a>
                                </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <ul className="nav_menu">
                                <li> <a href="/">Home</a></li>
                                <li> <a href="/">Experience</a></li>
                                <li> <a href="/">Skills</a></li>
                                <li> <a href="/">Projects</a></li>
                                <li> <a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
           </header>
        </>
    )
}
export default NavBar;