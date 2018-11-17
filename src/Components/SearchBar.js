import React from 'react'

export default (props) => {
    return (
        <React.Fragment>
            <input style={{width: '90%'}} onChange={(e)=>{props.onSearch(e.target.value); console.log(e.target.value)}} />
        </React.Fragment>
    ) 
}