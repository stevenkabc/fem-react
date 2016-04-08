const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

class Search extends React.Component {
  /*
    const Search = React.createClass({
      getInitialState () {
        return {
          searchTerm: 'Inital State'
        }
      }, //PROPTYPES FOR CREATECLASS() VERSION
      propTypes: {
        shows: arrayOf(object)
      },
      handleSearchTermEvent (event) {
        this.setState({ searchTerm: event.target.value})
      },
      render { return ( <div> ... </div )}
  */
  constructor (props) {
    super(props)
    console.log(props)
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
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
            .includes(this.state.searchTerm.toUpperCase()))
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

Search.propTypes = {
  route: object
}
module.exports = Search
