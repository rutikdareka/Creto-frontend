import React from 'react'
import { Avatar } from '@mui/material'

function Showusers({ e }) {
    return (
        <>
            <div className="users">
                <div className="user_img">
                    <Avatar src={e.avatar} />
                </div>
                <div className="user-details">
                    <div className="name">{e.displayname}</div>
                    <div className="username">@{e.username}</div>
                </div>
            </div>
        </>
    )
}

export default Showusers