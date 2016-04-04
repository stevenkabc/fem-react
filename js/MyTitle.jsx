const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({
  propTypes: {
    color: React.PropTypes.number,
    title: React.PropTynnnpes.string
  },
  render: function () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>!
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
