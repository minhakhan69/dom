// task 1
a= 10;
b= 5;
c= a+b;
console.log(c);
c=15;
d=10
e=c-d;
console.log(e);
e=5;
f=10;
g=e*f;
console.log(g);
g=50;
h=15;
i=g%h;
console.log(i);
i=50;
i++;
console.log(i);
i=51;
i--;
console.log(i);


// task 2

let Network=['zong','jazz','warid','telenor','ufone'];
console.log('network:',Network);
Network.sort();
console.log('network:',Network);
Network.push('moblink');
console.log('network:',Network);
Network.pop('moblink');
console.log('network:',Network);
function signals(){
    
    // console.log(Network.includes('moblink'));
   let result = Network.includes('jazz')
    console.log(Network.indexOf('moblink'));
    if (result==true){
        console.log('founded');
     }else {
        console.log('Not founded')
     }
}
signals();


// task 3


function handleMouseOver(event) {
   event.target.style.color = 'Green';
 }
 function handleMouseOut(event) {
   event.target.style.color = '';
 }
 const h1Element = document.querySelector('h1');
 const pElement = document.querySelector('p');
 h1Element.addEventListener('mouseover', handleMouseOver);
      h1Element.addEventListener('mouseout', handleMouseOut);

      pElement.addEventListener('mouseover', handleMouseOver);
      pElement.addEventListener('mouseout', handleMouseOut);
// document.getElementById("").addEventListener("mousemove",(event)=>{
   // console.log("Mouse moved to (&{envent.clientX},&{event.clientY})");
// });


// task 4
document.getElementById('submitButton').addEventListener('click', function() {
   let isValid = true;

   // Clear previous error messages
   document.getElementById('nameError').textContent = '';
   document.getElementById('ageError').textContent = '';

   // Validate name
   const name = document.getElementById('name').value;
   if (name.trim() === '') {
     document.getElementById('nameError').textContent = 'Name is required.';
     isValid = false;
   }

   // Validate age
   const age = document.getElementById('age').value;
   if (age === '') {
     document.getElementById('ageError').textContent = 'Age is required.';
     isValid = false;
   } else if (age < 1 || age > 100) {
     document.getElementById('ageError').textContent = 'Age must be between 1 and 100.';
     isValid = false;
   }

   // If all validations pass
   if (isValid) {
     alert('Form submitted successfully!');
   }
 });




