import {Component} from 'react';

import './index.css';

class Welcome extends Component{
  state={
    isSubscribed:true
  }
  onToggleValue = ()=>{
    this.setState(prevState=>({
      isSubscribed:!prevState.isSubscribed
    }))
  }

  render(){
    const {isSubscribed} = this.state

    return(
      <div className='welcome-container'>
        <h1 className='welcome-heading'>Welcome</h1>
        <p className='welcome-description'>Thank you! Happy Learning</p>
        <button onClick={this.onToggleValue} className='subscribe-btn'>
          {isSubscribed? "Subscribed":"Subscribe"}
        </button>
      </div>
    )
  }
}

export default Welcome;
