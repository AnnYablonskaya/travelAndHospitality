window.onload = function(){
    console.log('hello')
    addTagsClick();
}
const addTagsClick = () => {
    document.querySelector('.consumers__btn-block').addEventListener('click', (e) =>{
        console.log(e);
        if(e.target.classList.contains('consumers__btn')){
            let clickedBtn = e.target;
            removeSeletedBtn();
            selectedClickBtn(clickedBtn);
            if(clickedBtn.innerText === "For travelers"){
                
            }else if(clickedBtn.innerText === "For travel organization"){

            }else{

            }
        }
    })
};
const removeSeletedBtn = () =>{
    let tags = document.querySelectorAll('.consumers__btn');
    console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('consumers__btn_colored')
    })
}
const selectedClickBtn = (clickedBtn) =>{
    clickedBtn.classList.add('consumers__btn_colored');

}