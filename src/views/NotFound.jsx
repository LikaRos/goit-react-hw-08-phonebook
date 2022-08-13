import { Link } from 'react-router-dom';
import styles from 'views/Views.module.css';

export default function NotFound() {
  return (
    <div className={styles.menu}>
      <p className={styles.text}>
        Page now found, you should <span> </span>
        <Link to="/goit-react-hw-08-phonebook/login"> LOGIN</Link>
      </p>
    </div>
  );
}
