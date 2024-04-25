import { Link } from 'react-router-dom'
import '../../styles/header.scss'
import '../../styles/main.scss'
import logo from '../../assets/LOGO.png'
 
function Header() {
    return (
        <header>
            <img src={logo} alt='La maison jungle' className='Kasa-logo' />
            <nav className="navlink">
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </header>
   
    )
}

export default Header