import React, { Component } from "react";
import '../css/modules/toastAgregado.scss';

const styles = {
  toastAgregado: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: '1000',
  }
}

class ToastAgregado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  handleEliminar = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    const {title} = this.props
    return (
      <>
        {visible && (
          <div className={"toastAgregado" + (visible ? " visible" : "")} style={styles.toastAgregado}>
            <div className="toastAgregado__header">
              <strong className="me-auto">
                <i className="bi bi-cart-check"></i> {title}
              </strong>
              <button
                type="button"
                className="btn p-0 border text-white rounded-circle p-0"
                onClick={this.handleEliminar}
              >
                <i className="bi bi-x text-white p-1"></i>
              </button>
            </div>
            <div className="toastAgregado__body">
              ¡Producto agregado al carrito correctamente!
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ToastAgregado;
