import React from "react";
import './PlayerListTable.css'

function PlayerListTable({players, title}){
    const formatPrice = (price)=>{
        let newPrice = "";
        let tempPrice = price.toString();

        while (tempPrice.length > 3){
            newPrice = '.' + tempPrice.substring( tempPrice.length-3) + newPrice;
            tempPrice = tempPrice.substring( 0, tempPrice.length-3);
            }
       newPrice ='$' +  tempPrice + newPrice;
       return newPrice
    }

    return(
        <div className="main_container_list">
            <h3 className="list_title">{title}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player =>{
                        return(<tr key={player.id}>
                            <td className="team">{player.team}</td>
                            <td className="position">{player.position}</td>
                            <td className="name">{player.name}</td>
                            <td className="value">{player.value}</td>
                            <td className="price">{formatPrice(player.price)}</td>
                        </tr>)
                    })}
                </tbody> 
            </table>
        </div>
    );
};

export default PlayerListTable;