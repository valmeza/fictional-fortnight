import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    // state/ react hook
    // variable showMenu, method setShowMenu
    // hook useState
    const [showMenu, setShowMenu] = useState(false)

    let menu; // initialize variable but don't assign until condition is met
    let menuMask;

    if (showMenu) { // if true then render this
        menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
            This is the menu
            </div>
        menuMask = <div
            onClick={() => setShowMenu(false)}
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50">

            </div>
    }
    
    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)} // toggle between true or false
                />
            </span>

            { menuMask }

            { menu }
        </nav>
    )
}

export default Navigation