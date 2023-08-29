import React, {useContext} from 'react';
import {Context} from "../index";

const UserProfile = () => {
    const {user} = useContext(Context);

    if(!user.isAuth){
        window.location.href = "/";
    }

    return (
        <div>
            ПРООФИЛЬ
        </div>
    );
};

export default UserProfile;