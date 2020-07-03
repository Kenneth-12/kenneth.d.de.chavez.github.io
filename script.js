var modal = document.getElementById("modal");
var cartBtn = document.getElementById("myBtn");
var span = document.getElementsByClassName("exit")[0];

var products = [
  {
    id: 1,
    name:"Iphone XR",
    price: "$599"
  },
  {
    id: 2,
    name:"Iphone 11",
    price: "$699"
  },
  {
    id:3,
    name:"Iphone 11 Pro",
    price: "$799"
  },
  {
    id: 4,
    name:"Iphone 11 (discounted)",
    price: "$499"
  }

];
var ixr = document.getElementById("ixr");
ixr.addEventListener("click", function(){
  var counter = 1;
  for (let i = 0; i < products.length; i++) {
    if(products[i].id === counter){
      let ul = document.querySelector('.cartproducts');
      const li = document.createElement("li");
      let name = products[i].name;
      let price = products[i].price;
      li.appendChild(document.createTextNode(name+":"+" "+ price));
      ul.appendChild(li);
    }
  }
})
var i11 = document.getElementById("i11");
i11.addEventListener("click", function(){
  var counter = 2;
  for (let i = 0; i < products.length; i++) {
    if(products[i].id === counter){
      let ul = document.querySelector('.cartproducts');
      const li = document.createElement("li");
      let name = products[i].name;
      let price = products[i].price;
      li.appendChild(document.createTextNode(name+":"+" "+ price));
      ul.appendChild(li);
    }
  }
})
var ipro = document.getElementById("ipro");
ipro.addEventListener("click", function(){
  var counter = 3;
  for (let i = 0; i < products.length; i++) {
    if(products[i].id === counter){
      let ul = document.querySelector('.cartproducts');
      const li = document.createElement("li");
      let name = products[i].name;
      let price = products[i].price;
      li.appendChild(document.createTextNode(name+":"+" "+ price));
      ul.appendChild(li);
    }
  }
})
var i11d = document.getElementById("i11d");
i11d.addEventListener("click", function(){
  var counter = 4;
  for (let i = 0; i < products.length; i++) {
    if(products[i].id === counter){
      let ul = document.querySelector('.cartproducts');
      const li = document.createElement("li");
      let name = products[i].name;
      let price = products[i].price;
      li.appendChild(document.createTextNode(name+":"+" "+ price));
      ul.appendChild(li);
    }
  }
})

cartBtn.onclick = function() {
    modal.style.display = "block";    
    //console.log("Clicked");
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// let iphone = document.querySelectorAll('.iphone')
// for (let i = 0; i < iphone.length; i++) {
//   iphone[i].addEventListener("click", ()=> {
//     iphoneCarts();
//   });
// }

// function onLoadCart () {
  
// }
// function iphoneCarts() {
//   let productNo = localStorage.getItem('iphoneNumbers');
//   productNo = parseInt(productNo);
//   if (productNo) {
//     localStorage.setItem('iphoneNumbers', productNo + 1);
    
//   }else {
//     localStorage.setItem('iphoneNumbers', 1);
//     let ul = document.querySelector('.cartproducts');
//     console.log(ul);
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode("test"));
//     ul.appendChild(li);
//   }
  
// }