import { useState } from 'react'
import './Button.css'

function Button({title, onClick}) {

    return <button class="custom-button" onClick={onClick}>{title}</button>

}

export default Button
