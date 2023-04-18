import React, {useState} from "react";
import './SearchBar.css';


const SearchBar = ({players}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);

        if(searchInput.length > 0) {
            players.filter((player) => {
                return player.name.match(searchInput);
            })
        };
    };

    return(
        <div>
            <input
                type="text"
                placeholder="Buscar jugador por nombre"
                onChange={handleChange}
                value={searchInput}
            />
        </div>
    );
        
};

export default SearchBar;