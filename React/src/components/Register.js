import React from 'react'
import axios from 'axios';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Register() {
  const [knev, setknev] = useState('');
  const [vnev, setvnev] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [szuldate, setSzuldate] = useState('');
  const [neme, setNeme] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const sendAdat = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/register', {
        vnev: vnev,
        knev: knev,
        email: email,
        pass: pass,
        szuldate: szuldate,
        neme: neme
      });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  console.log(email);
  return (
    <div className="modal fade" id="regisztracio" tabindex="-1" role="dialog" aria-labelledby="reg" aria-hidden="true">
      <div className="modal-dialog" role="document">

        <div className="modal-content">
          <div className="modal-header">

            <h2 className="modal-title" id="reg">Regisztráció</h2>

            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form className="membership-form webform" role="form" onSubmit={sendAdat}>
              <h5 className="modal-title" id="reg">Vezeték név: </h5>
              <input type="text" className="form-control rounded" name="vnev" placeholder="Gipsz" value={vnev} onChange={(e) => setvnev(e.target.value)} />

              <h5 className="modal-title" id="reg">Kereszt név: </h5>
              <input type="text" className="form-control rounded" name="knev" placeholder="Jakab" value={knev} onChange={(e) => setknev(e.target.value)} />

              <h5 className="modal-title" id="reg">E-mail cím: </h5>
              <input type="email" className="form-control rounded" name="email" placeholder="valaki@valami.com" value={email} onChange={(e) => setEmail(e.target.value)} />

              <h5 className="modal-title" id="reg">Jelszó: </h5>
              <input type="password" className="form-control rounded" name="password" placeholder="*******" value={pass} onChange={(e) => setPass(e.target.value)} />

              <h5 className="modal-title" id="reg">Születési dátum</h5>
              <input type="date" className="form-control rounded" name="szuldate" value={szuldate} onChange={(e) => setSzuldate(e.target.value)} />

              <h5 className="modal-title" id="reg">Nemed: </h5>
              <select className="form-control rounded">
                <option className="form-control rounded" value={0} onChange={(e) => setNeme(e.target.value)} >Nő</option>
                <option className="form-control rounded" value={1} onChange={(e) => setNeme(e.target.value)} >Férfi</option>
              </select>

              <button type="submit" className="className-info rounded" id="submit-button" name="submit" data-toggle="modal" data-target="#bejelentkezes" data-dismiss="modal">Regisztrálás</button>


            </form>
          </div>

          <div className="modal-footer"></div>

        </div>
      </div>
    </div>
  )
}

export default Register