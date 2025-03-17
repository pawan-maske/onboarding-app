import {Link} from 'react-router-dom'

const Header = ()=>{
    return (
        <nav>
            <ul className='nav-menu'>
                <li><Link to= "/ecu">ECU Onboarding</Link></li>
                <li><Link to= "/vin">VIN Onboarding</Link></li>
                <li><Link to= "/customer">Customer Onboarding</Link></li>
                <li><Link to ="/mapping">VIN Mapping</Link></li>
                <li><Link to= "/search">VIN Search</Link></li>
                <li><Link to ="/services">VIN Services</Link></li>
            </ul>
        </nav>
    )
}