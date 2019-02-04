import React from 'react';

const ClientTestimonies = ({ name, testimony, image }) => {

  return (
    <div className="row">
      <div className="col-12 text-center">
        <img src={image} className="img-client" />
      </div>
      <div className="col-12 text-center">
        <h3 className="no-margin">{name}</h3>
      </div>
      <div className="col-12">
        <div className="text-center client-testimony">{`"${testimony}"`}</div>
      </div>
    </div>
  )
}

export default ClientTestimonies
