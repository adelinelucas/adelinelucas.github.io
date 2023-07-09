window.addEventListener("DOMContentLoaded", (event) => {
    const wheelSound = document.getElementById('wheel');
    const applauseSound = document.getElementById('applause');
    const box = document.getElementById('box')
    const boxEl = document.getElementById('mainbox')
    const startWheel = document.getElementById('startWheel')

    startWheel.addEventListener('click', ()=>{
        spin(wheelSound,box,boxEl, startWheel)
    })
  });

const shuffle = (myArr) =>{
    let randomIndex= Math.floor(Math.random() * myArr.length);
    return [myArr[randomIndex]];
}

const getRandomTotemAnimal = () =>{
    let licorneEl = shuffle([1890,2250,2610])
    let taupeEl = shuffle([1850,2210,2570])
    let orqueEl = shuffle([1770,2130,2490])
    let fourmisEl = shuffle([1810,2170,2530])
    let aigleEl = shuffle([1750,2210,2470])
    let zebreEl = shuffle([1630,1990,2350])
    let lionEl = shuffle([1570,1930,2290])
    let concombreEl = shuffle([1210,1780,2670])
    let dinoEl = shuffle([1570,1930,2290])
    let pouletEl = shuffle([1570,1930,2290])

    let rotation = shuffle([
        licorneEl[0], taupeEl[0], orqueEl[0], fourmisEl[0], aigleEl[0],zebreEl[0], lionEl[0],concombreEl[0],dinoEl[0], pouletEl[0]
    ])

    if(licorneEl.includes(rotation[0])) selectItem = 'Licorne';
    if(taupeEl.includes(rotation[0])) selectItem = 'Taupe';
    if(orqueEl.includes(rotation[0])) selectItem = 'Orque';
    if(fourmisEl.includes(rotation[0])) selectItem = 'Fourmis';
    if(aigleEl.includes(rotation[0])) selectItem = 'Aigle';
    if(zebreEl.includes(rotation[0])) selectItem = 'Zébre';
    if(concombreEl.includes(rotation[0])) selectItem = 'Concombre des mers';
    if(dinoEl.includes(rotation[0])) selectItem = 'Dinosaure';
    if(pouletEl.includes(rotation[0])) selectItem = 'Poulet';
    return [selectItem, rotation];
}

const spin = (wheelSound,box,boxEl, startWheel ) =>{
    wheelSound.play();
    let [selectItem] = getRandomTotemAnimal();
    let rotation = getRandomTotemAnimal()[1][0];
    box.style.setProperty('transition', 'all ease 5s');
    box.style.transform = `rotate(${rotation}deg)`;

    setTimeout(()=>{
        wheelSound.pause();
        displayResult(selectItem, boxEl);
        const btnStartAgain = document.getElementById('startAgain');
        startAgain(btnStartAgain, startWheel);
        setTimeout(()=>{
            box.style.setProperty('transition', 'initial');
            box.style.transform = "rotate(90deg)";  
        },6000)
    },4500)
}

const displayResult = (selectItem, boxEl) =>{
    let maleAnimal ='aigle zébre concombre dinosaure poulet' ;
    let animalTotemGenre = 'une ';
    maleAnimal.split(' ').forEach(idx => {
        if(idx === selectItem.toLowerCase()){
            return animalTotemGenre = 'un '
        }
    });
    let resultEl= document.createElement('div');
    resultEl.classList.add('resultModale');
    let resultContent = `
        <aside class="w-full overflow-hidden flex-wrap py-4">
            <h4 class="text-pop-yellow text-lg font-bold text-center break-words w-full flex-wrap pb-4">Résultats de votre test scientifique ! <span class="text-sm font-normal block">(oui oui)</span></h4>

            <p class="w-full flex-wrap absolute bottom-[50%] left-[20%]">Votre animal totem est ${animalTotemGenre} <span class="font-bold text-pop-blue italic"> ${selectItem}</span></p>

            <button id="startAgain" class="bg-pop-purple rounded py-3 px-2 font-bold absolute bottom-2 left-[35%] m-auto">Je relance le test</button>
        </aside>
    `
    // <img src='' alt='illustration de l'animal totem' />

    resultEl.innerHTML = resultContent;
    boxEl.append(resultEl)
}

const startAgain = (btnStartAgain, startWheel) =>{
    if(btnStartAgain){
        btnStartAgain.addEventListener('click', ()=>{
            const resultModal = document.querySelector('.resultModale');
            resultModal.remove();
            startWheel.click();
        })
    }
}