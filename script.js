const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar)  {
     bar.addEventListener('click', () => {
         nav.classList.add('active');
})

}
if(close)  {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
})

}

function enforceMinMax(el) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }

/*buy on Whatsapp*/

function buyonWhatsapp(){
  let number = "919236427775";

 /* var pnamee = document.getElementById("pname").value;*/
  let pricee = document.getElementById('price').value;
  let typenamee = document.getElementById('typename').value;
  let howmuchh = document.getElementById('howmuch').value;

  const url = "https://wa.me/" + number + "?text="
  +"I want to Buy %0a"
 /* + "Name : " +pnamee+ "%0a"*/
  + "Type : " +typenamee+ "%0a"
  + "Price Per Piece : " +pricee+ "%0a"
  + "How Much : " +howmuchh+ "%0a";

  window.open(url, '_blank').focus();  
}


/*Contact */
  function sendToWhatsapp(){
    let number = "919236427775";
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    var url = "https://wa.me/" + number + "?text="
    +"My query %0a"
    + "Name : " +name+ "%0a"
    + "Email : " +email+ "%0a"
    + "Message : " +message+ "%0a";
  
    window.open(url, '_blank').focus();  
  }