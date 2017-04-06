import React from 'react';
import {Link} from 'react-router';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Login extends React.Component {

    onLogin(){
        var {dispatch} = this.props;
        dispatch(actions.startLogin());
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>
                                Login with github account below.
                            </p>
                            <button className="button" onClick={(e) => {this.onLogin()}}>Login with Github</button>
                        </div>
                    </div>
                </div>
                <Link to="todos">To Todos</Link>
            </div>    
        );
    }

}

export default Redux.connect()(Login);