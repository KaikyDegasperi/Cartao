const d= new Date();
let dia= d.getDate();                    
let mes= d.getMonth()+1;
let ano= d.getFullYear();                   
let hora=d.getHours();                   
let minuto=d.getMinutes();                   
let data= dia+'/'+mes+'/'+ano+'/:'+hora+':'+minuto;                   
document.getElementById("tempo").innerHTML=data;