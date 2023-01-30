
document.getElementById('bot1').addEventListener('click', function() {
    document.getElementById('bot1').style.display = "none";
    document.getElementById('bot2').style.display = "initial"; 
})

document.getElementById('bot2').addEventListener('click', function() {

    document.getElementById('bot2').style.display = "none";
    document.getElementById('bot3').style.display = "initial";  
})

document.getElementById('bot3').addEventListener('click', function() {
    document.getElementById('bot3').style.display = "none";
    document.getElementById('bot4').style.display = "initial";
})

document.getElementById('bot4').addEventListener('click', function() {
    document.getElementById('bot1').style.display = "initial";
    document.getElementById('bot4').style.display = "none";   
})

