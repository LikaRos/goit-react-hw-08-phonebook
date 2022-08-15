import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { getToken } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const accessToken = useSelector(getToken);
  return (
    <nav>
      <ul className={styles.link}>
        <li>
          <NavLink
            to="/"
            state={location}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        {accessToken ? (
          <li>
            <button onClick={() => dispatch(logOut())}>Logout</button>
            <h2>Добро пожаловать в контакты</h2>

            <NavLink
              to="/contacts"
              state={location}
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Contacts
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              {' '}
              <NavLink
                to="/register"
                state={location}
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.link
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                state={location}
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.link
                }
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
