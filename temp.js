let moon = document.getElementById('moon');
let cityleft = document.getElementById('cityleft');
let cityright = document.getElementById('cityright');
let heroText = document.querySelector('.hero p');

window.addEventListener("scroll", () => {
    let scrollvalue = window.scrollY;
    moon.style.top = scrollvalue * 0.8 + "px";
    heroText.style.marginTop = scrollvalue * 1 + "px";
    cityleft.style.left = scrollvalue * -1.2 + "px";
    cityright.style.left = scrollvalue * 1.2 + "px";
});

async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return 'Unknown';
    }
}

async function displayUserIP() {
    const userIP = await getUserIP();
    const userIPElement = document.getElementById('userIP');
    userIPElement.textContent = `Your IP address is: ${userIP}`;
}

setInterval(displayUserIP, 4500);

document.addEventListener("DOMContentLoaded", function() {
    startHackingAnimation();
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 3000);
});

function startHackingAnimation() {
    const hackingtext = document.querySelector('.loading-text');
    const glitchText = [
        "Establishing connection to core system...",
        "Deciphering encrypted security layers...",
        "Hashing data for authentication...",
        "Translating instructions into binary...",
        "Compiling code into brainfuck language...",
        "Executing sophisticated cyber attack...",
        "Analyzing neural network patterns..."
    ];

    let index = 0;

    const hackingInterval = setInterval(function() {
        hackingtext.textContent = glitchText[index];
        index++;
        if (index === glitchText.length) {
            index = 0;
        }
    }, 500);

    setTimeout(function() {
        clearInterval(hackingInterval);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalCommand = document.getElementById('terminal-command');

    terminalCommand.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = terminalCommand.value.trim();
            terminalCommand.value = '';
            processCommand(command);
        }
    });

    // added terminal
    function processCommand(command) {
        
        if (command === 'access') {
            document.getElementById('terminal').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            
            bootSequence();
        } else {
            const output = executeCommand(command);
            displayOutput(output);
        }
    }

    function executeCommand(command) {
        if (command === 'help') {
            return 'available commands: <br> - access: access the main content';
        } else {
            return 'Command not found. Type "help" to see available commands.';
        }
    }

    function displayOutput(output) {
        const newOutput = document.createElement('div');
        newOutput.innerHTML = output;
        terminalOutput.appendChild(newOutput);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});
