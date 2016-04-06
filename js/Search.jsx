const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

class Search extends React.Component {
  /*
    const Search = React.createClass({
      getInitialState () {
        return {
          searchTerm: 'Inital State'
        }
      },
      this.handleSearchTermEvent (event) {...}
      render { return ( <div> ... </div )}
  */
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  }
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} type='text' className='search-input' placeholder='Search' onChange={this.handleSearchTermEvent}/>
        </header>
        <div className='shows'>
          {data.shows
            .filter((show) =>
              `${show.title} ${show.description}`.toUpperCase()
              .includes(this.state.searchTerm.toUpperCase())
            )
            .map((show) => (
              <ShowCard {...show} key={show.imdbID}/>
              )
            )
          }
        </div>
      </div>
    )
  }
}
module.exports = Search
