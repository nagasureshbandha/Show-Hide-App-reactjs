import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFistName: false, isLastName: false}
  showFirstName = () => {
    this.setState(prevState => ({isFistName: !prevState.isFistName}))
  }
  showLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }
  render() {
    const {isFistName, isLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="row">
          <div className="button-container">
            <button className="button" type="type" onClick={this.showFirstName}>
              Show/Hide FirstName
            </button>
            {isFistName && <p className="name">Joe</p>}
          </div>

          <div className="button-container">
            <button className="button" type="type" onClick={this.showLastName}>
              Show/Hide LastName
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
