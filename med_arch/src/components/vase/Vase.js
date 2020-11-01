import React from 'react';
import './Vase.css';
import Navigationbar from '../navigationbar/Navigationbar'
import ImageCarousel from '../imgcarousel/ImgCarousel'




class Vase extends React.Component{
 
    constructor()
    {
        super()
        this.state= {
            "vase_detail":{}
        }
    }

    componentDidMount()
    {
        // let f= `http://localhost:5000/vase${this.props.history.location.pathname}`
        let f = `https://evening-taiga-38121.herokuapp.com/vase${this.props.history.location.pathname}`
        //fetch('http://localhost:5000/vase/1').then(response=>response.json()).then(json=> console.log(json))
        fetch(f).then(response=>response.json()).then(out=> this.setState({"vase_detail":out}))
    }
    
    render(){
        let hasValue=false;
        if (Object.keys(this.state.vase_detail).length!=0)
        {
            hasValue=true;
        }
    return (
      <div>
        <Navigationbar filter_visibility="hidden"></Navigationbar>
        {hasValue ? <ImageCarousel vase_detail={this.state.vase_detail}></ImageCarousel>:null}
      </div>
    );
    }
  }
  

export default Vase;