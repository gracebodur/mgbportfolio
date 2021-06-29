import SocialList from '../SocialList/SocialList'
import './SocialIcons.css'
import socialItems from '../../socialIcons'

const SocialIcons = () => {
    const socialData = socialItems.map(item => <SocialList key={item.id} iconUrl={item.iconUrl} iconName={item.iconName} iconLink={item.iconLink} title={item.title}/>
    )
    return (
        <div className='social-icons'>
            {socialData}
        </div>
    );
}

export default SocialIcons;