import React, {Component} from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem.jsx';

class Menu extends Component {
    state ={
        dishes: DISHES
    }
    render(){
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem food = {item} key={item.id}/>
            )
        })
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
        );
};  }

export default Menu;