import '../../styles/header.css'
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div id="header">
            <nav>
                <Link id="dashBoard_logo" className='menuLink logo' to="/admin/dashboard"></Link>
                <div className='dropdown'>
                    <div className='menuLink'>
                        <Link className='selected' to="/admin/dashboard"onClick={(e) => activateMenu(e.target)}>Planning</Link>
                    </div>
                    <div className='dropdown-content'>
                        <Link className='dropdown' to="/admin/calendar"onClick={(e) => activateMenu(e.target)}>Vue mensuelle</Link>
                    </div>
                </div>
                <div className='menuLink'><Link className='' to="/admin/programs"onClick={(e) => activateMenu(e.target)}>Programmations</Link></div>
                <div className='menuLink'><Link className='' to="/admin/storefront"onClick={(e) => activateMenu(e.target)}>Page de marque</Link></div>
                <div className='menuLink'><Link className='' to="/admin/coupons" onClick={(e) => activateMenu(e.target)}>Coupons</Link></div>
                <div className='dropdown'>
                    <div className='menuLink'>
                        <Link className='' to="/admin/clients" onClick={(e) => activateMenu(e.target)}>Clients</Link>
                    </div>
                    <div className='dropdown-content'>
                        <Link className='dropdown' to="/admin/feedback"onClick={(e) => activateMenu(e.target)}>Feedback athlète</Link>
                        <Link className='dropdown' to="/admin/surveys"onClick={(e) => activateMenu(e.target)}>Sondage athlète</Link>
                    </div>
                </div>
                <div className='menuLink'><Link className='' to="/admin/reports" onClick={(e) => activateMenu(e.target)}>Rapports</Link></div>
            </nav>
        </div>
    )
}

function activateMenu(element)
{
    const linkElements = Array.from(document.getElementsByClassName("selected"));
    linkElements.map(elemnt => elemnt.classList.remove("selected"));
    element.classList.add("selected");
}

export default Header