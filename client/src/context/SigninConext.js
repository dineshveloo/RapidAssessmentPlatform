import React from 'react';

const SigninContext = React.createContext({
    authenticated: 'true',
    login: () => { }
});

export default SigninContext;