import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = { word: "" };

  saveWord = (word) => {
    this.setState({ word });
  };

  removeChar = (index) => {
    let word = [...this.state.word];
    word.splice(index, 1);
    word = word.join("");
    this.setState({ word });
  };

  render() {
    let charsFromString = this.state.word.split("").map((char, i) => {
      return (
        <CharComponent
          char={char}
          key={i}
          onClickHandler={() => this.removeChar(i)}
        />
      );
    });

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=&gt; ValidationComponent) which receives
            the text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=&gt; CharComponent) and style it as an
            inline box (=&gt; display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input type="text" onChange={(e) => this.saveWord(e.target.value)} value={this.state.word} />
        <p>{this.state.word.length}</p>
        <ValidationComponent length={this.state.word.length} />
        <div>{charsFromString}</div>
      </div>
    );
  }
}

export default App;
