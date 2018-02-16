import _ from 'lodash';
import './stylus/index.styl';
import MyImage from './icon.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var icon = new Image();
    icon.src = MyImage;
    element.appendChild(icon);

    //console.log(Data);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the update printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}