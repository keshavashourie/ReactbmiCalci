import React, { Component } from 'react';
import './App.css';
import Calculate from './Calculate.js';


class BmiCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weight:20,
            height:140,
            val:false,
            bmi : 0
         }
         this.handleClick = this.handleClick.bind(this);
         this.handleweightChange = this.handleweightChange.bind(this);
         
    }
    
    handleweightChange(event)
    {
       this.setState({
         [event.target.name] : event.target.value  
       })
    }

    handleClick(event)
    {
        var squaredHeight = this.state.height * this.state.height;
        this.setState({bmi: this.state.weight / squaredHeight});
        event.preventDefault();
    }

    render() { 
        return ( 
            <div>
                <form className="form-center" id="myform">
                    <input type="text" placeholder="weight in kg" className="center" name="weight" onChange={this.handleweightChange}/>
                    <br/>
                    <br/>
                    <input type = "text" placeholder = "height in meter" className="center" name="height" onChange={this.handleweightChange}/>
                    <br/>
                    <br/>
                 <button type="submit" className="buttoncss" onClick = {this.handleClick}>Calculate Bmi</button>
                {this.state.bmi !==0 ? (<Calculate
                                        bmi =  {this.state.bmi}
                                        /> )
                                  : null}
                </form>
            </div>
         );
    }
}
 
export default BmiCalculator;