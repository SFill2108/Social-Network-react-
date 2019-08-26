import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return (
        <div>
            <div>
                <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg" alt=""/>
            </div>
            <div className={classes.Description}>
                a+d
            </div>
        </div>
    );
}

export default ProfileInfo;