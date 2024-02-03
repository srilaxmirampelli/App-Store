// Write your code here
import './index.css'

import {Component} from 'react'

class TabItem extends Component {
  displayTabItemApps = () => {
    const {tabDetails, onClickTabButton} = this.props
    const {tabId} = tabDetails
    onClickTabButton(tabId)
  }

  render() {
    const {tabDetails, isActive} = this.props
    const {displayText} = tabDetails
    return (
      <li className="tab-item">
        <button
          onClick={this.displayTabItemApps}
          className={`default-tabitem-btn ${
            isActive ? 'active-tabitem-btn' : ''
          }`}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
