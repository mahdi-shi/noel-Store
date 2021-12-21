//like session
let onLike = document.getElementById("like1");
let likeState = false;

for(let i = 1;i <= 5;i++){
    document.getElementById("like"+i).addEventListener("click",() => {
        if(likeState == false){
            document.getElementById("like"+i).style.opacity = 1;
            likeState = true;
        }
        else if(likeState == true){
            document.getElementById("like"+i).style.opacity = 0;
            likeState = false;
        }    
    })
}