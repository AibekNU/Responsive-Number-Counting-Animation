let valueDisplays = document.querySelectorAll('.num');
let interval = 4000;


valueDisplays.forEach((value) => {
    let starValue = 0;
    let endValue = parseInt(value.getAttribute('data-val'));
    
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        starValue += 1;
        value.textContent = starValue;

        if(starValue == endValue){
            clearInterval(counter);//star and end екеуі тең болғанда counter тоқтайды(санаушы)
        }

    }, duration);//Барлық сандар бірдей уақытта тоқтайды
});