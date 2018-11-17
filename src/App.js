import React, { Component } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import PokeDexList from './Components/PokedexList'
import axios from 'axios'
import Inventory from './Components/Inventory'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Link from 'react-router-dom/Link';

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokeDexList: [],
      defaultPokeDex: [],
      selected: []
    }
    this.onSearch = this.onSearch.bind(this)
    this.onAddPokemonToInventory = this.onAddPokemonToInventory.bind(this)
  }
  async onSearch(keyword){
    const {data} = await axios.get('http://localhost:3030/api/cards', {
      params: {
        name: keyword,
        limit: 20
      }
    })
    this.setState({
      pokeDexList: data.cards
    })
  }
  async getPokeDexList () {
    const {data} = await axios.get('http://localhost:3030/api/cards')
    console.log(data.cards)
    this.setState({
        pokeDexList: data.cards,
        defaultPokeDex: data.cards
    })
  }
  render() {
    return (
      <div className="App container">
        <SearchBar onSearch={this.onSearch}/>
        <Route exact path='/' component={()=> <Inventory pokeDexList={this.state.selected}/>} />
        <Route path='/add' component={() => <PokeDexList pokeDexList={this.state.pokeDexList} select={this.onAddPokemonToInventory} />} />
      
      </div>
    )
  }
  onAddPokemonToInventory(pokemon){
    let select = this.state.selected
    select.push(pokemon)
    this.setState({
      selected: select
    })
  }
  componentDidMount(){
    this.getPokeDexList()
  }

}

export default App
