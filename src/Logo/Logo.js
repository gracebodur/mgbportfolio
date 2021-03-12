import SocialIcons from '../SocialIcons/SocialIcons'
import mgbLogo from '../assets/mgb-logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <section className='mgb-logo'>
            <a aria-current='page' title='Home - Marie Grace Bodur' href='#home'>
                <img src={mgbLogo} alt="Grace's logo" className='grace-logo'/>
            </a>
            <SocialIcons />
        </section>
    );
}

export default Logo;