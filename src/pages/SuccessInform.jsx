import React from 'react'
import { Box } from '@mui/material'

function SuccessInform() {
    return (
        <>

            <Box
                sx={{
                    width: 400,
                    height: 400,
                    border: "1px solid #4444",
                    margin: "10% auto"
                }}
                className='sdsdd'
            >

                <div style={{ textAlign: "center", height: "164px" }}>
                    <img style={{ height: "200px", width: "200px" }} src="data:image/png;base64,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" alt="" />
                </div>
                <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "700" }}>Check your Inbox!</div> <br />
                <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "500", fontSize: "15px" }}>We've sent you a link for Verify account and join Creto!</div>
                <br /> <br />
                <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "500" }}>complete setup your account!</div>
                <br /> <br />
                <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "700", fontSize: "10px" }}>@CretoProf@gmail.com. /2023</div>
            </Box>
        </>
    )
}

export default SuccessInform