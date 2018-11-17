import React from 'react'
export default (props) => {
    const hp = (props.detail.hp > 100)?100: props.detail.hp
    const str = (props.detail.attacks)?props.detail.attacks.length*50:0
    const weak = (props.detail.weaknesses)?props.detail.weaknesses.length: 0
    let damage = 0;
    (props.detail.attacks)?props.detail.attacks.map(attackDetail => {
        damage = damage + parseInt(attackDetail.damage)
    }): 0
    const happinessLevel = ((hp / 10) + (damage /10 ) + 10 - (weak)) / 5
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={props.detail.imageUrl} alt={props.detail.id} />
                </div>
                <div className='col-md-5'>
                    <div className='row'>
                        <h3>{props.detail.name}</h3>
                    </div>
                    <div className='row'>
                        <h3>HP {hp}</h3>
                    </div>
                    <div className='row'>
                        <h3>STR {str}</h3>
                    </div>
                    <div className='row'>
                        <h3>Weak {weak*100}</h3>
                    </div>
                    <div className='row'>
                        <h3>Happy {happinessLevel}</h3>
                    </div>
                </div>
                <div>
                    <button onClick={() => (props.select(props.detail))}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}