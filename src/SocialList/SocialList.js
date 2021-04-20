const SocialList = ({title, iconLink, iconUrl}) => {
    return (
        <a aria-current='page' title={title} href={iconLink} alt='social links' target='_blank' rel='noreferrer' className='link social-link'>
            <i className={iconUrl} style={{color: 'goldenrod',}}></i>
        </a>
    )
}

export default SocialList
