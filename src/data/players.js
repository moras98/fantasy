class Player {
    constructor(id, name, team, position,value, price){
        this.id = id;
        this.name = name;
        this.team = team;
        this.position = position;
        this.value = value;
        this.price = price;
    };
};
//Peñarol
const mAlonso = new Player(1, "Máximo Alonso",'Peñarol', 'Forward', 0, 200000);
const mArezo = new Player(2, "Matías Arezo",'Peñarol', 'Forward', 0, 1000000);
const aHernandez = new Player(3, "Abel Hernandez",'Peñarol', 'Forward', 0, 400000);

const players = [mAlonso, mArezo, aHernandez]


export default players;