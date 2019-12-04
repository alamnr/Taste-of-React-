import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css'


class Recipe extends Component {
    static defaultProps = {
        ingridients: []
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingridients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instruction: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }
    render() {
        const { title, instruction, img } = this.props;
        const ingridients = this.props.ingridients.map((ing, index) => (<li key={index}>{ing}</li>))

        return (
            
                <div className="recipe-card">
                    <div className="recipe-card-img">
                        <img src={img} alt={title} width='300px' height='300px' />
                    </div>
                    <div className="recipe-card-content">
                        <h3 className="recipe-title">{title} </h3>
                        <h4>Ingridients:</h4>
                        <ul>
                            {ingridients}
                        </ul>
                        <h4>Instructions:</h4>
                        <p>{instruction}</p>
                    </div>

                </div>
            


        );

    }
}

export default Recipe;