import { Component } from "react";

export class ReadingList extends Component {
    state = {
        userInput: "",
        readingList: []
    }

    onChangeEvent (e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Please, add an item')
        }

        let listArray = this.state.readingList;
        listArray.push(input)
        this.setState({readingList: listArray, userInput: ''})
    }

    deleteItem() {
        let listArray = this.state.readingList;
        listArray = [];
        this.setState({readingList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
   render() {
        return (
            <div>
                <form onSubmit ={this.onFormSubmit}>
                    <div className="container">
                        <input type='text'
                        placeholder= 'What will you read next?'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                <div className="container">
                    <button  onClick = {() => this.addItem(this.state.userInput)} className="btn add"> Add </button>
                </div>
                <ul>
                    {this.state.readingList.map((item, index) => (
                        <li onClick ={this.crossedWord} key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick = {() => this.deleteItem()} className="btn delete"> Delete </button>
                </div>
                </form>
            </div>
        )
    }
}
