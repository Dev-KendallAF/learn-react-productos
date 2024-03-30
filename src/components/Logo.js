import { Component } from "react";

const styles =
{
    logo:
    {
        fontWeight: 'bold',
        fontSize: '2rem'
    }
    
}
class Logo extends Component
{
    render()
    {
        const {logo} = this.props
        console.log(logo)
        return(
            <div style={styles.logo}>
                {logo.img != null ? <img className="mx-3" alt={logo.name} src={logo.img} height={50} width={50}/> : null}
                <a className="navbar-brand" href="#">{logo.name}</a>
            </div>
        )
    }
}

export default Logo