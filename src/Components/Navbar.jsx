import nav from '../cssmodule/nav.module.css'
import { catAdapter } from '../categories'
import { useRef } from 'react'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
const Navbar = () => {
    const eleRef = useRef()

    const move = (val) => {
        const ele = eleRef.current
        ele.scrollBy(0+val, 0)
    }

    return(
        <div className={nav.navbar}>
            <section className={nav.layout}>

                    <p>Protoise</p>
            <section className={nav.nsearch}>

                <input type="text" placeholder="search for any image"/>
            </section>
            </section>
            <section className={nav.hadapter}>
                <BiLeftArrow size={20} className={nav.left} onClick={() => move(250)} />
                <ul ref={eleRef}  className={nav.flow}>
                    {catAdapter && catAdapter.map((category, index) => {
                        return <li key={index} >{category}</li>
                    })}
                </ul>
                <BiRightArrow size={20} className={nav.right} onClick={() => move(-250)}/>
            </section>
        </div>
    )
}
export {Navbar}
