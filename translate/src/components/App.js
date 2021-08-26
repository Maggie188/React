import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
   state = { language: 'english' };

   onLanguageChnage = language => {
       this.setState({ language })
   }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChnage('English')} />
                    <i className="flag nl" onClick={() => this.onLanguageChnage('Dutch')}/>
                </div>
                <UserCreate />
            </div>
        )
    }
}

export default App;