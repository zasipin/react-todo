import React from 'react';
import {Link} from 'react-router';

export class Login extends React.Component {
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
                            <button className="button">Login with Github</button>
                        </div>
                    </div>
                </div>
                <Link to="todos">To Todos</Link>
            </div>    
        );
    }

}

export default Login;