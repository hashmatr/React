function customRender(reactElement,container){
 const domElement = document.createElement(reactElement.type)
 domElement.innerHTML = reactElement.children
 domElement.setAttribute('href',reactElement.props.href)
 domElement.setAttribute('target',reactElement.props.target)
 container.appendChild(domElement)
}
const reactElement = {
    type : 'a',
    props:{
        href : "http.//google.com",
        target : '_blank'
    },
    children : 'Click me to visit google'
}
const mainroot = document.querySelector("#root")
customRender(reactElement,mainroot)