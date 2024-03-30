import { Component } from 'react'
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import BtnScrollTop from './components/BtnScrollTop';
import ToastAgregado from './components/ToastAgregado';

 


class App extends Component {
  state = {
    logo: {
      name:'Z-Tech', img:'/assets/img/empresa/logo.png',
    },
    productos: [
      { name: 'Mouse Razer', price: 18600, img: '/assets/img/productos/razer.png' },
      { name: 'Teclado Marvo', price: 28900, img: '/assets/img/productos/marvo.png' },
      { name: 'Nintendo Switch', price: 250000, img: '/assets/img/productos/switch.png' },
      { name: 'AMD Ryzen 5 7600X', price: 139000, img: '/assets/img/productos/amd.png' },
      { name: 'RedDragon CCW-3011', price: 32000, img: '/assets/img/productos/redragon.png' },
      { name: 'Sony Play Station 5', price: 312000, img: '/assets/img/productos/sonyplaystation.png' },
      { name: 'ASUS Rog Ally', price: 335000, img: '/assets/img/productos/asus.png' },
      { name: 'Intel Core i3 13100F', price: 69000, img: '/assets/img/productos/intel.png' },
      { name: 'Nintendo Switch Lite', price: 110000, img: '/assets/img/productos/nintendo.png' },
      { name: 'XBOX Series X ', price: 285000, img: '/assets/img/productos/xbox.png' },
      { name: 'Meta Quest', price: 365000, img: '/assets/img/productos/meta.png' },
      { name: 'Msi Geforce RTX 4090', price: 1239000, img: '/assets/img/productos/msi.png' },



    ],
    carro: [],
    dataCarro: false,
    dataToast:{title: '',
               status: false},
  }
  componentDidMount() {
     // Verificar si hay datos de carro en sessionStorage
     const carroStorage = sessionStorage.getItem('carro');

     // Si hay datos en sessionStorage, establecerlos en el estado
     if (carroStorage) {
       this.setState({
         carro: JSON.parse(carroStorage)
       });
     }
     
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // Llamar a la función al montar el componente para establecer el estado inicial

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth < 576) {
      this.setState({ dataCarro: true });
    } else {
      this.setState({ dataCarro: false });
    }
  }

  agregarAlCarro = (producto) => {
    //Creamos una constante con el valor del carro actual 
    const {carro} = this.state;
  
    //Esta recorre el carrito y se fija si ya el producto fue agregado
    if (carro.find(x => x.name === producto.name)) {
      //Si ya fue agregado cree una copia del carrito pero mapee donde el nombre del articulo del carrito sea igual que el producto
      const newCarro = carro.map(x => x.name === producto.name ? ({
        //Copia todos los datos del carrito pero donde aplica la regla del mapeo cambia la cantidad sumándole uno 
        ...x, cantidad: x.cantidad + 1
      }) : x);
  
      this.mostrarToast(producto.name);
      // Ocultar el ToastAgregado después de 4 segundos
      setTimeout(this.ocultarToast, 3000);
  
      // Actualizar estado del carro
      this.setState({ carro: newCarro }, () => {
        // Almacenar el carro en sessionStorage
        sessionStorage.setItem('carro', JSON.stringify(this.state.carro));
      });
    } else {
      this.mostrarToast(producto.name);
      setTimeout(this.ocultarToast, 3000);
  
      // Si el producto no está en el carro, agregarlo con cantidad 1
      this.setState(prevState => ({
        carro: [...prevState.carro, { ...producto, cantidad: 1 }]
      }), () => {
        // Almacenar el carro en sessionStorage
        sessionStorage.setItem('carro', JSON.stringify(this.state.carro));
      });
    }
  }
  
  quitarDelCarro = (producto) => {
    // Creamos una constante con el valor del carro actual 
    const { carro } = this.state;
  
    // Verificar si el producto está en el carro
    if (carro.find(x => x.name === producto.name)) {
      // Crear una nueva copia del carro actualizado
      const newCarro = carro.map(x => x.name === producto.name ? ({
        ...x,
        cantidad: x.cantidad - 1
      }) : x)
      // Filtrar los productos con cantidad mayor que 0
      .filter(x => x.cantidad > 0);
  
      // Actualizar estado del carro
      this.setState({ carro: newCarro }, () => {
        // Almacenar el carro actualizado en sessionStorage
        sessionStorage.setItem('carro', JSON.stringify(this.state.carro));
      });
    } else {
      // Si el producto no está en el carro, no se hace nada
      return;
    }
  }
  

  mostrarCarro = ()=>  {
    const cantidad = this.state.carro.length
    if(cantidad == 0)
    {
      this.setState({dataCarro:false})
    }else
      this.setState({dataCarro:!this.state.dataCarro})
  }

  mostrarToast = (title) => {
    this.setState(prevState => ({
      dataToast: {
        ...prevState.dataToast,
        title: title,
        status: true
      }
    }));
  }
  
  ocultarToast = () => {
    this.setState(prevState => ({
      dataToast: {
        ...prevState.dataToast,
        title: '',
        status: false
      }
    }));
  }

  render() { 
    console.log(this.state)
    const {dataCarro,dataToast} = this.state
    return (
      <div className='container-fluid' style={{backgroundColor:'#eee'}}>
        <Navbar 
        logo={this.state.logo}
        carro={this.state.carro} 
        dataCarro={this.state.dataCarro}
        mostrarCarro={this.mostrarCarro}
        quitarDelCarro={this.quitarDelCarro}/>
        <Layout>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
        <BtnScrollTop/>
        {dataToast.status &&  <ToastAgregado title={dataToast.title}/>}
       
      </div>
    )
  }
}

export default App;
