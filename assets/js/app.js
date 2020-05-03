const deg = 6;
const clock = document.querySelector('.clock');
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const switchMode = document.querySelector('#switchMode');
const switchModeText = document.querySelector('.switch-mode h3');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg; 
  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
})

 const handleChange = () => {
  if (switchMode.checked == true){
    switchModeText.innerText = 'Dark'
    clock.style.background = '#092c3e url("assets/images/clock.png")'
    clock.style.backgroundSize = 'cover'
    clock.style.border = '4px solid #092c3e'
    clock.style.boxShadow = `0 -15px 15px rgba(255, 255, 255, 0.05),
                             inset 0 -15px 15px rgba(255, 255, 255, 0.05),
                             0 15px 15px rgba(0, 0, 0, 0.3),
                             inset 0 15px 15px rgba(0, 0, 0, 0.3)
                            `
    clock.style.setProperty("--center-color", "#fff")
    hr.style.setProperty("--hr-color", "#fff")
    mn.style.setProperty("--mn-color", "#fff")
    sc.style.setProperty("--sc-color", "#ff105e")
  } else {
    switchModeText.innerText = 'Light'

    clock.style.background = '#fff url("assets/images/clock.png")'
    clock.style.backgroundSize = 'cover'
    clock.style.border = '20px solid #fff'
    clock.style.boxShadow = `inset 0 0 30px rgba(0, 0, 0, 0.1),
                             0 20px 20px rgba(0, 0, 0, 0.2),
                             0 0 0 4px rgba(255, 255, 255, 1)
                            `

    clock.style.setProperty("--center-color", "#848484")
    hr.style.setProperty("--hr-color", "#848484")
    mn.style.setProperty("--mn-color", "#dcdcdc")
    sc.style.setProperty("--sc-color", "#ff6767")
  }
}
