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
    let baleineEl = shuffle([1770,2130,2490])
    let homardEl = shuffle([1810,2170,2530])
    let aigleEl = shuffle([1750,2210,2470])
    let zebreEl = shuffle([1630,1990,2350])
    let loupEl = shuffle([1570,1930,2290])
    let pieuvreEl = shuffle([1210,1780,2670])
    let dinoEl = shuffle([1570,1930,2290])
    let pouletEl = shuffle([1570,1930,2290])

    let rotation = shuffle([
        licorneEl[0], taupeEl[0], baleineEl[0], homardEl[0], aigleEl[0],zebreEl[0], loupEl[0],pieuvreEl[0],dinoEl[0], pouletEl[0]
    ])

    if(licorneEl.includes(rotation[0])) selectItem = 'licorne';
    if(taupeEl.includes(rotation[0])) selectItem = 'taupe';
    if(baleineEl.includes(rotation[0])) selectItem = 'baleine';
    if(homardEl.includes(rotation[0])) selectItem = 'homard';
    if(aigleEl.includes(rotation[0])) selectItem = 'aigle';
    if(zebreEl.includes(rotation[0])) selectItem = 'zébre';
    if(pieuvreEl.includes(rotation[0])) selectItem = 'pieuvre';
    if(dinoEl.includes(rotation[0])) selectItem = 'dinosaure';
    if(pouletEl.includes(rotation[0])) selectItem = 'poulet';
    if(loupEl.includes(rotation[0])) selectItem = 'loup ';

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
    let maleAnimal ='aigle zébre homard dinosaure poulet loup' ;
    let animalImg = [
        {nom : 'zébre', img :'🦓'},
        {nom: 'loup', img:'🐺'},
        {nom: 'licorne', img:'🦄'},
        {nom:'baleine', img:'🐳'},
        {nom:'homard', img:'🦞'},
        {nom: 'aigle', img:'🦅'},
        {nom: 'pieuvre', img:'🐙'},
        {nom: 'dinosaure', img:'🦖'},
        {nom: 'poule', img:'🐔'},
    ] 
    // let animalTotemGenre = `une &nbsp;`;
    // maleAnimal.split(' ').forEach(idx => {
    //     if(idx.trim().includes(selectItem.toLowerCase().trim())){
    //         return animalTotemGenre = `un &nbsp;`;
    //     }
    // });
    let results = {};
    animalImg.forEach((idx) =>{
        console.log(selectItem)
        console.log(selectItem.includes(maleAnimal))
        if(selectItem === idx.nom){
            results.nom = idx.nom;
            results.img = idx.img
        }
        if(maleAnimal.includes(selectItem)) {results.genre = `un &nbsp;`}
        else {results.genre = `une &nbsp;`}
    })
    console.log(results)
    let resultEl= document.createElement('div');
    resultEl.classList.add('resultModale');
    resultEl.classList.add('w-9/12');
    let resultContent = `
        <aside class="w-full overflow-hidden flex-wrap py-4">
            <h4 class="text-pop-blue text-lg font-bold text-center break-words w-full flex-wrap pb-4">Résultats de votre test scientifique ! 
                <span class="text-sm font-normal block relative left-[45%] w-fit h-fit">(oui oui)</span>
            </h4>
            <div class="flex flex-col text-center relative top-[15%] items-center ">
                <p class="w-fit flex-wrap">Votre animal totem est ${results.genre}</p>
                <p class="w-fit font-bold text-pop-blue italic text-center capitalize"> ${results.nom}</p>
                <span class="top-[110%]">${results.img}</span>
            </div>
            <button id="startAgain" class="bg-pop-purple rounded py-3 px-2 font-bold absolute bottom-4 left-[35%] m-auto shadow-3xl tracking-wider text-white ">
                Je relance le test
            </button>
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