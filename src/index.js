const button = document.createElement('button');
button.innerText = "Click Me";
button.onclick = () => {
    // this "System.import" help us for code splitting
    System.import('./image_Viewer')
    .then(module => {
      // console.log(module);
      module.default();
    });
};

document.body.appendChild(button);
