import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, 
    Interview, BrandMeetUp, Column, SeriesJournal, 
    CQuestion, GOversea, Conference, Stores, Store, 
    Contactus, 
    SignInPage, SignUpPage, ForgetPasswordPage } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>

                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>

                <Route path="/login" component={SignInPage} />
                <Route path="/register" component={SignUpPage} />
                <Route path="/forget-password" component={ForgetPasswordPage} />

                <Route path="/posts" component={Posts}/>
                <Route path="/interview/:interviewId" component={Interview}/>
                <Route path="/brandmeetup/:brandmeetupId" component={BrandMeetUp}/>
                <Route path="/column/:columnId" component={Column}/>
                <Route path="/seriesjournal/:seriesjournalId" component={SeriesJournal}/>
                <Route path="/cquestion/:cquestionId" component={CQuestion}/>
                <Route path="/goversea/:goverseaId" component={GOversea}/>
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