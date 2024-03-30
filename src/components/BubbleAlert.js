import { Component } from "react";
const styles = {
    bubbleAlert:{
        padding: '2.5px 7px',
        backgroundColor: '#9c0000',
        color: '#fff',
        borderRadius:'2rem',
        fontSize: '0.7em'
        
    }
}
class BubbleAlert extends Component
{
    getNumber(n){    
        if(!n){return ''}
        else if (n<0) return '0'
        return n> 9 ? '9+' : n
    }
    render()
    {
        const {value} = this.props;
        if(value != 0)
        {
            return(  <span style={styles.bubbleAlert}>
            {this.getNumber(value)}
        </span>)
        }else return null;
    }
}
export default BubbleAlert