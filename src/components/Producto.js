import { Component } from 'react'
import Button from './Button'
const styles = 
{
  producto:
  {
    background: '#e0e0e0',
    boxShadow:  '10px 15px 10px #bebebe',
    textAlign: 'center',
    borderRadius: '10px',
    marginBottom: '1em',
  },
  contenedorImg:
  {
    width: '100%',
    height: '100',
    
  },
  img:
  {
    width: '100%',
    height: 'auto',
    objectFit:'contain',
    filter: 'drop-shadow(4px 6px 12px #11111190)',

  },
}

class Producto extends Component{
  render()  {
    const {producto, agregarAlCarro} = this.props

    // Formatear el número con separadores de mil y el símbolo de moneda
    var precioF = producto.price.toLocaleString('es-CR', { style: 'currency', currency: 'CRC' });

   return(
    <div className='col-12 col-sm-5 col-lg-3 p-4  d-flex align-items-start flex-column' style={styles.producto}>
      <div style={styles.contenedorImg} className='mx-auto '>
        <img style={styles.img}  src={producto.img}  alt={producto.name}/>
      </div>
      <h4 className='text-start pt-2'>{producto.name}</h4>
      <p className='text-start text-bold text-secondary text-sm'>{precioF}</p>

      <div className='mt-auto w-100' style={styles.compra}>
        <Button  onClick={()=>agregarAlCarro(producto)}>Agregar al Carro</Button>  
      </div>
    </div>
   ) 
  }
}

export default Producto

