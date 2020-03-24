import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/lab8-expenses-bcc81.appspot.com/o/IMG_1245.JPG?alt=media&token=d215e87a-9f82-4cbc-9a4d-0a40980779db" className='card-img-top' alt="..." />
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
