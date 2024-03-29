import React from 'react';

class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log('Log: ' + this.state.value);
    this.setState({ value: this.props.initialValue || '' });
    event.preventDefault();
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Log:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>);
  }
}

export default LogForm;