import React from 'react'

function Button({ name, onclick }) {
    return (
        <>
            <button onclick={onclick} type='submit'>
                {name}
            </button>
        </>
    )
}

export default Button