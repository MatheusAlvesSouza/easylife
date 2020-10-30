import React from 'react';
import { isAuthenticated } from '~/services/auth';
import { BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';

import NavBar from '~/components/NavBar';

import Home from '~/pages/Home/Home';
import SignIn from '~/pages/SignIn/SignIn';
import SignUp from '~/pages/SignUp/SignUp';
import Search from '~/pages/Search/Search';
import Feedback from '~/pages/Feedback/Feedback';
import SearchDetails from '~/pages/SearchDetails/SearchDetails';

const PrivateRoute = ({ component: Componet, ...rest}) => (
    <Route 
        {...rest}
        render={ props => 
        isAuthenticated() 
        ? ( <div> <NavBar/> <Componet {...props} /> </div>)
        : (<Redirect to={{pathname: '/', state: { from: props.location}}}/>)
    }/>
);

const PublicRoute = ({ component: Componet, ...rest}) => (
    <Route  {...rest}
        render={ props => ( <div> <NavBar default={true} /> <Componet {...props} /> </div>)
    }/>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" >
                {
                isAuthenticated()  
                ? <Redirect to="/home" /> 
                :<PublicRoute exact path="/" component={SignIn}/>}
            </Route>
            <PublicRoute exact path="/signUp" component={SignUp}/>
            <PrivateRoute path="/home" component={Home}/>
            <PrivateRoute path="/search/:address?" component={Search}/>
            <PrivateRoute path="/searchDetails/:id" component={SearchDetails}/>
            <PrivateRoute path="/feedback/:id" component={Feedback}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;