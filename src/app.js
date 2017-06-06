import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/layout'

class App extends React.Component {
    render(){
        return (   
                    <Home />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))