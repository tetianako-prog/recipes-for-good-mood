import React from 'react'
import './VerticalMenu.css'
import {Link} from 'react-router-dom'

const VerticalMenu = () => {
    return(
        <nav className="vertical-menu">
            <label htmlFor="hamburger"></label>
                <input type="checkbox" id="hamburger"/>
                
            <ul>
                <li><Link to="/project/appetizers">Закуски</Link></li>
                <li><Link to="/project/salads">Салати</Link></li>
                <li><Link to="/project/soups">Супи</Link></li>
                <li><Link to="/project/main-courses">Головні страви</Link></li>
                <li><Link to="/project/bakery">Випічка</Link></li>
                <li><Link to="/project/desserts">Десерти</Link></li>
                <li><Link to="/project/drinks">Напої</Link></li>
                <li><Link to="/project/liked">Улюблене</Link></li>
            </ul>
		</nav>
    )
}
export default VerticalMenu