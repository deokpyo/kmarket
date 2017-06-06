import React from 'react'
import { Items } from '../containers'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>E-GARAGE SALE</h3>
                        <ul className="collection">
                            <li className="collection-item red-text">
                                Please include the information below along with your inquiry in the email. If any field is missing, your email will be ignored. Thank you!</li>
                            <li className="collection-item"> Item Name(s) and ID(s):<br />
                                Name: <br />
                                Phone Number: <br />
                                </li>
                        </ul>
                </div>
                <hr/>
                <div className="row">
                    <Items />
                </div>
            </div>
        )
    }
}

export default Home