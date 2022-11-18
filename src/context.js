import React, { useState, useContext, useEffect } from "react";
import { useCallback  } from "react";
const URL = ""; 
const AppContext = React.createContext(); //

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("The Lord of the Rings..");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(``);
            const data = await response.json();
            const {docs} = data;
        }catch(error) {
            console.log(error);
            setLoading(false);
        }
    })
}