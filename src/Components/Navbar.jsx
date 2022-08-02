import nav from '../cssmodule/nav.module.css'
import { catAdapter } from '../categories'
const Navbar = () => {
    return(
        <div className={nav.navbar}>
            <section className={nav.layout}>

                    <p>Protoise</p>
            <section className={nav.nsearch}>

                <input type="text" placeholder="search for any image"/>
            </section>
            </section>
            <section className={nav.hadapter}>
                <ul className={nav.flow}>
                    {catAdapter && catAdapter.map((category) => {
                        return <li>{category}</li>
                    })}
                </ul>
            </section>
        </div>
    )
}
export {Navbar}
