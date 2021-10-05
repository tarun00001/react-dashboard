import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="container-fluid">
        <div className="row min-vh-100 flex-column flex-md-row" >
            <aside className="col-12 col-md-2 p-0 flex-shrink-1 navbar-css">
                <nav className="navbar navbar-expand flex-md-column flex-row align-items-start ">
                    <div className="collapse navbar-collapse ">
                        <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between ">
                            <li className="avatar">
                            <span className=" rose">EL</span>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link pl-0 " href="#"><i className="fa fa-bullseye fa-fw"></i> <span className="d-none d-md-inline">Brand</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link pl-0" href="#"><i className="fa fa-book fa-fw"></i> <span className="d-none d-md-inline">Link</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="#"><i className="fa fa-cog fa-fw"></i> <span className="d-none d-md-inline">Link</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="#"><i className="fa fa-heart codeply fa-fw"></i> <span className="d-none d-md-inline">Codeply</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="#"><i className="fa fa-star codeply fa-fw"></i> <span className="d-none d-md-inline">Link</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="#"><i className="fa fa-star fa-fw"></i> <span className="d-none d-md-inline">Link</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
            <main className="col bg-faded py-3 flex-grow-1 main-div">
                <h2>Example</h2>
                <p>
                    This is a Bootstrap 4 example layout that includes a Sidebar menu. On larger screen widths, the Sidebar is on the 
                    left side and consumes the entire page height. It's vertically positioned down the screen. On smaller screen widths (like mobile phones and tablets), the Sidebar
                    moves to the top of the page, and becomes horizontally positioned across the page like a Navbar. Only icons are shown
                    on mobile to limit use of screen real estate.
                </p> 
                <p>
                    This Sidebar works using only Bootstrap CSS classNamees and doesn't require JavaScript. It utilizes the responsive Navbar classNamees
                    to auto-magically switch the Sidebar orientation.
                </p> 
            </main>
        </div>
    </div>
    )
}

export default Sidebar
