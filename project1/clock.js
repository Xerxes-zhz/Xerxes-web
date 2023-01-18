function getNow(){
    var date = new Date();
    H = date.getHours();
    M = date.getMinutes();
    S = date.getSeconds();
    timeNow = `${H}:${M}:${S}`
    document.getElementById("clock").innerHTML=timeNow
}
setInterval("getNow();",1000);