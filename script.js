function updateTime() {
    
    const clock = new Date();

    let one=clock.getHours();
    let two=clock.getMinutes();
    let three=clock.getSeconds();

    let hour = document.querySelector('.hours').innerHTML = one;
    let minute = document.querySelector('.minutes').innerHTML = two;
    let second = document.querySelector('.seconds').innerHTML = three;


}
setInterval(updateTime, 1000);
