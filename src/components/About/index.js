// Write your JS code here
import './index.css'

const About = props => {
  const {aboutDetails} = props
  console.log(aboutDetails)

  return (
    <div className="about-bg-container">
      <img
        alt="About"
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png "
      />
      <h1 className="about-p1">
        I Love to create! I am a Frontend web developer
      </h1>
    </div>
  )
}

export default About
