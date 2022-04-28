import React from 'react'

function Login() {
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
                        <form className="membership-form webform" role="form">
                            <input type="text" className="form-control rounded" name="name" placeholder="Nagy Lajos"/>      
                            <input type="password" className="form-control rounded" name="password" placeholder="Jelszó"/>
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