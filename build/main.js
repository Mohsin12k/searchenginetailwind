const showHide = document.querySelector('.showHide');
const magnifyingGlass = showHide.querySelector('i');
const bodyBlur = document.querySelector('.bodyBlur');
const inputSearch = document.querySelector('.inputSearch');
const inputSearchBtn = document.querySelector('.inputSearchBtn');
const clickSearch = document.querySelector('.clickSearch');
const search = document.getElementById('search');

showHide.addEventListener('click', ()=>{
    magnifyingGlass.classList.toggle('fa-solid');
    showHide.classList.toggle('after:hidden');
    showHide.classList.toggle('before:hidden');
    if(magnifyingGlass.classList.contains('fa-solid')){
        bodyBlur.style.backdropFilter = 'none';
        inputSearch.style.transform = 'scale(0)';
        inputSearchBtn.style.transform = 'scale(0)';
    } else{
    bodyBlur.style.backdropFilter = 'blur(12px)';
    inputSearch.style.transform = 'scale(1)';
    inputSearchBtn.style.transform = 'scale(1)';
    }
});

const googleSearch = () =>{
    const query = search.value.trim();
    if(!query) return;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
}

clickSearch.addEventListener('click', googleSearch);

search.addEventListener('keydown', (e)=>{
    if(e.key === "Enter"){
        googleSearch()
    }
});