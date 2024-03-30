import { Component } from 'react'
import Producto from './Producto'


class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props

    return (
      <div className='row gap-4 gap-sm-5 gap-lg-4  mx-auto justify-content-center' >
      {productos.map(producto =>
        <Producto
        agregarAlCarro={agregarAlCarro}
        key={producto.name}
        producto={producto}/>)}

      </div>
    )
  }
}

export default Productos
