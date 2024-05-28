import { Component } from "react";
import "./index.css"

class EvenOdd extends Component{
    state = {
        count:0
    }

    onIncrement = ()=>{
        this.setState(prevState=>({
            count:prevState.count + (Math.ceil(Math.random()*100)) // randomNumber
        }))
    }

    render(){
        const {count} = this.state
        const typeText = count % 2 === 0 ? 'Even':'Odd'

        return(
            <div className="even-odd-container">
                <div className="even-odd-card-container">
                    <h1>Count {count}</h1>
                    <p>Count is {typeText}</p>
                    <button onClick={this.onIncrement} className="incr-btn">
                        Increment
                    </button>
                    <p>*Increase By Random Number Between 0 to 100</p>
                </div>
            </div>
        )
    }
}


export default EvenOdd