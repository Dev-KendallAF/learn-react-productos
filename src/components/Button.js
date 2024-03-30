import { Component } from "react";
import '../css/modules/btnCompra.css'



class Button extends Component
{
    render()
    {
        return(
            <button className="btnCompra flex-grow-1 "  {...this.props}><span className="text">Comprar </span><span className="text-small"><i class="bi bi-basket2"></i> Agregar al Carrito</span></button>
        )
    }
}

export default Button