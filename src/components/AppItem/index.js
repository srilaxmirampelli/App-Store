// Write your code here
import './index.css'

import {Component} from 'react'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails
    return (
      <li className="app">
        <img src={imageUrl} alt={appName} className="app-img" />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
