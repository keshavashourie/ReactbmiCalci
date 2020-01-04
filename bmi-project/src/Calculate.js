import React, { Component } from 'react';
import happypng from './assets/happy.png';
import obese from './assets/obese.png';
import overweight from './assets/overweight.png';
import underweight from './assets/underweight.png';
import './App.css';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.callme = this.callme.bind(this);
    }
    callme(bmi)
    {
        var val ;
        if (bmi < 18.5) {
            val = "Under Weight";
            return val;
        }
        else if ((bmi >= 18.5) && (bmi < 25)) {
            val = "Normal Weight";
            return val ;
        }
        else if ((bmi >= 25) && (bmi < 30)) {
            val = "Over Weight";
            return val;
        }
        else {
            val = "Obese";
            return val;
        }
    }

    callimgFunc(img)
    {
        var image;
        if(img == "Normal Weight")
        {
            image = happypng;
            return image;
        }

        if(img == "Under Weight")
        {
            image = underweight;
            return image;
        }

        if(img == "Over Weight")
        {
            image = overweight;
            return image;
        }

        if(img == "Obese")
        {
            image = obese;
            return image;
        }
    }
   
    render() { 
        var value = this.callme(this.props.bmi);
        var img   = this.callimgFunc(value);
        return ( 
            <div className="tablecss">
                <br/>
                <table>
                    <tr>
                        <img src = {img} alt="image" style={{width:"300px"}}/>
                    </tr>
                    <tr>
                            <h4>{value}</h4>
                    </tr>
                    <br/>
                </table>
            </div>
         );
    }
}
 
export default Calculate;