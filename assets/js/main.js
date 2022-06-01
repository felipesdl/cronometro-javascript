
function relogio(){

    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;

    function getTimeFromSecods(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR", {hour12: false, timeZone:"UTC"});
    }

    function startClock(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeFromSecods(segundos)
        },1000);
    }

    document.addEventListener("click", function(e){
        const el = e.target;

        if(el.classList.contains("iniciar")){
            relogio.classList.remove("pausado")
            clearInterval(timer);
            startClock();
        }
        if(el.classList.contains("pausar")){
            relogio.classList.add("pausado")
            clearInterval(timer);
        }
        if(el.classList.contains("zerar")){
            relogio.classList.remove("pausado")
            clearInterval(timer);
            relogio.innerHTML = "00:00:00"
            segundos = 0;
        }
    });
};

relogio();