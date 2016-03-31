var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')



var MyFirstComponent = () =>  (
		<div>
			<MyTitle title='whatever' color='purple' />
			<MyTitle title='LOL' color='blue' />
			<MyTitle title='OMG' color='#f06d06' />
		</div>

)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
