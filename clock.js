



function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log( hours.minutes.seconds );

    hour = updateTime(hour);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    document.querySelector("#clock").textContent = '${hour} : ${minutes} : {seconds}';
    
    let time setTimeout( () => currentTime ,1000 ); 
}

function updateTime(num) {
    if(num < 10) {
        return "0" + num;
    } else {
        return num;
    }

}