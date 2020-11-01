import React from 'react'
import {Carousel} from 'react-bootstrap'
import './TinyImages.css'



class TinyImages extends React.Component
{

    render()
    {
        return (
            <div  id='tiny-images'>
                {this.props.images.map((path,i)=> {
                return  <img key={i} src={`https://evening-taiga-38121.herokuapp.com/${path}`} 
                onMouseEnter={()=>this.props.onImageClick(path)}
                className="tiny-1" ></img>
                }
                )}

            </div>
        )
    }
}
export default TinyImages;