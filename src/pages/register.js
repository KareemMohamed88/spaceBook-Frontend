import React from 'react';
import Axios from "axios"
import { useState, useEffect } from 'react';
import styles from '../styles/forms.module.css'
const Register = () => {

    const api = "http://localhost:5000";
    const [users, setUsers] = useState([]);
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    useEffect(() => {
        Axios.get(`${api}/users`).then(res => { setUsers(res.data) })
    }
        , [users])

    const createUser = () => {
        Axios.post(`${api}/createUser`, { username: username, email: email, password: password }).then(res => {
            console.log(res.data)
        })
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2>
                        register
                    </h2>
                    <form>
                        <div className={styles.userBox}>
                            <label>
                                <h4>username</h4>
                                <input onChange={e => setName(e.target.value)} type="text" />
                            </label>
                        </div>
                        <div className={styles.userBox}>
                            <label>
                                <h4>email</h4>
                                <input onChange={e => setEmail(e.target.value)} type="email" />
                            </label>
                        </div>
                        <div className={styles.userBox}>
                            <label>
                                <h4>password</h4>
                                <input onChange={e => setPass(e.target.value)} type="password" />
                            </label>
                        </div>
                        <button onClick={createUser} type="submit" name="submit">register</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;
