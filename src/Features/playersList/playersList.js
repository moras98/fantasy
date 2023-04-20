import players from "../../data/players";

export const loadAllPlayers = () =>{
    return {
        type:'allPlayers/loadAllPlayers',
        payload: players
    }
}


const initialState = [];

export const allPlayersReducer = (allPlayers = initialState, action) => {
    switch (action.type) {
        case 'allPlayers/loadAllPlayers': {
            return action.payload;
        }
        default: {
            return allPlayers;
        }
    }
}