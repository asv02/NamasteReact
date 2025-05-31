heading = React.createElement('h1',{id:"heading1"},"Hello world from react")

//Nested elements
h1 = React.createElement('h1',{id:"h1"},"This is heading under three divs")
div3 = React.createElement('div',{id:"h1"},h1)
div2 = React.createElement('div',{id:"div2"},div3)
div1 = React.createElement('div',{id:"div1"},div2)


root = ReactDOM.createRoot(document.getElementById('root'))
console.log("root->",root)
root.render(h1)
