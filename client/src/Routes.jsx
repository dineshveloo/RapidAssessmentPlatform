import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import EmailConfirmPage from './pages/EmailConfirmPage';
import RegistrationPage from './pages/RegistrationPage'
import PrivateRoute from "./private-route/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";
import HomePage from './pages/HomePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AccessManagementPage from './pages/AccessManagement';
import CaptureProcessPage from './pages/CaptureProcessPage';
import ViewProcessPage from './pages/ViewProcessPage';
import ProcessDiscoveryPage from './pages/ProcessDiscoveryPage';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' component={SigninPage} />
        <Route exact path='/emailConfirm' component={EmailConfirmPage} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/resetpassword' component={ResetPasswordPage} />
        <Route exact path='/accessmanagement' component={AccessManagementPage} />
        <Route exact path='/captureprocesspage' component={CaptureProcessPage} />
        <Route exact path='/viewprocess' component={ViewProcessPage} />
        <Route exact path='/rapidprocessdiscovery' component={ProcessDiscoveryPage} />
        <PrivateRoute exact path='/' component={Dashboard} />
       
        <Route exact path="/captureprocesspage" render={(props) => <CaptureProcessPage {...props} />} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />

      </Switch>

    );
  }
}


export default Routes;


