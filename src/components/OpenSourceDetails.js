import React from 'react'

import thumbnail from '../images/thumbnail.png'

export default ({ name, img, shortDesc }) => {
  const imgFinal = img || thumbnail

  return (
    <div className="col-4 img-project">
      <img src={imgFinal} alt="" style={{ height: '100%', width: '100%' }} />

      <div className="bg-image-overlay" />
      <div className="bg-image-details-overlay text-center">
        <div className="row">
          <div className="col-12">
            <h1 className="no-margin">{name}</h1>
          </div>
          <div className="col-12 text-center">
            <div className="project-details">{shortDesc}</div>
          </div>
          <div className="col-12">
            <a
              href="https://github.com/reciosonny/reactwizardform"
              target="_blank"
              className="button"
            >
              <span>VIEW ON GITHUB</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
