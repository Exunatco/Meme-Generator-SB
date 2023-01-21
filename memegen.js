const memeForm = document.querySelector('#meme-form');
const memeURL = document.querySelector('#meme-img');
const memeTop = document.querySelector('#meme-topLine');
const memeBottom = document.querySelector('#meme-bottomLine');
const results = document.querySelector('.results');


//calls makeMeme function with submit and sends to empty section
memeForm.addEventListener('submit',function(e){
    e.preventDefault();
    const newMeme = makeMeme(memeURL.value,memeTop.value,memeBottom.value);

    results.append(newMeme);
    memeForm.reset();
})
//Remove meme 
results.addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
})

//Function to put together all the values and add classes
function makeMeme(img,top,bottom){
    const memeSpace = document.createElement('div');
    const memeImg = document.createElement('img');
    const memeTop = document.createElement('div');
    const memeBottom = document.createElement('div');

    memeSpace.classList.add('container');

    memeImg.classList.add('memeImg')
    memeImg.src = img;

    memeTop.classList.add('meme', 'memeTop');
    memeTop.innerText = top;

    memeBottom.classList.add('meme', 'memeBottom');
    memeBottom.innerText = bottom


    memeSpace.append(memeTop);
    memeSpace.append(memeImg);
    memeSpace.append(memeBottom);
    return memeSpace;
}

