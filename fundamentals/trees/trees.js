// Our representation of the DOM as a JS object.
const root = document.getElementById('root');

const ourTree = {
  // YOUR CODE
  redBox: {
    style: {
      backgroundColor: 'red',
      width: '100px',
      height: '100px',
      border: '1px'
    },
    button; {

    },
  //   span: {

  //   },
  //   greenBox: {
  //     style: {
  //       backgroundColor: 'green',
  //       width: '100px',
  //       height: '100px',
  //       border: '1px'
  //     }
  //   }
  // }
};

const DOMRenderer = {
  append: (node, child) => node.appendChild(child),
  create: type => document.createElement(type),
  createText: str => document.createTextNode(str),
  remove: el => el.parentNode.removeChild(el),
};

// The function that uses the rendering API object above (DOMRenderer) to build the page as expected!
const treeMaker = (soil, tree, renderer) => {
  // YOUR CODE
  const redBox = renderer.create('div')
  const text = renderer.createText('hello')
  // const button = renderer.create('button')
  redBox.style.backgroundColor = 'red'
  redBox.style.width = '100vw'
  renderer.append(soil, redBox)
  renderer.append(redBox, text)
  // renderer.append(redBox, button)

};

// DONT TOUCH BELOW
treeMaker(root, ourTree, DOMRenderer);

window.treeMaker = treeMaker;
window.ourTree = ourTree;
window.DOMRenderer = DOMRenderer;
