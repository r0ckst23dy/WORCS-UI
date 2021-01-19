import React, { Component } from "react";
import axios from "axios";

import WorkOrder from "../workOrder";
 
let source

class Completed extends Component { 
    constructor() {
        super(); 

        this.state = {
            data: []
        }

        source = axios.CancelToken.source();

        this.getCompletedWorkOrders = this.getCompletedWorkOrders.bind(this);
        this.completedWorkOrders = this.completedWorkOrders.bind(this);
    }

    getCompletedWorkOrders() { 
        axios.get("https://jtl-worcs-backend.herokuapp.com/orders",  
            ).then(response => {
                this.setState({ 
                    data: response.data.filter(status => {
                        return status.completed === true;
                    })
                });
            }).catch(error => {console.log("error with getcompletedWorkOrders", error);}) 

    }

    completedWorkOrders() { 
        return this.state.data.map(order => {
            return<WorkOrder key={order._id} item={order} title={order.title} priority={order.priority} assignmentSummary={order.assignmentSummary}/>
        })
    }

    componentDidMount() { 
        this.getCompletedWorkOrders();
    }

    componentWillUnmount() { 
        if (source) {
            source.cancel("WorkOrder Component Unmounted")
        }
    }
    
    render() { 
        return(
            <div>
                {this.completedWorkOrders()}
            </div>
        )
    }
}

export default Completed;