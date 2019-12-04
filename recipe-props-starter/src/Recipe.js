import React, {Component} from 'react';


class Recipe extends Component {
    render(){
        const title = this.props.title;
        const ingridients = this.props.ingridients.map((ing,index)=> (<li key={index}>{ing}</li>))
    
        return(
            <div>
                <div>Recipe {title} </div>
                <ul>
                    {ingridients}
                </ul>
            </div>
            
        );

    }
}

export default Recipe;