import {Link} from 'react-router-dom'
import SocialIcons from '../SocialIcons/SocialIcons'
import mgbLogo from '../assets/mgb-logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <section className='mgb-logo'>
            <Link to='/' aria-current='page' title='Home - Marie Grace Bodur'>
                <img src={mgbLogo} alt="Grace's logo" className='grace-logo'/>
            </Link>
            <SocialIcons />
        </section>
    );
}

export default Logo;