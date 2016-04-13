/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { store, rootReducer } = require('../js/Store')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')

xdescribe('<Search />', () => {
  it('should pass', () => {
    const wrapper = shallow(<Search />)
  // c onsole.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render mulitple ShowCards; one per Data', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter state correctly', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})
    expect(state).to.deep.equal({searchTerm: ''})
  })
  it('should handle setSearchTerm action', () => {
    const state = rootReducer({searchTerm: 'some state'}, { type: 'setSearchTerm', value: 'correct string' })
    expect(state).to.deep.equal({searchTerm: 'correct string'})
  })
})
