import { Component } from "react";
import './index.css'

class ShowHide extends Component{
    state={
        showFirstName:false,
        showLastName:false
    }

    onToggleShowFname = ()=>{
        this.setState(prevState=>(
            {
                showFirstName:!prevState.showFirstName
            }
        ))
    }

    onToggleShowLname = ()=>{
        this.setState(prevState=>(
            {
                showLastName:!prevState.showLastName
            }
        ))
    }

    render(){
        const {showFirstName,showLastName} = this.state
        return(
            <div className="show-hide-container">
                <h1 className="show-hide-heading">Show Hide</h1>
                <div className="show-hide-btn-container">
                    <div className="name-container" >
                        <button onClick={this.onToggleShowFname} className="show-hide-button">Show/Hide Firstname</button>
                        {showFirstName && <p className="name">Joe</p>}
                    </div>
                    <div className="name-container" >
                        <button onClick={this.onToggleShowLname} className="show-hide-button">Show/Hide Lastname</button>
                        {showLastName && <p className="name">Jonahs</p>}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ShowHide