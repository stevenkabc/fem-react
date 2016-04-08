const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data.json')

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
//    console.log('ID*****',nextState.id,'*****\n\n','nextState', nextState,'\n' + 'showArray', showArray)
    if (showArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing}/>
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
        </Route>
      </Router>
    )
  }
})
ReactDOM.render(<App />, document.getElementById('app'))
