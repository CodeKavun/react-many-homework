import './App.css';
import React, {useState} from 'react';

// function Button(props) {
//   const btnClickHandler = () => {
//     props.onBtnClick(props.bgColor, props.fgColor);
//   }
//   return(
//     <button className="Button" style={{ backgroundColor: props.bgColor, color: props.fgColor, height: "30px"}} onClick={btnClickHandler}>{props.text}</button>
//   );
// }

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const btnClickHandler = () => {
      this.props.onBtnClick(this.props.bgColor, this.props.fgColor);
    }
    return (
      <button className="Button" style={{ backgroundColor: this.props.bgColor, color: this.props.fgColor, height: "30px"}} onClick={btnClickHandler}>{this.props.text}</button>
    );
  }
}

class ColorChanger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: "red",
      fgColor: "green"
    };
  }

  render() {
    const stateFunc = (newBGColor, newFGColor)=>{
      this.setState({ bgColor: newBGColor, fgColor: newFGColor });
    }

    return (
      <>
      <Button bgColor="red" fgColor="green" text="Red" onBtnClick={stateFunc}></Button>
      <Button bgColor="green" fgColor="red" text="Green" onBtnClick={stateFunc}></Button>
      <Button bgColor="yellow" fgColor="blue" text="Yellow" onBtnClick={stateFunc}></Button>
      <div className="DisplayBlock" style={{ backgroundColor: this.state.bgColor, color: this.state.fgColor }}>Some dummy text block</div>
      </>
    )
  }
}

function App() {
  return (
    <>
    <ColorChanger></ColorChanger>
    </>
  );
}

export default App;
