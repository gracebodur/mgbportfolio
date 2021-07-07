import gottalotto from '../assets/GottaLotto.png'
import scrabblesolver from '../assets/ScrabbleSolver.png'
import jot from '../assets/Jot.png'
import quizapp from '../assets/QuizApp.png'
import reshop from '../assets/ReShop.png'
import gbb from '../assets/GBB.png'

const projectItems = [
    {
        id: 1,
        imgUrl: reshop,
        title: 'ReShop',
        description: "A full-stack ecommerce app made with a Create-React-App client and Node API, using Stripe to process payments.",
        liveLink: 'https://fullstack-reshop.herokuapp.com/',
        codeLink: 'https://github.com/gracebodur/reshop.git',
    },
    {
        id: 2,
        imgUrl: gottalotto,
        title: 'GottaLotto',
        description: "GottaLotto is for lotto enthusiasts to have plain old fun in guessing the winning numbers for each Saturday's PowerBall 's drawing. Collaborated with team members to plan website development, converting mockups into usable web presence with HTML, CSS, JavaScript, React.js, Node, PostgreSQL, and Cron Job coding.",
        liveLink: 'https://malekandgrace-gottalotto.now.sh/',
        codeLink: 'https://github.com/gracebodur/gottalotto-client',
    },
    {
        id: 3,
        imgUrl: scrabblesolver,
        title: 'Scrabble Solver',
        description: "Scrabble solver is a team project that is built and inspired by the popular word game Scrabble. The application produces valid words based on the provided scrabble letters or tiles. It shows users dictionary definitions when clicking on valid word results and allows scrabble enthusiasts to sort word results by score or length. Developed using HTML5, CSS3, Tailwind CSS, JavaScript, JQuery and Rest API.",
        liveLink: 'https://scrabble.codybarr.dev/',
        codeLink: 'https://github.com/codybarr-thinkful/scrabble-solver'
    },
    {
        id: 4,
        imgUrl: quizapp,
        title: 'Quiz App',
        description: "It has dominated global headlines for weeks, and you could be forgiven for feeling overwhelmed by the amount of information you’ve seen, heard and read about the coronavirus outbreak. Test your knowledge with our coronavirus quiz – and you may learn something along the way. Built using HTML, CSS, jQuery and JavaScript",
        liveLink: 'https://gracebodur.github.io/covid-19-quizapp/',
        codeLink: 'https://github.com/gracebodur/covid-19-quizapp.git'
    },
    {
        id: 5,
        imgUrl: jot,
        title: 'Jot',
        description: "A note taking app based on Google's Keep note-taking service where users can add, edit and delete a note. Notes are stored and access using LocalStorage so created notes will persist even after the browser window is closed. Built using HTML, CSS and JavaScript.",
        liveLink: 'https://gracebodur.github.io/jot/',
        codeLink: 'https://github.com/gracebodur/jot'
    },
    {
        id: 6,
        imgUrl: gbb,
        title: "Grace and Bo's Brewery",
        description: "An example of an age gate for a local brewery’s website that include a prompt for a user to enter in their date of birth. If they are under 21, they are shown an error message; If they are over 21, they are shown the brewery’s website homepage.",
        liveLink: 'https://graceandbosbrewery.netlify.app/',
        codeLink: 'https://github.com/gracebodur/age-gate.git'
    }

]

export default projectItems