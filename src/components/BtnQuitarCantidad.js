import { Component } from "react";

class BtnQuitarCantidad extends Component
{
    render()
    {
        return(
            <button {...this.props} className="p-0 text-2 border-0 bg-transparent m-2"><i className="bi bi-dash-circle-fill"></i></button>
        )
    }
}

export default BtnQuitarCantidad