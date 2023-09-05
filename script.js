'.usestrict';

const sounds = {
    'A':'boom.wav',
    'S':'clap.wav',
    'D':'hihat.wav',
    'F':'kick.wav',
    'G':'openhat.wav',
    'H':'ride.wav',
    'J':'snare.wav',
    'K':'tink.wav',
    'L':'tom.wav',
}

const divCreate = (text) =>{
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.querySelector(`#container`).appendChild(div);
}

const show = (sounds) => Object.keys(sounds).forEach(divCreate);

const playSound = (letter) =>{
    const audio = new Audio(`./src/sounds/${sounds[letter]}`)
    audio.play();
}

const addEffect = (letter) => document.getElementById(letter).classList.add('active')

const rmvEffect = (letter) => {
    const div = document.getElementById(letter)
    const rmvActive = () => div.classList.remove('active')
    div.addEventListener('transitionend',rmvActive)


}

const playDiv = (divEvent) =>{

    let letter = ''
    if(divEvent.type == 'click'){
     letter = divEvent.target.id;
    }else{
     letter = divEvent.key.toUpperCase();
    }

    const verifiedLetter = sounds.hasOwnProperty(letter)
    if(verifiedLetter){
        playSound(letter)
        addEffect(letter)
        rmvEffect(letter)
    }
}

show(sounds);
document.querySelector('#container').addEventListener('click', playDiv);
window.addEventListener('keydown',playDiv);