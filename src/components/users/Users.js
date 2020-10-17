import React,  { Component } from 'react';
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                login: "mojombo",
                id: 1,
                url: "https://api.github.com/users/mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/mojombo"
              },
              {
                login: "pjhyett",
                id: 3,
                html_url: "https://github.com/pjhyett",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4"

              },
              {
                login: "wycats",
                id: 4,
                avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
                html_url: "https://github.com/wycats"

              }
        ]
        
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users