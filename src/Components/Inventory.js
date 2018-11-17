import React from 'react'
import { Link } from 'react-router-dom';
import SelectedPoke from './SelectedPoke.js'
export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <SelectedPoke pokeDexList={this.props.pokeDexList}/>
                <Link to='/add'>
                    +
                </Link>
            </React.Fragment>
        )
    }
}