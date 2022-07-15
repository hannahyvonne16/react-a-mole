import { useEffect } from "react"
import MoleHill from './assets/molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setdisplayMole(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} alt='a mole hill' src={MoleHill} />
        </div>
    )

}

export default EmptySlot;