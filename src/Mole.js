import { useEffect } from 'react'
import moleImg from './assets/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} alt='a mole' onClick={props.handleClick} />
        </div>
    )
}

export default Mole;