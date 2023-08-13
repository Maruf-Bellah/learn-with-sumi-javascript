const href = document.getElementById('href');
href.innerHTML = "Window href" + location.href;


const hostname = document.getElementById('hostname');
hostname.innerHTML = "Host Name" + location.hostname;


const pathname = document.getElementById('pathname');
pathname.innerHTML = "Path Name" + location.pathname;

const protocol = document.getElementById('protocol');
protocol.innerHTML = "Protocol Name" + ' ' + location.protocol;

const port = document.getElementById('port');
port.innerHTML = "Port Name" + location.port;


function newDoc(){
    window.location.assign('https://www.google.com/')
}