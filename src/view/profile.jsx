import React from 'react'
import sample_profile_pic from '../assets/sample_user_profile_pic.jpg'
import Header from '../components/header'
import './profile.css'

function Profile({firstName="Sample Name", lastName="Sample Last Name", email="sample@email.com"}) {
  return (
    <div className='profile-page'>
        <Header />
        <div className='container'>
            <div className='row justify-content-center'>
                <div id="profile-pic-container" className='col-md-5'>
                    <div className="card profile-pic-card justify-content-center">
                        <img src={sample_profile_pic} alt="profile pic" className="profile-pic" />
                    </div>
                </div>

                <div className='col-md-5 profile-details'>
                    <div className='card profile-details-card'>
                        <div className='field'>
                            <div>First Name</div>
                            <div className='field-values'>{firstName}</div>
                        </div>

                        <div className='field'>
                            <div>Last Name</div>
                            <div>{lastName}</div>
                        </div>

                        <div className='field'>
                            <div>Email</div>
                            <div>{email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;