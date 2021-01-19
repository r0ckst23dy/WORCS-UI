import React, { Component } from "react";
import axios from "axios";

import WorkOrder from "../workOrder";

let source 

class Current extends Component { 
    constructor() {
        super(); 

        this.state = {
            data: []
            
        }

        source = axios.CancelToken.source();

        this.getCurrentWorkOrders = this.getCurrentWorkOrders.bind(this);
        this.currentWorkOrders = this.currentWorkOrders.bind(this);
    }


    getCurrentWorkOrders() { 
        axios.get("https://jtl-worcs-backend.herokuapp.com/orders", { CancelToken: source.token })
             .then(response => {
                 this.setState({ 
                     data: response.data.filter(status => {
                         return status.assigned === true;
                     })
                 })
            }).catch(error => {console.log("error with getCurrentWorkOrders", error);}) 

    }

    currentWorkOrders() { 
        return this.state.data.map(order => {
            return<WorkOrder key={order._id} item={order} title={order.title} priority={order.priority} assignmentSummary={order.assignmentSummary}/>
        })
    }

    componentDidMount() { 
        this.getCurrentWorkOrders();
    }


    componentWillUnmount() { 
        if (source) {
            source.cancel("WorkOrder Component Unmounted")
        }
    }


    render() { 
        return(
            <div>
                {this.currentWorkOrders()}
            </div>
        )
    }
}

export default Current;