import React, { useState } from 'react'
import phulpakhru from '../assets/phulpakhru.jpg'
import rutik from '../assets/rutik.jpg'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import axios from 'axios'



function Middelpost() {

    const [images, setimages] = useState([])
    const [tt, settt] = useState()

    const handlesave = (e) => {
        const files = [...e.target.files]
        settt(files)

        let newarr = [];

        files.forEach(file => {
            if (!file) {
                console.log('error')
            }

            return newarr.push(file)
        })

        setimages([...images, ...newarr])
    }

    const deleteimage = (i) => {
        const newarr = [...images];
        newarr.splice(i, 1);
        setimages(newarr)
    }


    return (
        <>
            <div className="middel_wrappeer">
                <div className="wrapper">
                    <div className="user">
                        <Link to={`/${localStorage.getItem('username')}`}>
                            <Avatar sx={{ zIndex: "-1" }} src={localStorage.getItem('avatar')} alt="" />
                        </Link>
                    </div>
                    <div className="text_center">
                        <textarea name="conetent" cols="52" rows="5" placeholder='What is happening?!'></textarea>
                    </div>
                    <div className="photos_watch">
                        {
                            images ? images.map((item, i) => {
                                return (
                                    <div className="user_chose_photos">
                                        {
                                            item.type.match(/video/i) ?
                                                <video width={100} height={110} controls src={URL.createObjectURL(item)}></video>
                                                :
                                                <img src={URL.createObjectURL(item)} alt="" />
                                        }
                                        <span onClick={() => deleteimage(i)} id='support'>&times;</span>
                                    </div>
                                )
                            })
                                :
                                <div className=""></div>
                        }
                    </div>
                    <div className="icons_and_btn">
                        <label htmlFor="images">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                            </svg>
                        </label>
                        <input type="file" name='file' onChange={handlesave} id='images' multiple accept='images/*' style={{ display: 'none' }} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                        </svg>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Middelpost