import React from 'react';
import { useParams } from 'react-router-dom';

function ProfileScreen(props) {
  const { Firstname, email, bio, avatarUrl } = props;
  const { data } = useParams();

  return (
    <div className="profile">
      <img src={avatarUrl} alt="Profile Avatar" className="avatar" />
      <div className="details">
      <h1>User Email: {global.email}</h1>
        <h2>{Firstname}</h2>
        <p>Received data: {data}</p>
        <p>{email}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default ProfileScreen;