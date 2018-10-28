dare = document.querySelector(".clean-mtop-mbot")
var dareQuest = [

    "Scream my crush is ... and I want to do with her / him",
    "Kiss the lips of players of the opposite sex with you",
    "Perform three different 'caveats' with one player",
    "Take anything from any player",
    "Show a person selected by another player",
    "Being hit by a single player in 10 shots",
    "Anti-Push 100",
    "Performing a 'banana plantation' for 120 seconds",
    "Mustard in one minute",
    "For men, makeup, and women for makeup",
    "Drop one designated item into the toilet and use the hand to remove it",
    "Fan dance for 1 minute",
    "Take off your pants for 5 minutes",
    "Lick the table",
    "Two tablespoons of mustard",
    "Call Crush and say 'I love you'",
    "Kiss the cheek or lips of the same sex player",
    "For ice cold in the underpants",
    "Other players will edit your hairstyle",
    "Sexy dance for 1 minute",
    "Telling a joke that must make another player laugh",
    "Call your opposite sex and confess",
    
];
var choiceRandom = () => {
    
    var index = Math.floor(Math.random() * dareQuest.length);
       
    return dareQuest[index];
}
var choiceRandomed = choiceRandom();
dare.innerHTML = choiceRandomed;

// var clicks = document.querySelectorAll(".click");
var clicks = document.querySelectorAll(".click2");
clicks.forEach(clicks => {
    clicks.addEventListener("click", (event) => {
        if (clicked === choiceRandomed) {
            document.querySelectorAll(".clean-mtop-mbot")
                
            }
        else {
                console.log(dareQuest);
                
               
               
                
            }
            
        })
    
    
});
var otherQuestion = () =>{
    var choiceRandomed = choiceRandom();
    dare.innerHTML = choiceRandomed;
    for (var i = 0;i < dareQuest.length; i++){
        dareQuest[i].style.backgroundColor = dareQuest[i];
        



}
}