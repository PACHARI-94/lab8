import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/lab-08-5f83e.appspot.com/o/IMG_1244.JPG?alt=media&token=1ef56bcc-f015-4898-9d22-ecdd7e1c3761" className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Pachari Thonhongsa (610610699)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
