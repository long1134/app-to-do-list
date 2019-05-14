import React, { Component } from 'react'
import "./InputInfo.css"

export class InputInfo extends Component {
  
    constructor(props)
    {
        super(props)
        this.state = {
            info : ""
        }
    }
    addData=()=>{
        this.props.addInfo(this.state.info)
        this.setState({
            info:""
        })
    }

    handleInfo= async(event)=>{
        await this.setState({
            info :event.target.value
        })
        // console.log(this.state.info)
    }

    render() {
    return (
      <div>
        <div className="input-group mb-3 inputInfo">
            <input type="text" className="form-control" value={this.state.info} onChange={this.handleInfo} placeholder="Info" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary " onClick={this.addData} type="button" id="button-addon2">Button</button>
            </div>
        </div>
      </div>
    )
  }
}

export default InputInfo
