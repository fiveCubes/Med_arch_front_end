import React from 'react'
import {Carousel} from 'react-bootstrap'
import './ImgCarousel.css'
import TinyImages from '../tinyimages/TinyImages'
import ImgData from '../imgdata/ImgData'



class ImgCarousel extends React.Component
{
    constructor()
    {
        super()
        this.state={
            "main_image":''
        }
    }
      
    onImageClick=(image_name)=>
    {
        console.log(image_name)
        this.setState(
            {"main_image":image_name})
    
    }
    componentDidMount()
    {
        if (Object.keys(this.props.vase_detail).length!=0)
        {
        
            this.setState({"main_image":this.props.vase_detail.images[0]})
            
            
            
        }
    }
    render(){
        

        return (
            <div id="entire-box">
            <div id='image_item_container'>
                <div id="item1"> <TinyImages  onImageClick={this.onImageClick} images={this.props.vase_detail.images}></TinyImages></div>
                <div id="item2"><img id="main_image"src={`https://evening-taiga-38121.herokuapp.com/${this.state.main_image}`} ></img> </div>
            </div>
            <div id="data_container">
                <ImgData vase_detail={this.props.vase_detail}></ImgData>
            </div> 
            </div>
            
        )
    }
    
}
export default ImgCarousel;
