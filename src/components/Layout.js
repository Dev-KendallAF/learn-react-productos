import { Component } from 'react'


class Layout extends Component {
  render() {
    return (
      <div className='container my-5 '>
       
          {this.props.children}
       
      </div>
    )
  }
}

export default Layout
