let gameTabimage = ["../images/xp2.jpg","../images/xp4.png","../images/xp1.png","../images/xp5.png","../images/xp3.gif"];
let i = 0;

let realImg = ["../images/jptravel/jp2.jpg", "../images/jptravel/jp3.jpg", "../images/jptravel/jp7.jpg", "../images/jptravel/jp4.jpg" , "../images/jptravel/jp6.jpg"];
let aniImg = ["../images/jptravel/ani-jp2.jpg", "../images/jptravel/ani-jp3.jpg", "../images/jptravel/ani-jp7.png", "../images/jptravel/jp5.jpg", "../images/jptravel/ani-jp6.png"];
let a = 0;

let imgTitle = ["날씨의 아이", "날씨의 아이", "너의 이름은", "누마즈" , "스즈메의 문단속" ];
let imgDes = ["조시가야역 노조미자카", "타바타역 남쪽 출구", "스가 신사", "우치우라, 이즈 미토시 파라다이스", "오차노미즈역"];
let b = 0;

let jpTravelImg = ["../images/shizuoka/shiz5.jpg", "../images/shizuoka/shiz4.jpg", "../images/shizuoka/shiz8.jpg","../images/shizuoka/shiz3.jpg","../images/shizuoka/shiz2.jpg", ];
let shimokitazawaImg = ["../images/shimokitazawa/shimo1.jpg", "../images/shimokitazawa/shimo2.jpg","../images/shimokitazawa/shimo3.jpg","../images/shimokitazawa/shimo4.jpg","../images/shimokitazawa/shimo5.jpg"];
let c = 0;

let gameImg=["../images/gameimg/game1.jpg", "../images/gameimg/game2.jpg", "../images/gameimg/game4.jpg", "../images/gameimg/game5.jpg" , "../images/gameimg/game7.jpg", "../images/gameimg/game6.jpg"];
let gameDes=["Dear. Friends Music From LostArk","Dear. Friends Music From LostArk", "사운드 아카이브 : 디 오케스트라", "LostArk Dear. Friends FESTA", "2024 발로란트 챔피언스 서울", "2024 발로란트 챔피언스 서울"  ];
let d = 0;

let planeImg=["../images/planeimg/plane1.jpg", "../images/planeimg/plane2.jpg","../images/planeimg/plane3.jpg", "../images/planeimg/plane4.jpg", "../images/planeimg/plane5.jpg", "../images/planeimg/plane6.jpg","../images/planeimg/plane7.jpg"];
let planeDes = ["국립항공박물관", "김포공항 관제탑", "인천 하늘정원", "김포공항 전망대", "제주공항", "제주공항","제주공항"];
let e = 0;

function gameImgChange(){
    i++;
    if(i>=gameTabimage.length){
        i=0;
    }

    let planeImg=document.getElementById("xplane").src=gameTabimage[i];
    // planeImg
    console.log("작동중");
}

function aniImgChange(){
    a++;
    if(a>=realImg.length){
        a=0;
    }

    document.getElementById("realImg").src=realImg[a];
    document.getElementById("aniImg").src=aniImg[a];

    // myImg;
    // animationImg;
    console.log(a);
}

function textChange(){
    b++;
    if(b>=imgTitle.length){
        b=0;
    }

    document.getElementById("imgTitle").innerText=imgTitle[b];
    document.getElementById("imgDes").innerText=imgDes[b];
}

function travelChange(){
    c++;
    if(c>=jpTravelImg.length){
        c=0;
    }

    document.getElementById("realImg2").src=jpTravelImg[c];
    document.getElementById("aniImg2").src=shimokitazawaImg[c];
}

function gameImgChange2(){
    d++;
    if(d>=gameImg.length){
        d=0;
    }

    document.getElementById("gameImg").src=gameImg[d];
    document.getElementById("imgTitle3").innerText=gameDes[d];
}

function planeImgChange(){
    e++;
    if(e>=planeImg.length){
        e=0;
    }

    document.getElementById("planeImg").src=planeImg[e];
    document.getElementById("imgTitle4").innerText=planeDes[e];
}



