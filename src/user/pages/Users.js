import React from 'react'
import UsersList from '../components/UsersList/UsersList'

const Users = () => {

    const USERS = [
        {
            id:"u1",
            image:"https://randomuser.me/api/portraits/men/1.jpg",
            name:"User 1",
            placeCount:2
        },
        {
            id:"u2",
            image:"https://randomuser.me/api/portraits/men/2.jpg",
            name:"User 1",
            placeCount:5
        },
        {
            id:"u3",
            image:"https://randomuser.me/api/portraits/men/3.jpg",
            name:"User 1",
            placeCount:6
        }
    ];

    return (
        <div>
            <UsersList items={USERS}/>
        </div>
    )
}

export default Users
