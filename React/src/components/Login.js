import React from 'react'
import axios from 'axios';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const sendAdat = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/login', {
                email: email,
                pass: password
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="modal fade" id="bejelentkezes" tabindex="-1" role="dialog" aria-labelledby="membershipFormLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="membershipFormLabel">Bejelentkezés</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="membership-form webform" role="form" onSubmit={sendAdat} >
                            <input type="email" className="form-control rounded" name="name" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" className="form-control rounded" name="password" placeholder="Jelszó" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit" className="className-info rounded" id="submit-button" name="login">Bejelentkezés</button>
                        </form>
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    )
}
export default Login