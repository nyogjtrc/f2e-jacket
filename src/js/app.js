import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

import '../css/app.css'

const Home = () => (
  <div>
    <h2>Home</h2>
    <DropdownExampleSimple />
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 }
]

const DropdownExampleSimple = () => (
  <div className="sample">
    <Menu compact>
      <Dropdown text="Dropdown" options={options} simple item />
    </Menu>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App
