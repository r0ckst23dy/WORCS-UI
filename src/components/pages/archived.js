import React, { Component } from "react";
import axios from "axios";

import WorkOrder from "../workOrder";

let source 

class Archived extends Component { 
    constructor() {
        super(); 

        this.state = {
            data: []

        }

        source = axios.CancelToken.source();

        this.getReviewedWorkOrders = this.getReviewedWorkOrders.bind(this);
        this.reviewedWorkOrders = this.reviewedWorkOrders.bind(this);
    }


    getReviewedWorkOrders() { 
        axios.get("https://jtl-worcs-backend.herokuapp.com/orders", { CancelToken: source.token }
            ).then(response => {
                this.setState({ 
                    data: response.data.filter(status => {
                        return status.reviewed === true;
                    })
                });

            }).catch(error => {console.log("error with getArchivedWorkOrders", error);}) 

    }

    reviewedWorkOrders() { 
        return this.state.data.map(order => {
            return<WorkOrder key={order._id} item={order} title={order.title} priority={order.priority} assignmentSummary={order.assignmentSummary}/>
        })
    }

    componentDidMount() { 
        this.getReviewedWorkOrders();
    }

    componentWillUnmount() { 
        if (source) {
            source.cancel("WorkOrder Component Unmounted")
        }
    }
    
    
    render() { 
        return (
            <div>
                {this.reviewedWorkOrders()}
            </div>
        )
    }
}

export default Archived;