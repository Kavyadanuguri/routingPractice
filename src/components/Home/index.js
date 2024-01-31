// Write your JS code here
import './index.css'

const Home = props => {
  const {homeDetails} = props
  console.log(homeDetails)

  return (
    <div className="home-bg-container">
      <img
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
      />
      <h1 className="home-p1">Home</h1>
    </div>
  )
}

export default Home
