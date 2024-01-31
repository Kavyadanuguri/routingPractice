// Write your JS code here
import './index.css'

const Contact = props => {
  const {contactDetails} = props
  console.log(contactDetails)

  return (
    <div className="contact-bg-container">
      <img
        alt="Contact"
        src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png "
      />
      <h1 className="contact-p1">Contact</h1>
    </div>
  )
}

export default Contact
