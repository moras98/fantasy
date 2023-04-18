class Team {
    constructor(id, name, tShirt){
        this.id = id,
        this.name = name,
        this.tShirt = tShirt
    };
};

const peñarol = new Team(1, 'Peñarol');
const nacional = new Team(2, 'Nacional');

const teams = [peñarol, nacional];
export default teams;