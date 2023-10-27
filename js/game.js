let canvas;
let ctx;
let world = World();


function init() {
     canvas = document.getElementById('canvas');
     ctx = canvas.getContext('2d');

     console.log('My charcater is', world.character);
}

