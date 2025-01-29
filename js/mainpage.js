let image = ["../images/xp2.jpg","../images/xp4.png","../images/xp1.png","../images/xp5.png","../images/xp3.gif"];
let i = 0;

function change(){
    i++;
    if(i>=image.length){
        i=0;
    }

    let planeImg=document.getElementById("xplane");
    planeImg.src=image[i];
    console.log("작동중");
}


