import React, {Component} from 'react';
//import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';

class RecipeApp extends Component {
  static defaultProps = {
    recipes: [{
      title: 'Burger',
      ingridients: ['flower', 'water', 'meat'],
      //ingridients: [1, 2, 3],
      instruction: "Mix ingridients",
      img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
    }]
  }
  render() {

    return (
      <div className="App">
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
    );
  }
}

export default RecipeApp;
