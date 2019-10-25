import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
      const text = this.state.isToggleOn ? 'ON' : 'OFF';
    if (this.props.useColor) {
        const buttonClass = this.state.isToggleOn ? 'green' : 'red';
        return (<button onClick={this.handleClick} className={buttonClass}> 
            {text}
        </button>);
    }
    else
    {
        return (<button onClick={this.handleClick}>{text}</button>);
    }
  }
}

export default Toggle;