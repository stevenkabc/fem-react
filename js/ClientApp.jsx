const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')

// const ReactRouter = require('react-router')
// const { Router, Route, hashHistory} = ReactRouter
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory
const { Router, Route, hashHistory } = require('react-router')
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>

)

ReactDOM.render(<App />, document.getElementById('app'))
