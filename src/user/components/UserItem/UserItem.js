import React from 'react';
import Avatar from '../../../shared/components/UIElements/Avatar/Avatar';
import './UserItem.css';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
          <Link to={`/${props.id}/places`}>
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h2>
            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
          </h2>
        </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
