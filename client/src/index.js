import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import store from './store/index';
import App from './components/App';
import Home from './components/Home';
import Info from './components/Info';
export const history = createBrowserHistory();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App>
                        <Switch>
                            <Route
                                exact
                                path={[
                                    `/`,
                                    `/home`,
                                ]}
                                component={Home}
                            />
                            <Route
                                exact
                                path={`/info/:hash`}
                                component={Info}
                            />
                        </Switch>
                    </App>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root')
);
