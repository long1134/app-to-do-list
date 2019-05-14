import React, { Component } from 'react'
import Info from './info/info';

export class List extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            
        }
    }

    deleteInfo=(index)=>{
        this.props.deleteInfo(index)
    }

    displayInfo = ()=>{
        const ArrInfo = this.props.ListInfo
        if(ArrInfo)
        return ArrInfo.map((infoData, index)=>{
           return (<Info key={index} index={index} deleteInfo={this.deleteInfo} infoData={infoData}/>)
        })
    }
    
    render() {
        return (
        <div>
            <this.displayInfo />
        </div>
        )
    }
}

export default List
