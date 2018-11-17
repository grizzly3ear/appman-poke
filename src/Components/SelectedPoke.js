import React from 'react'
import PokeDexCard from './PokeDexCard'

export default class extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        const selected = this.props.pokeDexList.map( pokeDex => {
            return <PokeDexCard key={pokeDex.id} detail={pokeDex} select={this.props.select}/>
        })
        return (
            <div>
                {selected}
            </div>
        )
    }
}