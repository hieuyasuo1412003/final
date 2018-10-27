
var truthAdult = document.querySelector(".clean-mtop-mbot")
var truthQuest=[
    "Một tuần xem phim XXX bao nhiêu lần ?",
    "Who do you find most attractive in this room?",
    
    "What is the most shameful thing you've done in your life? ",
    "Who did you have your best kiss with ?",
    
    
    "What is the worst thing you've ever done to somebody?",
    
    "Who's the most pretty person you've ever fantasized about?",
    "What's the strangest place in which you've had sex?",
    "Would you sleep with someone for a promotion?",
    "What's the craziest thing you've ever done in bed?",
    "What do you find the most disgusting about the opposite sex?",
    "Could you have sex with someone of the same gender?",
    "Were you turned on the first time you met your crush?",
    "Have you ever had sex in the swimming pool/the sea?",
    'What part of your body are you the proudest of?',
    "Have you ever paid for sex?",
    "What limits you can't cross in bed?",
    "Wear an outfit chosen by your friends",
    "What's the biggest drunk embarrassing thing you've done?",
    "Have you ever been so drunk that you blacked-out?",
    "Have you ever done a sex train?",
    "What is the best quality of your girlfriend or boyfriend?",
    "What is the worst quality of your girlfriend or boyfriend?",
    "What is the craziest thing that you have ever done while drunk?",
    "Did you smoke or drink before college?",
    "Have you ever been high?",
    "Have you ever peed around the toilet, but not in the hole?",
    "What is the favorite thing you've dreamt about?",
    "Do you wash your hands after going to the toilet?",
    "How many boys/girls have you slept with?",
    "What is the best party that you've ever been to?",
    "Have you ever wet your bed from being too drunk?",
    



    
    
]
var choiceRandom = () => {
    
    var index = Math.floor(Math.random() * truthQuest.length);
       
    return truthQuest[index];
}
var choiceRandomed = choiceRandom();
truthAdult.innerHTML = choiceRandomed;

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
    truthAdult.innerHTML = choiceRandomed;
    for (var i = 0;i < truthQuest.length; i++){
        truthQuest[i].style.backgroundColor = truthQuest[i];
        
}
}
reset.addEventListener("click",()=>{
    otherQuestion();
})