import React, { Component } from 'react'
import "./info.css"

export class Info extends Component {
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    deleteInfo=()=>
    {
        this.props.deleteInfo(this.props.index)
    }

    render() {
        return (
        <div>
            <button className="btn btn-primary btn-Info" onClick={this.deleteInfo}>{this.props.infoData}</button>
        </div>
        )
    }
}

export default Info
