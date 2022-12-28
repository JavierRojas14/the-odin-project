function getText(i) {
    let text;
    switch (i) {
        case 10:
          text = 'Countdown 10';
          break;
  
        case 0:
          text = 'Blast Off!';
          break;
  
        default:
          text = i;
          break;
    }
    return text;
  }
  
  let output = document.querySelector('.output');
  output.innerHTML = '';
  
  // let i = 10;
  
  for (let i = 10; i > -1; i--) {
    const para = document.createElement('p');
    let paragraphText = getText(i);
  
    para.textContent = paragraphText;
    output.appendChild(para);
  }