import React from 'react';
import './HomePage.css';
import Navigationbar from '../navigationbar/Navigationbar'
import ImgCard from '../imgcard/ImgCard'
import Cardlist from '../cardlist/Cardlist'


class HomePage extends React.Component{
 
    constructor()
    {
        super()
        this.state= {
          "cards":[],
          "loaded_cards":[],
          "filter_by":"shape"
        }
    }

    onSearch=(event)=>
    {   
         let text= event.target.value.toLowerCase()
         console.log(text)
         if(this.state.filter_by ==="shape")
         {
          let newState = this.state.loaded_cards .filter((card)=> card.shape.toLowerCase().includes(text))
          this.setState({"cards":newState})
         }

         if(this.state.filter_by ==="location")
         {
          let newState = this.state.loaded_cards .filter((card)=> card.location.toLowerCase().includes(text))
          this.setState({"cards":newState})
         }
         if(this.state.filter_by ==="description")
         {
          let newState = this.state.loaded_cards .filter((card)=> card.description.toLowerCase().includes(text))
          this.setState({"cards":newState})
         }
    }

    onFilterChange = (value)=>
    {
      this.setState({"filter_by":value})
    }

  

    componentDidMount()
    {
        fetch("https://evening-taiga-38121.herokuapp.com/").then(response=>response.json()).then(out=>this.setState({"cards":out.vase_details,"loaded_cards":out.vase_details}))
        
    }
    render(){
    return (
      <div>
      <div id="home-nav"><Navigationbar display_type="inline" onSearch={this.onSearch} onFilterChange={this.onFilterChange}></Navigationbar></div>
      <div id="home-card"> <Cardlist cards={this.state.cards} history={this.props.history}></Cardlist></div>
      </div>
    );
    }
  }
  

export default HomePage;