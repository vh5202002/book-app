import React, { Component }from "react";
import SearchForm from "../SearchForm/SearchForm";
import "../SearchForm/SearchForm.css";
import "./BookList.css";

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }
    
    render () {
        return(
            <div>
            </div>
        );
    }
}

export default Books; 