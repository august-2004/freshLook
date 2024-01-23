let subButton = document.querySelector(".sub");
let likeButton = document.querySelector(".like");

function subscribe(){
    if (subButton.innerHTML==="subscribe")
    {
        subButton.innerHTML="unsubcribe";
        subButton.classList.add("unsubcolor");
        subButton.classList.remove("subcolor");


    }
    else{
        {
            subButton.innerHTML="subscribe";
            subButton.classList.add("subcolor");
            subButton.classList.remove("unsubcolor");


        }
    }
}

function likes(){
    if (likeButton.innerHTML==="👍like")
    {
        likeButton.innerHTML="👎unlike";
        likeButton.classList.add("unlikecolor");
        likeButton.classList.remove("likecolor");

    }
    else{
        {
            likeButton.classList.add("likecolor");
            likeButton.classList.remove("unlikecolor");

            likeButton.innerHTML="👍like";
        }
    }
}

subButton.onclick= subscribe;
likeButton.onclick = likes;