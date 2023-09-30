import React from 'react'
import '../styles/small/loader.css'

function Loader({ color }) {
   return (
      <>
         <div className="loader">
            <div className="sub_loader">
               <div style={{ backgroundColor: color }} className="circle_loader"></div>
               <div style={{ backgroundColor: color }} className="circle_loader"></div>
               <div style={{ backgroundColor: color }} className="circle_loader"></div>
               <div style={{ backgroundColor: color }} className="circle_loader"></div>
            </div>
         </div>
      </>
   )
}

export default Loader