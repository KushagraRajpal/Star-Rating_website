const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

// console.log(stars[x]);
for (x = 0; x < stars.length; x++) {
    stars[x].starValue = (x + 1);
    // stars[x].addEventListener('click', function(){
    //     console.log(" I am  clicked");
    // })
    ["click", "mouseover", "mouseout"].forEach(function(e){
        stars[x].addEventListener(e, showRating);
    })
}
function showRating(e){
    let type = e.type;
    // console.log(type)
    let starValue = this.starValue;
    // console.log(starValue)
    if(type === 'click'){
        if(starValue > 0 ){
            output.innerHTML = `You rated this image ${starValue} stars .`;
        }
        // else(starValue = 1){
        //     output.innerHTML = `You rated this image ${starValue} stars .`;
        // }
    }

    stars.forEach(function(elem, ind){
        if(type === 'click'){
            if(ind< starValue){
                elem.classList.add("orange");
            }
            else{
                elem.classList.remove("orange");
            }
        }
        if(type === 'mouseover'){
            if(ind< starValue){
                elem.classList.add("yellow");
            }
            else{
                elem.classList.remove("yellow");
            }
        }
        if(type === 'mouseout'){
            elem.classList.remove("yellow")
        }
    })
}
function nextPage(){
    window.location.reload();
}
