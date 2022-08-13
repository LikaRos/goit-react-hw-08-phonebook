import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import styles from 'views/Views.module.css';
import { useState } from 'react';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страницы логина</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Пароль
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}
