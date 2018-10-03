import small from '../assets/small.jpg';
import '../styles/image_Viewer.css';

export default () => {

  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);
};
