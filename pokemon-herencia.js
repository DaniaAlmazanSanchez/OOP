//nombre de las clases dede de ir en la primera letra en mayuscula
class  Pokemon{

    #name='';
    #type='';
    #evolution=[];

    constructor (name,type,evolution){

        this.#name=name;
        this.#type=type;
        this.#evolution=evolution;

    }
    set name(name){
       // this.#name=name;
       if(name==''){
           this.#name='Pikachu';
        }else{
           this.#name=name;
        }
    }
    set type(type){
        this.#type=type;
    }
    set evolution(evolution){
        this.#evolution=evolution;
    }

    attack(){
        return `${this.#name},esta atacando`;
    }

    get name(){
       return this.#name;
    }
    get type(){
       return this.#type;
    }
    get evolution(){
       return this.#evolution;

    }
    envolve(evolution=0){
        const EVOLVE =this.#evolution[evolution] || '';
        let message ='no puedo evokucionar';
        
        if(EVOLVE){
            message =`${this.#name} esta evolucionando a ${EVOLVE}`;
            this.name=EVOLVE;
        }
        return message;
    }
}
class TypeFire extends Pokemon{

    constructor(name,evolution){
       super(name,'fire,evolution');
    }
     message(){
         return `hola,${this.name} y soy de tipo fuego`
     }
}

const charmander= new TypeFire('charmander',['charmaleon','charizar']);
 console.log(charmander.message());    
/*

    const charmander= new Pokemon('charmander','fire',['charmaleon','charizar']);
     const Squirtle = new Pokemon('Squirtle','water',['wartortle','blastoise']);

console.log(`${charmander.name}es de tipo ${charmander.type}`);
console.log(charmander.attack());
console.log(charmander.envolve(0));
console.log((`${charmander.name} es de type${charmander.type}` ));

console.log('----------------------------');
console.log(`${Squirtle.name}es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.envolve(0));
console.log((`${Squirtle.name} es de type${Squirtle.type}` ));

*/