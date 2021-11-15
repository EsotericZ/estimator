let startEst = document.createElement("button");
startEst.innerHTML = "Start";
startEst.id = "startEst";

// QUOTE TYPE
let individual = document.createElement("button");
individual.innerHTML = "Individual Part";
individual.id = "individual";
let assembly = document.createElement("button");
assembly.innerHTML = "Assembly";
assembly.id = "assembly";

// MACHINE
let laser = document.createElement("button");
laser.innerHTML = "Laser";
laser.id = "laser";
let tlaser = document.createElement("button");
tlaser.innerHTML = "Tube Laser";
tlaser.id = "tlaser";
let slaser = document.createElement("button");
slaser.innerHTML = "Static Laser";
slaser.id = "slaser";
let saw = document.createElement("button");
saw.innerHTML = "Saw";
saw.id = "saw";
let punch = document.createElement("button");
punch.innerHTML = "Punch";
punch.id = "punch";

// OPERATIONS
let brake = document.createElement("button");
brake.innerHTML = "Press Brake";
let hard = document.createElement("button");
hard.innerHTML = "Hardware";


// START //

let estimate = [];
document.body.appendChild(startEst);
startEst.addEventListener('click', quoteType);

function quoteType() {
    document.body.removeChild(startEst);
    document.body.appendChild(individual);
    document.body.appendChild(assembly);
    individual.addEventListener('click', machine);
}

function machine() {
    document.body.removeChild(individual);
    document.body.removeChild(assembly);
    document.body.appendChild(laser);
    document.body.appendChild(tlaser);
    document.body.appendChild(slaser);
    document.body.appendChild(punch);
    document.body.appendChild(saw);
    laser.addEventListener('click', laserOps);
    tlaser.addEventListener('click', tlaserOps);
    slaser.addEventListener('click', slaserOps);
    punch.addEventListener('click', punchOps);
    saw.addEventListener('click', sawOps);
}

function laserOps() {
    document.body.removeChild(laser);
    document.body.removeChild(tlaser);
    document.body.removeChild(slaser);
    document.body.removeChild(punch);
    document.body.removeChild(saw);
}

function tlaserOps() {
    document.body.removeChild(laser);
    document.body.removeChild(tlaser);
    document.body.removeChild(slaser);
    document.body.removeChild(punch);
    document.body.removeChild(saw);
}

function slaserOps() {
    document.body.removeChild(laser);
    document.body.removeChild(tlaser);
    document.body.removeChild(slaser);
    document.body.removeChild(punch);
    document.body.removeChild(saw);
}

function punchOps() {
    document.body.removeChild(laser);
    document.body.removeChild(tlaser);
    document.body.removeChild(slaser);
    document.body.removeChild(punch);
    document.body.removeChild(saw);
}

function sawOps() {
    document.body.removeChild(laser);
    document.body.removeChild(tlaser);
    document.body.removeChild(slaser);
    document.body.removeChild(punch);
    document.body.removeChild(saw);
}