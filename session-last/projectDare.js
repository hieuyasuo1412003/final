dare = document.querySelector(".clean-mtop-mbot")
var dareQuest = [
    "Hét to tôi bị ĐIÊN 3 lần",
   
    "Quay vòng tròn tại 1 chỗ 30 lần",
    "Uống 1 lít nước trong 1 phút",
    "Hít rắm của 1 người chơi bất kì",
    "Bị 1 người chơi bất kì búng mạnh vào tai 10 phát",
    "Chống đẩy 20 cái",
    "Thực hiện động tác 'trồng cây chuối' trong 10 giây",
    "Ngậm chanh trong miệng 15 giây",
    "Đối với nam , trang điểm cho họ . Còn nữ thì tẩy trang",
    "Thả 1 vật vào trong bồn cầu rồi dùng tay lấy vật đó ra",
    "Thả 5 cục đá lạnh vào quần",
    "Múa không nhạc trong 1 phút",
    "Cởi trần trong 5 phút",
    "Liếm sàn",
    "Liếm khuỷu tay",
    "Ăn 2 thìa mù tạt",
    "Vừa uống nước vừa dẫm lên tay của bản thân",
    "Bịt mũi + nín thở trong vòng 45 giây",
    "Ngửi tất của một người chơi bất kì trong 15 giây",
    
    "Uống nước lã",
    "Người chơi khác sẽ chỉnh sửa kiểu tóc cho bạn",
    "Dùng son tô vào môi(Đối với nam),tô vào cằm (Đối với nữ)",
    "Bị buộc tay + buộc chân vào thân cây trong 8 phút",
    "Hát 1 bài hát bất kì",
    "Hét a...a...a không nghỉ lấy hơi trong 30 giây ",
    "Chạy xung quanh phòng 10 vòng ",
    "Bị nhốt vào nhà vệ sinh tắt đèn trong 2 phút",
    "Mặc thêm 5 cái áo trong 30 phút",
    "Mặc thêm 5 cái quần trong 25 phút",
    "Xoay vòng tròn 5 lần rồi nhảy dây 15 cái",
    

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
// click.addEventListener("click",()=>{
//     otherQuestion();
    
//  })
     
    
        



