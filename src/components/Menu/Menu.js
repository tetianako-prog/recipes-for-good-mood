import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import axios from 'axios';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  useEffect(
    () =>
      axios
        .get('https://60ae79925b8c300017dea964.mockapi.io/api/categories')
        .then(response => setCategories(response.data))
        .catch(err => console.log(err)),
    [],
  );
  return (
    <nav>
      <Container>
        <ul className={styles.menu}>
          {categories.length > 0 &&
            categories.map(category => (
              <li className={styles.item} key={category.type}>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={`/${category.type}`}
                >
                  {' '}
                  {category.title}
                </NavLink>
              </li>
            ))}

          <li className={styles.item} key="liked">
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to="/liked"
            >
              Улюблене
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Menu;

// class Menu extends Component {
//   state = {
//     categories: [],
//   };
//   componentDidMount() {
//     axios
//       .get('https://60ae79925b8c300017dea964.mockapi.io/api/categories')
//       .then(response => this.setState({ categories: response.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     const { categories } = this.state;
//     return (
//       <nav>
//         <Container>
//           <ul className={styles.menu}>
//             {categories.length > 0 &&
//               categories.map(category => (
//                 <li className={styles.item} key={category.type}>
//                   <NavLink
//                     className={styles.link}
//                     activeClassName={styles.active}
//                     to={`/${category.type}`}
//                   >
//                     {' '}
//                     {category.title}
//                   </NavLink>
//                 </li>
//               ))}

//             <li className={styles.item} key="liked">
//               <NavLink
//                 className={styles.link}
//                 activeClassName={styles.active}
//                 to="/liked"
//               >
//                 Улюблене
//               </NavLink>
//             </li>
//           </ul>
//         </Container>
//       </nav>
//     );
//   }
// }

// export default Menu;
