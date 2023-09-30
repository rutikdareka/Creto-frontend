import React from 'react'
import '../../styles/small/loader.css'

function Messagesloader() {
    return (
        <div className="loader">
            <div className="ub_loader">
                <div style={{ backgroundColor: "#444" }} className="circle_loader"></div>
                <div style={{ backgroundColor: "#444" }} className="circle_loader"></div>
                <div style={{ backgroundColor: "#444" }} className="circle_loader"></div>
                <div style={{ backgroundColor: "#444" }} className="circle_loader"></div>
            </div>
        </div>
    )
}

export default Messagesloader