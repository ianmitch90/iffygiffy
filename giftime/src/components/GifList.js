import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTheGifs} from '../actions'

class GifList extends Component {
  componentDidMount(){
    this.props.dispatch( fetchTheGifs() )
  }
  render(){
    return <div>
      <span>
      {this.props.gifs.length} Gif(s)
      </span>
      <div className='gifContainer'>
      {this.props.gifs.map( g => {
        return <img key={g._id} src={g.url} alt= 'oops wheres dat img?' />
      })}
      </div>

    </div>
  }
}

const mapStateToProps = ( state => {
  return {
    loading: state.loading,
    gifs: state.gifs,
    user: state.user
  }
})

export default connect(mapStateToProps)(GifList)
