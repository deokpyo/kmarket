import React from 'react'
import { APIManager } from '../../utils'

class Items extends React.Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        APIManager.get('/api/item', null, (err, response) => {
            if (err) {
                console.log(JSON.stringify(err))
                return
            }
            //console.log('Items: ' + JSON.stringify(response.results))
            this.setState({
                items: response.results
            })
            console.log(this.state)
        })
    }
    render() {
        const items = this.state.items
        return (
            <div className="col s12">
                <h4>Item Listing</h4>
                {
                    items.map((item, i) => {
                        return (
                            <div className="card horizontal" key={item._id} >
                                <div className="card-image" style={{maxWidth: "30%"}}>
                                    <a href={"assets/images/" + item.image} target="_blank" ><img style={{ opacity: 0.7}} src={"assets/images/" + item.image} /></a>
                                    <span className="card-title" style={{background: "rgba(0,0,0,0.5)", right: 0, padding: "10px", textAlign: "center"}}>{item.price}</span>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" style={{padding: 10}}>
                                        <ul>
                                            <li><h5>{item.title} - <small> ITEM ID: {item._id.slice(0, 8)}</small></h5></li>                                    
                                            <li><strong>DETAILS: </strong>{item.condition} Condition and {item.type}</li>
                                            <li><strong>PICK-UP LOCATIONS: </strong> {item.location}</li>
                                            <li><strong>OTHER INFORMATION: </strong>{item.description}</li>
                                            </ul>
                                    </div>
                                    <div className="card-action center-align">
                                        <a href="mailto:egaragesale.info@gmail.com">Interested</a>
    
                                    </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Items