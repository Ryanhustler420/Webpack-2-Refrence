const button = document.createElement('button');
button.innerText = "Click Me";
button.onclick = () => {
    System.import('./image_Viewer')
    .then(module => {
      console.log(module);
    });
};

document.body.appendChild(button);
