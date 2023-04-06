const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [ '/img/images/pic1.jpg','/img/images/pic2.jpg','/img/images/pic3.jpg','/img/images/pic4.jpg','/img/images/pic5.jpg' ]

/* Declaring the alternative text for each image file */
const alt = [ 'picture of eye','waves','flowers','heiroglyphics','butterfly' ]
/* Looping through images */
for (const image of images) 
{
const newImage = document.createElement('img');
newImage.setAttribute('src', images[image]);
newImage.setAttribute('alt',alt[image] );
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e =>
{
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;
}
);
}

/* Wiring up the Darken/Lighten button */

// btn.addEventListener('click',{}=>
// {
// if (overlay)
// {
// btn.textContent =='Lighten';
// overlay.style.backgroundcolor;
// }
// else
// {
//     btn.textContent =='Darken';
//     overlay.style.backgroundcolor;
// }
// });
