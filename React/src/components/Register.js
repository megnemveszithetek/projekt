import React from 'react'

function Register() {
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
              <form className="membership-form webform" role="form">
                  <input type="text" className="form-control rounded" name="name" placeholder="Nagy Lajos"/>
  
                  <input type="email" className="form-control rounded" name="email" placeholder="nagylajos@gmail.com"/>
   
                  <input type="password" className="form-control rounded" name="password" placeholder="Jelszó" />
  
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