import React, { Component } from 'react'
import routes from './routes'
import { Route } from 'react-router-dom'
import NavBar from './Navbar';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div>
                SSR with react
                <Navbar/>
                {routes.map(({ path, exact, component: C, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={(props) => (
                            <C {...props} {...rest} />
                        )}
                    />
                ))}
            </div>
        )
    }
}
export default App;
