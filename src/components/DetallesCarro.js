import { Component } from "react";
import BtnQuitarCantidad from './BtnQuitarCantidad.js'
const styles = {
    list:
    {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        borderBottom: 'solid 1px #ccc'
    }
}


class DetallesCarro extends Component {
    render(){
        const {carro,quitarDelCarro,mobile} = this.props
        if(mobile)
        {
            styles.detalles = 
            {
                transition: 'all ease-in 0.5s',
                boxShadow: '1px 5px 15px rgba(0,0,0,0.1)',
                maxHeight: '350px',
                overflowY: 'scroll', 
            }
        }else
        {
            styles.detalles = 
            {
                transition: 'all ease-in 0.5s',
                background: '#f1f1f1',
                position: 'absolute',
                marginTop: '5px ',
                padding: '1em',
                borderRadius: '10px',
                boxShadow: '1px 5px 15px rgba(0,0,0,0.1)',
                width: '350px', 
                right: 50,
                zIndex: '999',
                maxHeight: '350px',
                overflowY: 'scroll', 
            }
        }

        return(
            
            <div style={styles.detalles} className="scroll">
                <ul className="p-0 ">
                    {carro.map(x=> <li key={x.name} style={styles.list}>
                        <span style={{fontWeight: '800',padding:'5px', borderRight:'solid 1px #ccc'}}>{x.cantidad}</span>
                        <img alt={x.name} src={x.img} width={75} height={75} />
                        {x.name}
                        <BtnQuitarCantidad onClick={()=>quitarDelCarro(x)}/>
                        </li>)}
                </ul>
                <div className=" justify-content-center my-4 d-grid">
                        <a className="d-none d-sm-grid text-center btn  bg-2 rounded-pill text-white p-2 px-3" href="#">Ver todos los productos</a>
                    </div>
            </div>
        )
    }
}

export default DetallesCarro