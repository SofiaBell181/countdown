gsap.from('#head', 2, {
    delay: 1,
    y:-100,
    opacity: 0
})

gsap.to('#module_inner', 2, {
    opacity: 1,
    stagger: 1,
    delay: 2.5
})

gsap.from('.btn', 2, {
    rotate: 360,
    delay: 2,
    opacity: 0,
    scale:2
})

gsap.from('#solar_eclipce', 2.5, {
    delay: 3,
    y:100,
    opacity: 0
})




function concertCountDown() {
    const concertDate = new Date('April 08, 2024 04:16');
    const now = new Date();
    const diff = concertDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector('.day').textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector('.hour').textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector('.minute').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/ msInSecond);
    document.querySelector('.second').textContent = displaySecond;

    //меняем склонение
    // Дни
    const displayDays = Math.floor(diff/msInDay);
    const dayinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const dayinRussiaDisplay = dayinRussia (displayDays,['день', 'дня', 'дней']);
    document.querySelector('.day').innerHTML = `${displayDays} <br> ${dayinRussiaDisplay}`;
    // Часы
    const displayHours = Math.floor((diff%msInDay) / msInHour);
    const hourinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const hourinRussiaDisplay = hourinRussia (displayHours,['час', 'часа', 'часов']);
    document.querySelector('.hour').innerHTML = `${displayHours} <br> ${hourinRussiaDisplay}`;
    // Минуты
    const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
    const minuteinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const minuteinRussiaDisplay = minuteinRussia (displayMinutes,['минута', 'минуты', 'минут']);
    document.querySelector('.minute').innerHTML = `${displayMinutes} <br> ${minuteinRussiaDisplay}`;
    // Секунды
    const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
    const secondinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
    }
    const secondinRussiaDisplay = secondinRussia (displaySeconds,['секунда', 'секунды', 'секунд']);
    document.querySelector('.second').innerHTML = `${displaySeconds} <br> ${secondinRussiaDisplay}`;

    if (diff <=0) {
    document.querySelector('.day').textContent = 0;
    document.querySelector('.hour').textContent = 0;
    document.querySelector('.minute').textContent = 0;
    document.querySelector('.second').textContent = 0;
    clearInterval(timeID);
    concertStart()
    }
    }

    let timeID = setInterval(concertCountDown, 1000);

    function concertStart() {
    const par = document.querySelector('.par');
    const parDay = document.querySelector('.parDay');
    const parHour = document.querySelector('.parHour');
    const parMinute = document.querySelector ('.parMinute');
    const parSecond = document.querySelector ('.parSecond');
    ((par.textContent = 'Смотреть на солнце во время затмения без защиты глаз от ультрафиолетового и инфракрасного излучения нельзя, т.к. это может оказать негативное воздействие на ваше зрение! Для предотвращения возникновения травм вы можете надеть пару защитных очков, разработанных специально для просмотра солнечного затмения.') && (parDay.textContent = 'дней') && (parHour.textContent = 'часов') && (parMinute.textContent = 'минут') 
    && (parSecond.textContent = 'секунд'));

    par.classList.add('parStyle');
    }
    
    const button = document.querySelector('.btn');
    const audio = document.querySelector('#myAudio');
    button.addEventListener('click', () => {
    if (audio.paused) {
    audio.play();
    button.classList.toggle('pause')
    }
    else {
    audio.pause();
    button.classList.toggle('pause');
    }
    })

    
