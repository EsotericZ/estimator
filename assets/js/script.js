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

// MATERIAL SELECTION
let materialType = document.createElement("select");
materialType.id = "materialType";
let materialThick = document.createElement("select");
materialThick.id = "materialThick";

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
// let brake = document.createElement("button");
// brake.innerHTML = "Press Brake";
// brake.id = "brake";
// let hard = document.createElement("button");
// hard.innerHTML = "Hardware";
// hard.id = "hard";
// let roll = document.createElement("button");
// roll.innerHTML = "Roll Form";
// roll.id = "roll";
// let iron = document.createElement("button");
// iron.innerHTML = "Iron";
// iron.id = "iron";
// let tube = document.createElement("button");
// tube.innerHTML = "Tube Bender";
// tube.id = "tube";
// let mill = document.createElement("button");
// mill.innerHTML = "Mill";
// mill.id = "mill";
// let lathe = document.createElement("button");
// lathe.innerHTML = "Lathe";
// lathe.id = "lathe";
// let tap = document.createElement("button");
// tap.innerHTML = "Tap";
// tap.id = "tap";
// let spot = document.createElement("button");
// spot.innerHTML = "Spot Weld";
// spot.id = "spot";
// let weld = document.createElement("button");
// weld.innerHTML = "Weld";
// weld.id = "weld";
// let robot = document.createElement("button");
// robot.innerHTML = "Robot";
// robot.id = "robot";

// ALL BUTTONS
// let buttons = [startEst, cancel, finished, back, individual, 
//     assembly, laser, tlaser, slaser, saw, punch, brake, hard,
//     roll, iron, tube, mill, lathe, tap, spot, weld, robot];

let buttons = [startEst, cancel, finished, back, individual, 
    assembly, laser, tlaser, slaser, saw, punch];    

// VARIABLES
let empty = [''];

let carbonMaterials = [
    'CRS',
    'GALV',
    'A572',
];

let hotRolledMaterials = [
    'HRS',
]

let stainlessMaterials = [
    'SSS',
    'SSS316',
    'SSS-PVC-2B',
    'SSS-PVC-4',
    'SSS-PVC-8',
];

let aluminumMaterials = [
    'ALS',
    'ALS6061',
    'ALS-PVC',
];

let allMaterials = empty.concat(carbonMaterials).concat(stainlessMaterials).concat(aluminumMaterials);

let carbonThickness = [
    '',
    '11Ga',
    '12Ga',
    '13Ga',
    '14Ga',
    '16Ga',
    '18Ga',

];

let stainlessThickness = [
    '',
    'New',
    'Old',
];

let aluminumThickness = [
    '',
    'Why',
    'Try',
];


// START //

let estimate = [];
let laserOp = [];
let laserChosen = 0;
document.body.appendChild(startEst);
// startEst.addEventListener('click', quoteType);
startEst.addEventListener('click', materialSelection);


function materialSelection() {
    removeButtons()
    document.body.appendChild(materialType);
    allMaterials.forEach((x) => {
        materialType.appendChild(new Option(x, x));
    })
    materialType.onchange = thicknessSelection;
}

function thicknessSelection() {
    let material = materialType.value;
    let materialThickExist = document.getElementById('materialThick');
    if (typeof(materialThickExist) != 'undefined' && materialThickExist != null) {
        materialThick.innerHTML = "";
    } else {
        document.body.appendChild(materialThick);
    }
    // if ((material === 'CRS') || (material === 'HRS')) {
    if (carbonMaterials.includes(material)) {
        carbonThickness.forEach((thick) => {
            materialThick.appendChild(new Option(thick, thick));
        });
    } else if (stainlessMaterials.includes(material)) {
        stainlessThickness.forEach((thick) => {
            materialThick.appendChild(new Option(thick, thick));
        });
    } else if (aluminumMaterials.includes(material)) {
        aluminumThickness.forEach((thick) => {
            materialThick.appendChild(new Option(thick, thick));
        });
    } else {
        empty.forEach((thick) => {
            materialThick.appendChild(new Option(thick, thick));
        });
    }
    materialThick.onchange = firstOp;
}

const firstOp = () => {
    document.body.appendChild(laser);
    laser.addEventListener('click', laserOps);
    document.body.appendChild(slaser);
    slaser.addEventListener('click', slaserOps);
    document.body.appendChild(punch);
    punch.addEventListener('click', punchOps);
}

function quoteType() {
    removeButtons()    
    document.body.appendChild(individual);
    document.body.appendChild(assembly);
    document.body.appendChild(cancel);
    individual.addEventListener('click', machine);
    assembly.disabled = true;
    assembly.id = "off";
    cancel.addEventListener('click', cancelEst);
    // laserOp = ['Finished', 'Brake', 'Hardware', 'Tap', 'Weld', 'Mill', 'Roll', 'Cancel'];
    laserOp = ['Brake', 'Hardware', 'Tap', 'Weld', 'Mill', 'Roll'];
}

function machine() {
    removeButtons()    
    document.body.appendChild(laser);
    laser.addEventListener('click', laserOps);
    document.body.appendChild(tlaser);
    tlaser.addEventListener('click', tlaserOps);
    document.body.appendChild(slaser);
    slaser.addEventListener('click', slaserOps);
    document.body.appendChild(punch);
    punch.addEventListener('click', punchOps);
    document.body.appendChild(saw);
    saw.addEventListener('click', sawOps);
    document.body.appendChild(cancel);
    cancel.addEventListener('click', cancelEst);
}

function laserOps() {
    if (!estimate.includes("101 ENGIN")) {
        estimate.push("101 ENGIN", "203 LASER");
    }
    laserChosen = 1;
    console.log(estimate)
    removeLists();
    removeButtons();
    document.body.appendChild(finished);
    laserOp.forEach(option => {
        let button = document.createElement('button');
        button.innerHTML = option; 
        button.id = option;
        button.classList.add("button");
        document.body.appendChild(button);
        button.addEventListener('click', function() {
            if (button.id === "selected") {
                button.id = option;
                button.name = "";
            } else {
                button.id = "selected";
                button.name = option;
            }
        });
    })
    document.body.appendChild(cancel);
    finished.addEventListener("click", finishLaser);
}

function finishLaser() {
    removeButtons()
    for (let i = 0; i < laserOp.length; i++) {
        let num = document.getElementsByClassName("button");
        console.log(num[0])
        if (num[0].id === "selected") {
            estimate.push(num[0].name)
        }
        document.body.removeChild(num[0]);
    }
    console.log('laser review')
    console.log(estimate)
}

function chosenOp(chosen) {
    // for (let i = 0; i < laserOp.length; i++) {
    //     let num = document.getElementsByClassName("button");
    //     document.body.removeChild(num[0]);
    // }
    // let selectedButton = chosen.target;
    // estimate.push(selectedButton.id)
    // let index = laserOp.indexOf(selectedButton.id);
    // if (index > -1) {
    //     laserOp.splice(index, 1);
    // }
    // if (selectedButton.id === "Finished") {
    //     review()
    // } else if (selectedButton.id == "Cancel") {
    //     cancelEst()
    // } else {
    //     laserOps()
    // }
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
    if (laserChosen === 1) {
        for (let i = 0; i < laserOp.length; i++) {
            let num = document.getElementsByClassName("button");
            document.body.removeChild(num[0]);
        }
    }
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

const removeLists = () => {
    // let removeMaterialThick = document.body.getElementById('materialThick');
    document.body.removeChild(materialThick);
    document.body.removeChild(materialType);
}