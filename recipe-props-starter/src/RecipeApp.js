import React, {Component} from 'react';
//import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

class RecipeApp extends Component {
  static defaultProps = {
    recipes: [{
      title: 'Burger',
      ingridients: ['flower', 'water', 'meat'],
      instruction: "Mix ingridients",
      img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
    },
    {
      title: 'Role',
      ingridients: ['flower', 'water', 'meat', 'vege'],
      instruction: "Mix ingridients",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
      title: 'Shrimp',
      ingridients: ['flower', 'water', 'shrimp'],
      instruction: "Mix ingridients",
      img: "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg"
    },
    {
      title: 'Pizza',
      ingridients: ['flower', 'water', 'meat','baking'],
      instruction: "Mix ingridients",
      img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
    }  
  ]
  }

  static propTypes = {
    recipes : PropTypes.arrayOf(PropTypes.Object).isRequired
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <div className="recipe-list">
        {this.props.recipes.map((r, index) => (
          // <Recipe key={index}
          //   title={r.title}
          //   instruction={r.instruction}
          //   ingridients={r.ingridients}
          //   img={r.img}
          //   />
          //  Using REST operator 
          <Recipe key={index} {...r} />
        ))} 
        </div>
               

      </div>
    );
  }
}

export default RecipeApp;
