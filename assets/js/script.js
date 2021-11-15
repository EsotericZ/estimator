// START-STOP
let startEst = document.createElement("button");
startEst.innerHTML = "Start";
startEst.id = "startEst";
let cancel = document.createElement("button");
cancel.innerHTML = "Cancel";
cancel.id = "cancel";
let finished = document.createElement("button");
finished.innerHTML = "Finished";
finished.id = "finished";
let back = document.createElement("button");
back.innerHTML = "Back";
back.id = "back";

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
brake.id = "brake";
let hard = document.createElement("button");
hard.innerHTML = "Hardware";
hard.id = "hard";
let roll = document.createElement("button");
roll.innerHTML = "Roll Form";
roll.id = "roll";
let iron = document.createElement("button");
iron.innerHTML = "Iron";
iron.id = "iron";
let tube = document.createElement("button");
tube.innerHTML = "Tube Bender";
tube.id = "tube";
let mill = document.createElement("button");
mill.innerHTML = "Mill";
mill.id = "mill";
let lathe = document.createElement("button");
lathe.innerHTML = "Lathe";
lathe.id = "lathe";
let tap = document.createElement("button");
tap.innerHTML = "Tap";
tap.id = "tap";
let spot = document.createElement("button");
spot.innerHTML = "Spot Weld";
spot.id = "spot";
let weld = document.createElement("button");
weld.innerHTML = "Weld";
weld.id = "weld";
let robot = document.createElement("button");
robot.innerHTML = "Robot";
robot.id = "robot";

// ALL BUTTONS
let buttons = [startEst, cancel, finished, back, individual, 
    assembly, laser, tlaser, slaser, saw, punch, brake, hard,
    roll, iron, tube, mill, lathe, tap, spot, weld, robot];



// START //

let estimate = [];
document.body.appendChild(startEst);
startEst.addEventListener('click', quoteType);

function quoteType() {
    removeButtons()    
    document.body.appendChild(individual);
    document.body.appendChild(assembly);
    document.body.appendChild(cancel);
    individual.addEventListener('click', machine);
    cancel.addEventListener('click', cancelEst);
}

function machine() {
    removeButtons()    
    document.body.appendChild(laser);
    document.body.appendChild(tlaser);
    document.body.appendChild(slaser);
    document.body.appendChild(punch);
    document.body.appendChild(saw);
    document.body.appendChild(cancel);
    laser.addEventListener('click', laserOps);
    tlaser.addEventListener('click', tlaserOps);
    slaser.addEventListener('click', slaserOps);
    punch.addEventListener('click', punchOps);
    saw.addEventListener('click', sawOps);
    cancel.addEventListener('click', cancelEst);
}

function laserOps() {
    removeButtons()    
    document.body.appendChild(finished);
    document.body.appendChild(brake);
    document.body.appendChild(hard);
    document.body.appendChild(tap);
    document.body.appendChild(mill);
    document.body.appendChild(roll);
    document.body.appendChild(cancel);
    finished.addEventListener('click', review);
    cancel.addEventListener('click', cancelEst);
}

function tlaserOps() {
    removeButtons()
}

function slaserOps() {
    removeButtons()
}

function punchOps() {
    removeButtons()
}

function sawOps() {
    removeButtons()
}

function review() {
    removeButtons()
}

function cancelEst() {
    removeButtons()
    estimate = [];
    document.body.appendChild(startEst);
    startEst.addEventListener('click', quoteType);
}

function removeButtons() {
    for (let i = 0; i < buttons.length; i++) {
        if (document.getElementById(buttons[i].id)) {
            document.body.removeChild(buttons[i]);
        }
    }
}