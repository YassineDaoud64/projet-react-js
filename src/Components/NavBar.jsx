import { Link } from "react-router-dom"
import logo from '../logo1.jpg'
import './css/navbar.css'
function NavBar() {
    return (
    <>
        <nav className="navbar ">
            <div className="container-fluid">
                <div className="navbar-header">
                <img src={logo} alt="img" className='img64'/>
                
                </div>
               
                <ul className="nav navbar-nav">
                
                <Link className="navbar-brand" to="/" id="y">DND Trading</Link>
                                    
                    <li className="active"><Link to="" id="y">Home</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="#" id="y">How it work<span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li><a href="#cards" id='h'>Evaluation process</a></li>
                            <li><a href="#rules"id='h'>Trading objectives</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="#" id="y">Trading<span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="#" id='h'>Coaching</Link></li>
                            <li><Link to="#" id='h'>Economic Calendar</Link></li>
                        </ul>
                    </li>
                    <li><a href="#footer" id="y">Contact</a></li>
                    <li><Link to="clientArea" id="a">Client Area</Link></li>
                    

                </ul>
                <Link className="btn btn-primary col-md-1" to='Register'style={{ fontSize: '16px', padding:' 14px 16px',float:"right"}}>
                        Register
                    </Link>

            </div>
        </nav>
    </>)
}

export default NavBar

