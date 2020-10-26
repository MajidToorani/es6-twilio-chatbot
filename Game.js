const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STORM:  Symbol("storm"),
    WAIT: Symbol("wait"),
    OBJECT: Symbol("object"),
    LIGHT: Symbol("light"),
    BEACH: Symbol("beach"),
    HOUSE:  Symbol("house"),
    FOOD: Symbol("food"),
    HUNTER: Symbol("hunter"),
    POLICE: Symbol("police"),
    DECIDE: Symbol("decide")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You are traveling to the UK via airplane, and it is a storm over the ocean. The pilot says: ' Dear passengers, we have trouble with the powerful wind and ... bang!!! ... Engines are out of order. You have to JUMP to the ocean or WAIT on the airplane?";
                this.stateCur = GameState.STORM;
                break;
            case GameState.STORM:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The airplane goes down to a dark land very fast. Are you still WAITING or JUMPING?";
                    this.stateCur = GameState.WAIT;
                }else{
                    sReply ="You jumped successfully into the ocean. There are two objects in the dark and cold water. One of them seems like a broken BOAT, and the other is a broken TREE waving on the ocean. Which one do you choose?";
                    this.stateCur = GameState.OBJECT;
                }
                break;
            case GameState.WAIT:
                if(sInput.toLowerCase().match("waiting")){
                    sReply = "Game over! The airplane crashed with the land, and you died......";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "You jumped successfully into the ocean. There are two objects in the dark and cold water. One of them seems like a broken BOAT, and the other is a broken TREE waving on the ocean. Which one do you choose?";
                    this.stateCur = GameState.OBJECT;
                }
                break;
            case GameState.OBJECT:
                if(sInput.toLowerCase().match("boat")){
                    sReply = "You chose a broken boat, and you dug in the ocean ... game over!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "You are on the broken tree, and you can swim toward the beach. There are two lights. One seems like a HOUSE, and one seems like a FIRE. Which one do you choose?";
                    this.stateCur = GameState.LIGHT;
                }
                break;
            case GameState.LIGHT:
                if(sInput.toLowerCase().match("house")){
                    sReply = "You are swimming to the house. You arrive and knock on the door. The owner is an old woman and smiles like an evil. Do you go into the HOUSE or run back to the FIRE?"
                    this.stateCur = GameState.BEACH;
                }else{
                    sReply = "You are swimming toward the fire. A fish hunter is staying at the fire and eating some food. He has a gun looking at you angrily. You go near the FIRE or run back to the HOUSE?";
                    this.stateCur = GameState.BEACH;
                }
                break;
            case GameState.BEACH:
                if(sInput.toLowerCase().match("house")){
                    sReply = "The woman invites you to eat her food. Also, a phone is on the table. Do you have the FOOD, or do you call the POLICE?";
                    this.stateCur = GameState.HOUSE;
                }else{
                    sReply ="You sit near the fire. The hunter seems to plan to kill you. Do you STAY with him or RUN to the house?";
                    this.stateCur = GameState.HUNTER;
                }
                break;
            case GameState.HOUSE:
                if(sInput.toLowerCase().match("food")){
                    sReply = "Food was poisoned. The old woman kills you. She was evil .... game over!"
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "You called the police. Good job! Do you know the address? ( YES or NO )";
                    this.stateCur = GameState.POLICE;
                }
                break;
            case GameState.POLICE:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Police got the address. They are coming very fast. Do you want to EAT the food or IGNORE the invitation?";
                    this.stateCur = GameState.FOOD;
                }else{
                    sReply = "You have a little bit of a chance. The old woman gives you the wrong address but the police track your phone number. Now, do you EAT the food or IGNORE the invitation?";
                    this.stateCur = GameState.FOOD;
                }
                break;
            case GameState.HUNTER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "You arrive at the house and knock on the door. The owner is an old woman and smiles like an evil. Do you go into the HOUSE or run back to the FIRE?"
                    this.stateCur = GameState.BEACH;
                }else{
                    sReply = "Game over ... the hunter kills you when you fall asleep.";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.FOOD:
                if(sInput.toLowerCase().match("eat")){
                    sReply ="Food was poisoned. The old woman kills you. She was evil .... game over!"
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Well done! You ignored the food. The old woman is trying to kill you with the knife. You fight with her, and you get hurt. Don't worry! The police are on the way. Do you STAY at home or RUN to the fire?";
                    this.stateCur = GameState.DECIDE;
                }
                break;
            case GameState.DECIDE:
                if(sInput.toLowerCase().match("run")){
                    sReply = "Game over ... you went to the hunter and stayed with him, and he kills you when you fall asleep.";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "Well done! You made the best decision. The police save your life.";
                    this.stateCur = GameState.WELCOMING;
                }
        }
        
        return([sReply]);
    }
}