
let moon = document.getElementById('moon');
let cityleft = document.getElementById('cityleft');
let cityright = document.getElementById('cityright');
let heroText = document.querySelector('.hero p')

window.addEventListener("scroll", ()=>{
    let scrollvalue = window.scrollY;
    moon.style.top=scrollvalue * 0.8 + "px";
    heroText.style.marginTop= scrollvalue * 1 + "px";
    cityleft.style.left=scrollvalue * -1.2 + "px" ;
    cityright.style.left=scrollvalue * 1.2 + "px";
})

document.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
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

setInterval(displayUserIP, 3000);