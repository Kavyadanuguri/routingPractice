// Write your JS code here
import './index.css'

const NotFound = props => {
  const {notDetails} = props
  console.log(notDetails)

  return (
    <div className="not-bg-container">
      <img
        className="not-img"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      />
      <h1 className="not-p1">Not Found</h1>
    </div>
  )
}

export default NotFound
