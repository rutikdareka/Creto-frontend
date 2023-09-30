import React from 'react'
import '../styles/rightsite.scss'
import { Link } from 'react-router-dom'
import rutik from '../assets/rutik.jpg'
import { Button } from '@mui/material'

function RightSite() {
  return (
    <>
      <div className="right_site_container">
        <div className="right_sub">
          <div className="text">
            Who to follow
          </div>
          <div className="suggested_users">
            <div className="users">
              <Link to={'/'}>
                <img src={rutik} alt="Loaded" />
                <p>Rutik Darekar</p>
                <div className="btn">
                  <button>follow</button>
                </div>
              </Link>
            </div>
            <div className="users">
              <Link to={'/'}>
                <img src={rutik} alt="Loaded" />
                <p>Rutik Darekar</p>
                <div className="btn">
                  <button>follow</button>
                </div>
              </Link>
            </div>
            <div className="users">
              <Link to={'/'}>
                <img src={rutik} alt="Loaded" />
                <p>Rutik Darekar</p>
                <div className="btn">
                  <button>follow</button>
                </div>
              </Link>
            </div>
            <div className="users">
              <Link to={'/'}>
                <img src={rutik} alt="Loaded" />
                <p>Rutik Darekar</p>
                <div className="btn">
                  <button>follow</button>
                </div>
              </Link>
            </div>
            <div className="users">
              <Link to={'/'}>
                <img src={rutik} alt="Loaded" />
                <p>Rutik Darekar</p>
                <div className="btn">
                  <button>follow</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="seeall">
             <Link to={'/explore'}>See all</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSite