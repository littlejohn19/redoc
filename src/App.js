import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {RedocStandalone} from 'redoc';

class App extends Component {
    render() {
        return (
            <div className="dream-redoc">
                <RedocStandalone specUrl="http://rebilly.github.io/RebillyAPI/openapi.json"
                                 options={{
                                     nativeScrollbars: true,
                                     theme: {colors: {primary: {main: '#dd5522'}}},
                                 }}/>
            </div>
        );
    }
}

export default App;
