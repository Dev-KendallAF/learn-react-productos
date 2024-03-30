import { Component} from "react";
import Logo from './Logo';
import Carro from './Carro';

const styles = 
{
    navbar:
    {
        boxShadow: '0 2px 3px #11111110'
    }
}
class Navbar extends Component
{
    render()
    {
        const {carro, dataCarro, mostrarCarro, quitarDelCarro, logo} = this.props;


        return(
<nav style={{boxShadow: '0 2px 3px #11111110'}} className="navbar navbar-expand-sm navbar-light" aria-label="Offcanvas navbar large">
  <div className="container-fluid">
    <Logo logo={logo}/>
    
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
    <i className="bi bi-three-dots-vertical"></i>
    </button>

    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">{logo.name}</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <Carro 
            carro ={carro} 
            quitarDelCarro={quitarDelCarro} 
            mostrarCarro={mostrarCarro}
            dataCarro={dataCarro} 
            />
            
        </ul>
       
      </div>
    </div>
  </div>
</nav>


        )
    }
}

export default Navbar