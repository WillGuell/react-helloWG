import React from "react" 

const Cards = ({ title, text, image, buttonLabel }) => {
  return (
    <div className="card h-100 text-center">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  

)
}

export default Cards