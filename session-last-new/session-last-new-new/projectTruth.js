var truth = document.querySelector(".clean-mtop-mbot")
var truthQuest=[
    
    
    "Why do you take root?",
    "What do you like most about the person you are talking to?",
    "The most ridiculous dream you ever dreamed of?",
    "What do you want to change about yourself?",
    "A joke that you find most funny?",
    "If you wake up one day, you will?",
    "Do you want to be famous?",
    "What makes a' perfect 'day for you?",
    "Do you have any secret hunch on how you will die?",
    "What are the three things that are common to you and your friend?",
    "What makes you feel grateful in your life?",
    "What is your greatest achievement?",
    "What do you value most in friendship?",
    "What is your most precious memory?",
    "What is your most terrible memory?",
    "What does friendship mean to you?",
    "What, if any, is too important to be taken as a joke?",
    "Have you ever lied to your parents?",
    "Have you ever played cheat to win a game?",
    "What is your ultimate mysterious power?",

    "Have you ever been to a swimming pool?",
    "What's your favorite place?",
    "What is your worst habit?",
    "Are you afraid of the dark?",
    "Do you have any secrets?",
    "What is the best day of your life?",
    "Have you added money to the game yet?",
    " How many languages ​​can you speak ?",
    "Are you afraid of bugs?",
    "Is it happy to be alive in this life?",
    "Are you a football fan of Vietnam football?",
    "Can I sing Van Cao's song Tien Quan?",
    "What is your dream job in the future?",
    "Talk about the worst day of your life?",
    "Do you have a girlfriend ?",
    "When was the last time you worked well for others?",
    

]
var choiceRandom = () => {
    
    var index = Math.floor(Math.random() * truthQuest.length);
       
    return truthQuest[index];
}
var choiceRandomed = choiceRandom();
truth.innerHTML = choiceRandomed;

var clicks = document.querySelectorAll(".click");
// var clicks = document.querySelectorAll(".click2");
clicks.forEach(clicks => {
    clicks.addEventListener("click", (event) => {
        if (clicked === choiceRandomed) {
            document.querySelectorAll(".clean-mtop-mbot")
                
            }
        else {
                console.log(truthQuest);
                
            }
            
        })
    
    
});
var otherQuestion = () =>{
    var choiceRandomed = choiceRandom();
    truth.innerHTML = choiceRandomed;
    for (var i = 0;i < truthQuest.length; i++){
        truthQuest[i].style.backgroundColor = truthQuest[i];
        
}
}
// window.addEventListener("click",()=>{
//     otherQuestion();
// })
        
    



var i = 0;

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < truthQuest.length) {
    document.getElementsByClassName("clean-mtop-mbot").innerHTML += choiceRandom.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
        