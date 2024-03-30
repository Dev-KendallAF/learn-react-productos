import { Component } from "react";

const styles= 
{
    scrollToTop:
    {
        position: 'fixed',
        bottom: '20px', 
        right: '20px', 
        zIndex: 1000, 
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '0.7em 1em',
        background: '#E30B21',
        boxShadow:  '1px 2px 8px #9c0000',
    
    }
}

class BtnScrollTop extends Component
{
    scrollToTop  = ()=>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
    }
    render()
    {
        return(
            <button style={styles.scrollToTop} onClick={this.scrollToTop }><i className="bi bi-arrow-up-short"></i></button>
        )
    }
}

export default BtnScrollTop