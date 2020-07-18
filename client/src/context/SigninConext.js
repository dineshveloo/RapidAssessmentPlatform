import React from 'react';

const SigninConext = React.createContext({
    authenticated: false,
    login: () => { }
});

export default SigninConext;