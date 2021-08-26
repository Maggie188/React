import React from 'react';

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
                {this.state.language}
            </div>
        )
    }
}

export default App;