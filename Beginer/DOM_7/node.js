const para = document.createElement('p');
const node = document.createTextNode('Amar sonar bangla');
para.appendChild(node);

const element = document.getElementById('div1');
element.append(para)

const parent = document.getElementById('div1')
const child = document.getElementById('new');
parent.replaeChild(para, child)


