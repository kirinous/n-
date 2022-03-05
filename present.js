
var to = 'TuynHa';
var gift_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/274826645_758341962014197_3671562988711611662_n.jpg?stp=dst-jpg_s403x403&_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=HLKN9BjcW6sAX-SawTm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIU2S-YlCupqH6Ydj8C6ziWcU43tV8XNRpE81Kq9qlC1A&oe=6247FE63';
var gift_image_url = 'tuyen_ha.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

