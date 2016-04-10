const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
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
      handleSearchTermChange (searchTerm) {
        this.setState({ searchTerm: searchTerm })
      },
      render { return ( <div> ... </div )}
  */
  constructor (props) {
    super(props)
//    console.log(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm: searchTerm})
  }
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
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
