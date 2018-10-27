var truth = document.querySelector(".clean-mtop-mbot")
var truthQuest=[
    
    
    "Lý do bạn mất gốc Hóa ?",
    "Bạn thích nhất điều gì ở người bạn đang nói chuyện cùng ?",
    "Giấc mơ kỳ cục nhất bạn từng mơ ?",
    "Một điều gì bạn muốn thay đổi về bản thân mình ?",
    "Một câu đùa mà bạn thấy hài hước nhất ?",
    "Nếu một ngày tỉnh dậy bạn có thể tàng tình, thì bạn sẽ ?",
    "Bạn có muốn nổi tiếng không? Theo cách nào?",
    "Điều gì tạo nên một ngày “hoàn hảo” đối với bạn?",
    "Bạn có bất kì linh cảm bí mật nào về cách mà mình sẽ chết?",
    "Nêu lên 3 thứ là điểm chung của bạn và người bạn của mình?",
    "Điều gì khiến bạn cảm thấy biết ơn trong cuộc đời mình?",
    "Thành tích tuyệt vời nhất của bạn là gì?",
    "Điều gì mà bạn quý trọng nhất trong tình bạn?",
    "Kỉ niệm quý giá nhất của bạn là gì?",
    "Kỉ niệm kinh khủng nhất của bạn là gì?",
    "Tình bạn có ý nghĩa như thế nào với bạn?",
    "Điều gì, nếu có, là quá quan trọng để bị đem là làm trò đùa?",
    "Đã bao giờ nói dối bố mẹ chưa ?",
    "Đã từng chơi ăn gian để thắng game chưa ?",
    "Siêu năng lực bí ẩn của bạn là gì ?",
    "Đã bao giờ tè ra bể bơi chưa ?",
    "Địa điểm yêu thích nhất của bạn là gì ?",
    "Thói quen xấu nhất của bạn là gì ?",
    "Có sợ bóng tối không ?",
    "Bạn có những bí mật không ?",
    "Ngày nào là ngày tuyệt vời nhất trong cuộc đời bạn ?",
    "Đã nạp tiền vào Game bao giờ chưa ? ",
    " Bạn nói được bao nhiêu ngôn ngữ ?",
    "Bạn có sợ bọ không ?",
    "Có hạnh phúc khi được tồn tại trên cuộc đời này không ?",
    "Bạn có phải là Fan của ĐTQG bóng đá Việt Nam không ?",
    "Có biết hát bài hát Tiến Quân Ca của nhạc sĩ Văn Cao không ?",
    "Công việc mơ ước của bạn trong tương lai của bạn là gì ?",
    "Nói về ngày tồi tệ nhất trong cuộc đời bạn ?",
    "Có người yêu chưa ?",
    "Lần cuối cùng bạn làm việc tốt cho người khác là khi nào ?",
    

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
        