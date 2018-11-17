import React from 'react'
import PokeDexCard from './PokeDexCard'
import { Link } from 'react-router-dom';

class PokedexList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        const pokeDex = this.props.pokeDexList.map( pokeDex => {
            return <PokeDexCard key={pokeDex.id} detail={pokeDex} select={this.props.select}/>
        })
        return (
            <div style={{overflowX: 'scroll', height: '680px'}}>
                <Link to='/'>
                    Back
                </Link>
                {pokeDex}
            </div>
        )
    }
}
export default PokedexList