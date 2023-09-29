document.querySelector("button").addEventListener("click", myFunction);
function myFunction() {
    alert("Hello World..!!");
}

//TWO TYPES OF EVENT LISTENER
//=============================
// =>Event Bubbling(In bubbling the inner most element's event is handled first and then the outer)(Default-Value : 'false')
//   Example : <div>
//               <p>Hello..How R U ..?</p>
//             </div> ,Here Event of 'p' is handled 1st & then 'div' is handled
// 
// 
//=>Event Capturing(In bubbling the outer most element's event is handled first and then the inner)(Default-Value : 'true')
//   Example : <div>
//               <p>Hello..How R U ..?</p>
//             </div> ,Here Event of 'div' is handled 1st & then 'p' is handled
// SYNTAX
// ======
//addEventListener(event, function, useCapture); Here 'useCapture' is replaced by either true or false to change different types of event Listener
