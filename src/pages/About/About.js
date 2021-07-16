import avatar from '../../assets/profile.png'
import './About.css'

const About = () => {
    return (
        <section className='about-wrapper'>
            <div className="about-section">
                <img className="grace-avatar" src={avatar} alt='Marie Grace Bodur profile pic' />
                <div className="container-s">
                    <h2 className="about-title text-left" id='about'>Working remotely, based in North Carolina</h2>
                    <p className="about-text text-left lead">I see myself as a full-stack web developer with a strength in the front-end and a passion for helping others, clean code and great UI/UX. I love being a front-end developer because I can combine my creativity and analytical traits to break down complex problems and solve them efficiently. I can work closely with other team members, but I work just as well independently.</p>
                    <p className='about-text text-left lead'>I enjoy arts and crafts, cooking, the outdoors and sometimes I try gardening too! ⚡ Fun fact: An accomplishment I’m particularly proud of is finishing <a href="https://www.thinkful.com/" className='link' target='_blank' rel='noreferrer' alt='thinkful site' style={{textDecoration: 'none', color: 'goldenrod'}}>Thinkful's</a> Engineering Immersion Program while being a full-time mom at the age of 40!</p>
                    <p className='about-text text-left lead'>I'm excited to <a href="https://www.linkedin.com/in/mgracebodur/" className='link' target='_blank' rel='noreferrer' alt='connect with linkedin' style={{textDecoration: 'none', color: 'goldenrod'}}>connect</a> with companies and colleagues that inspire me!</p>
                </div>
            </div>
        </section>
    )
}

export default About