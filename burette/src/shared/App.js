import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Interview, Conference, Stores, Store, Contactus } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
                <Route path="/interview/:interviewId" component={Interview}/>
                <Route path="/conference/" component={Conference}/>
                <Switch>
                    <Route path="/store/:storeId" component={Store}/>
                    <Route path="/store" component={Stores}/>
                </Switch>
                <Route path="/contact" component={Contactus}/>
            </div>
        );
    }
}

export default App;