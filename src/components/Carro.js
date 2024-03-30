import React from "react";
import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'

const styles= 
{
    carro:
    {
        borderRadius: '25px',
        background: '#e0e0e0',
        boxShadow:  '20px 20px 60px #bebebe,-20px -20px 60px #ffffff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        padding: '0.7rem 1rem',
    },
    bubble:
    {
        position: 'relative',
        left:'3.5rem',
        bottom:'1.3rem'
    }
}

class Carro extends Component
{
    state = {
        mobile: false
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize(); // Llamar a la función al montar el componente para establecer el estado inicial
      }
      handleResize = () => {
        if (window.innerWidth < 576) {
          this.setState({ mobile: true });
        } else {
          this.setState({ mobile: false });
        }
      }
    
    render()
    {
        const {carro, dataCarro , mostrarCarro,quitarDelCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad,0)
        console.log(dataCarro)

        if (this.state.mobile) {
            return (
            <div> 
                <h2 className="text-2"><i className="bi bi-cart "></i> Carrito </h2>            
                <hr/>
                {cantidad !== 0 ?
                <React.Fragment>
                    <DetallesCarro carro={carro} quitarDelCarro={quitarDelCarro} mobile={true} />
                    <div className="d-block d-sm-none justify-content-center my-4 d-grid">
                        <Link className="text-center btn  bg-2 rounded-pill text-white p-2 px-3"  to="/">Ver todos los productos</Link>
                    </div>
                </React.Fragment>
                :
                <p className="text-danger text-sm"><i className="bi bi-x-circle"></i> No has ingresado productos al carrito</p>
            }
            </div>)
        }

        return(
            <div >
                <span style={styles.bubble}>
                    <BubbleAlert value={cantidad}/>
                </span>
                
                <button  onClick={mostrarCarro} style={styles.carro}>
                    <i className="bi bi-cart text-dark"></i>
                </button>
                {dataCarro ? cantidad !==0 ?  <DetallesCarro carro={carro} quitarDelCarro={quitarDelCarro}/> :null
                 : null}
            </div>
        )
    }
}

export default Carro