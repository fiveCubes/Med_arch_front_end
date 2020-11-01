import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './ImgCard.css'
import {Link} from 'react-router-dom'


class ImgCard extends React.Component
{
    onCardClick=(event)=>
    {
      let data=this.props.id.toString()
      this.props.history.push(data)
    }
    
    render()
    {
        return (
            <Card id="card-container"  onClick={this.onCardClick}>
            <Card.Img variant="top" id="card-image" src={`https://evening-taiga-38121.herokuapp.com/${this.props.image}`} />
            <Card.Body id="card-body">
              <Card.Title >{this.props.id +' ' +this.props.shape}</Card.Title>
              <Card.Text>
                {this.props.location}
              </Card.Text>
            </Card.Body>
          </Card>
          );
    }

}

export default ImgCard;
