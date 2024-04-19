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
            showCardBySelectedBtn(clickedBtn.innerText);
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
const showCardBySelectedBtn = (selectedBtn) =>{
    let cards = document.querySelectorAll('.consumers__card');
    cards.forEach(card => {
        card.classList.remove('consumers__card_visible');
        card.querySelectorAll('.consumers__card-title').forEach(title =>{
            if(selectedBtn == title.innerText){
                card.classList.add('consumers__card_visible');
            }
        })
    })
}