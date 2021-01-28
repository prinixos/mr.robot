window.addEventListener('load',e=>{
    document.getElementById('load').style.display="block"
    setTimeout(e=>{
        document.getElementById('load').style.pointerEvents="none";
        document.getElementById('load').style.opacity="0";

    },3000)
})