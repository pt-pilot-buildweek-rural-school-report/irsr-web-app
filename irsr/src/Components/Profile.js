import React from 'react';
import someDude from '../images/someDude.jpeg';

const Profile = (props) => {
    return ( 
        <div className = "profileContainer">
            <h2>Welcome back User! You have X issues to review</h2>
            <div className = 'profilePicture'>
            <img src = {someDude} alt= 'user' />
            </div>
            
        </div>
     );
}
 
export default Profile;