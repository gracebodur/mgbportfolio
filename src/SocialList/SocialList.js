const SocialList = (props) => {
    return (
        <a aria-current='page' title={props.title} href={props.iconLink} alt='social links' target='_blank' rel='noreferrer' className='link social-link'>
            <i className={props.iconUrl} style={{color: 'goldenrod',}}></i>
        </a>
    )
}

export default SocialList
