import React from 'react'
import ImgCard from '../imgcard/ImgCard'
import './Cardlist.css'

class Cardlist extends React.Component
{
    render()
    {
        return (
            <div id="cardlist-container">
                {this.props.cards.map((card,i)=> {
                    let image=''
                    if(card.images && card.images.length>0)
                    {
                        image = card.images[0]
                        return <ImgCard key={i} id={card.id} shape={card.shape} image={image} location={card.location} history={this.props.history}></ImgCard>
                    }

                    
                })}
            </div>
          );
    }

}

export default Cardlist;