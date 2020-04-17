import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    roomCount : 1,
    adultCount : 1,
    childCount : 0,
    availCount : 4,
    presentCount : 1
  }
  
  handleIncRoom = () => {
    let { roomCount, adultCount, childCount} = this.state;
    if(roomCount === adultCount && roomCount < 5 && childCount === 0) {
        this.setState({adultCount: this.state.adultCount + 1, roomCount: this.state.roomCount + 1})
    } else {
        this.setState({roomCount: this.state.roomCount + 1})
    }
    
  }
  handleDecRoom = () => {
    let { roomCount, adultCount, childCount} = this.state
    if(childCount < 4 && roomCount>1){
      this.setState({roomCount: this.state.roomCount - 1, childCount : 0,adultCount : ((this.state.roomCount-1)*4)})
    }
    else if(childCount > 4 && roomCount > 1)
    {
      this.setState({roomCount : this.state.roomCount - 1, childCount: this.state.childCount - 4})
    
    }
    else if(childCount === 4 && roomCount >1)
    {
      this.setState({roomCount : this.state.roomCount - 1})
    }
    else
    this.setState({roomCount : roomCount - 1})

    
    // if((adultCount+childCount)>=1 && (adultCount+childCount)<=4)
    // {
    //   this.setState({roomCount : 1})              
    // }
    // else if((adultCount+childCount)>=5 && (adultCount+childCount)<=8)
    // {
    //   this.setState({roomCount : 2})              
    // }
    // else if((adultCount+childCount)>=9 && (adultCount+childCount)<=12)
    // {
    //   this.setState({roomCount : 3})              
    // }
    // else if((adultCount+childCount)>=13 && (adultCount+childCount)<=16)
    // {
    //   this.setState({roomCount : 4})              
    // }
    // else if((adultCount+childCount)>=17 && (adultCount+childCount)<=20)
    // {
    //   this.setState({roomCount : 5})              
    // }
  }
  handleIncAdult = () => {
    let { roomCount, adultCount, childCount} = this.state;
    if(adultCount + childCount === roomCount * 4 && roomCount < 5) {
        this.setState({adultCount: this.state.adultCount + 1, roomCount: this.state.roomCount + 1})
    } else {
        this.setState({adultCount: this.state.adultCount + 1})

    }
  }
  handleDecAdult = () => {
    let { roomCount, adultCount, childCount} = this.state
    this.setState({adultCount : adultCount - 1})
    if((adultCount+childCount)>=1 && (adultCount+childCount)<=4)
    {
      this.setState({roomCount : 1})              
    }
    else if((adultCount+childCount)>=5 && (adultCount+childCount)<=8)
    {
      this.setState({roomCount : 2})              
    }
    else if((adultCount+childCount)>=9 && (adultCount+childCount)<=12)
    {
      this.setState({roomCount : 3})              
    }
    else if((adultCount+childCount)>=13 && (adultCount+childCount)<=16)
    {
      this.setState({roomCount : 4})              
    }
    else if((adultCount+childCount)>=17 && (adultCount+childCount)<=20)
    {
      this.setState({roomCount : 5})              
    }
  }
  handleIncChild = () => {
    let { roomCount, adultCount, childCount} = this.state;
    if(adultCount + childCount === roomCount * 4 && roomCount < 5) {
        this.setState({childCount: this.state.childCount + 1, roomCount: this.state.roomCount + 1})
    } else {
        this.setState({childCount: this.state.childCount + 1})

    }

  }
  handleDecChild = () => {
    let { roomCount, adultCount, childCount} = this.state
    this.setState({childCount : childCount - 1})
    if((adultCount+childCount)>=1 && (adultCount+childCount)<=4)
    {
      this.setState({roomCount : 1})              
    }
    else if((adultCount+childCount)>=5 && (adultCount+childCount)<=8)
    {
      this.setState({roomCount : 2})              
    }
    else if((adultCount+childCount)>=9 && (adultCount+childCount)<=12)
    {
      this.setState({roomCount : 3})              
    }
    else if((adultCount+childCount)>=13 && (adultCount+childCount)<=16)
    {
      this.setState({roomCount : 4})              
    }
    else if((adultCount+childCount)>=17 && (adultCount+childCount)<=20)
    {
      this.setState({roomCount : 5})              
    }
  }

  render() {
    let presentCount = this.state.adultCount + this.state.childCount;
    return (
      <div className="app">
        <div className="title">
          <label><i class="fas fa-users"></i>Choose number of <b>people</b></label>
        </div>
        <br></br>
        <div className="box">
          <div className="room">
              <label><i class="fas fa-bed"></i> ROOMS</label>
              <div className="buttons">
                    <button className='btn btn-decrease' onClick={this.handleDecRoom} disabled={this.state.roomCount===1} ><i id="minus" className="fas fa-minus"></i></button>
										<span id="spanroom" >{this.state.roomCount}</span>
										<button className='btn btn-increase' onClick={this.handleIncRoom} disabled={this.state.roomCount===5} ><i id="plus" className="fas fa-plus"></i></button>
              </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="adult">
              <label><i class="fas fa-user"></i> ADULTS</label>
              <div className="buttons">
                    <button onClick={this.handleDecAdult} className="btn btn-decrease" disabled={this.state.adultCount===this.state.roomCount} ><i id="minus" className="fas fa-minus"></i></button>
										<span id="spanadult" >{this.state.adultCount}</span>
										<button onClick={this.handleIncAdult} className="btn btn-increase" disabled={presentCount === 20} ><i id="plus" className="fas fa-plus"></i></button>
              </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="child">
              <label><i class="fas fa-child"></i> CHILDREN</label>
              <div className="buttons">
                    <button onClick={this.handleDecChild} disabled={this.state.childCount===0} className="btn btn-decrease"><i id="minus" className="fas fa-minus"></i></button>
										<span id="spanchild" >{this.state.childCount}</span>
										<button onClick={this.handleIncChild} disabled={presentCount===20} className="btn btn-increase"><i id="plus" className="fas fa-plus"></i></button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
