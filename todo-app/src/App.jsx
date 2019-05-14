import React, { Component } from 'react'
import InputInfo from './input/InputInfo';
import List from './List/List';

export class App extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            ListInfo : [],
            info : []
        }
    }

    addInfo = async(info)=>
    {
        await this.setState({
            info 
        })
        await this.setState({
            ListInfo : this.state.ListInfo.concat(info)
        })
        console.log(this.state.ListInfo)
    }  

    deleteInfo= async(index)=>{
        let arrInfo = [...this.state.ListInfo]
        arrInfo.splice(index,1)
        this.setState({
            ListInfo : arrInfo
        })
    }
    
    render() { 

    return (
      <div>
        <InputInfo addInfo={this.addInfo}/>
        <List deleteInfo={this.deleteInfo} ListInfo={this.state.ListInfo}/>
      </div>
    )
  }
}

export default App
