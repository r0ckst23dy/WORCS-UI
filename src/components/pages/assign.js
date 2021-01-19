import React, { Component } from "react";
import axios from "axios";

import WorkOrder from "../workOrder";

let source 


class Assign extends Component { 
    constructor() {
        super(); 

        this.state = {
            data: []

        }

        source = axios.CancelToken.source()

        this.requestedWorkOrders = this.requestedWorkOrders.bind(this);
        this.getRequestedWorkOrders = this.getRequestedWorkOrders.bind(this);
    }


    getRequestedWorkOrders() { 
        axios.get("https://jtl-worcs-backend.herokuapp.com/orders", { CancelToken: source.token }  
            ).then(response => {
                this.setState({ 
                    data: response.data.filter(status => {
                        return status.current === true;
                    })
                });
            }).catch(error => {console.log("error with getReguestedWorkOrders", error);}) 

    }

    requestedWorkOrders() { 
        return this.state.data.map(order => {
            return<WorkOrder key={order._id} item={order} title={order.title} priority={order.priority} assignmentSummary={order.assignmentSummary}/>
        })
    }

    componentDidMount() { 
        this.getRequestedWorkOrders();
        console.log("WorkOrder Component Mounted");
    }

    componentWillUnmount() { 
        if (source) {
            source.cancel("WorkOrder Component Unmounted")
        }
    }



    render() { 
        return(
            <div>
                {this.requestedWorkOrders()}
            </div>
        )
    }
}

export default Assign;