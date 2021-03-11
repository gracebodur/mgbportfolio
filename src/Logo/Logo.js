import logo from '../assets/logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <section className='mgb-logo'>
            <img className='logo' src={logo} alt="Grace's logo" />
        </section>
    );
}

export default Logo;