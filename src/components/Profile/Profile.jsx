import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () =>{
    return (
        <div>
            <div>
                <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            </div>
            <div>
                a+d
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;