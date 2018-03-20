const {Button, Composite, TextView, ui} = require('tabris');

// Create composites and append children to them
// Create a push button that counts up on selection


let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(ui.contentView);

let count = 0;

new Button({
  left: 10, top: 10,
  text: 'Button'
}).on('select', ({target}) => target.text = 'Pressed ' + (++count) + ' times')
  .appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%', 
  alignment: 'center',
  text: 'Composite 1'
}).appendTo(composite1);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#ef0000'
}).appendTo(ui.contentView);

new TextView({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);