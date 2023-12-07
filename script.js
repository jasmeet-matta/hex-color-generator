let timeoutId = null;
let hexCodeString;

document.body.addEventListener('mousemove', (event) => {
  if (!timeoutId) {
    timeoutId = setTimeout(() => {
      colorChanger();
      timeoutId = null;
    }, 400);
  }
  // const clientX = event.clientX;
  // const clientY = event.clientY;

  // // tooltip.style.visibility = 'visible';
  // tooltip.style.top = clientY - tooltip.offsetHeight + 'px';
  // tooltip.style.left = clientX + 'px'
});

function colorChanger() {
  let title = document.getElementById('header');
  let generatedColor = generateHex();
  hexCodeString = generatedColor;
  title.innerHTML = `Hex code: ${generatedColor}`;
  document.body.style.backgroundColor = generatedColor;
}
colorChanger();

function generateHex() {
  let hexStr = '0123456789abcdef';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += hexStr[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// window.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
//   let cX,cY;
//   cX = event.pageX;
//   cY = event.pageY;
//   console.log(cX,cY)
//   tooltip.style.top = cX + 'px';
//   tooltip.style.left = cX + 'px';
//   tooltip.style.visibility = 'visible';
//   setTimeout(()=>{
//     tooltip.style.visibility = 'hidden';
//   },800)
// })

function triggerExample1() {
  // get the container
  const element = document.querySelector('#header');
  // Create a fake `textarea` and set the contents to the text
  const storage = document.createElement('textarea');
  storage.value = element.innerHTML.slice(10);
  element.appendChild(storage);
  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
}

const tooltip = document.getElementById('tooltip');

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  const clientX = event.clientX - 15;
  const clientY = event.clientY - 20;

  tooltip.style.visibility = 'visible';
  tooltip.style.top = clientY - tooltip.offsetHeight + 'px';
  tooltip.style.left = clientX + 'px';

  triggerExample1();
  // navigator.clipboard.writeText(hexCodeString).then(() => {
  //   console.log('copied hex');
  // });
  console.log(hexCodeString);
  setTimeout(() => {
    tooltip.style.visibility = 'hidden';
  }, 600);
});
