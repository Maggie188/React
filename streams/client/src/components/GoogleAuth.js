import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: '30931184890-kt11hfoa569n2kb5dsrld581l5dhsu92.apps.googleusercontent.com',
                    scope: 'email'
                });
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;