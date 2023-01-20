function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 200) {
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll',changeBg);


function RESERVE(){
    document.getElementById("firstname").required = true;
    document.getElementById("lastname").required = true;
    document.getElementById("address").required = true;
    document.getElementById("city").required = true;
    document.getElementById("state").required = true;
    document.getElementById("email").required = true;
    document.getElementById("phone").required = true;

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if(firstname != "" && lastname != "" && address != "" && city != "" && state != "" && email != "" && phone != "" ){
        alert("We successfully received your request. You will be contacted really soon. Thank you for choosing to be kind!   <3");
    }
  }


      function SendMessage(){
      
      document.getElementById("inputiii").required = true; /* e ben fromen email required */
      document.getElementById("emailii").required = true;
      var name = document.getElementById("inputiii").value;
      var emaili = document.getElementById("emailii").value;
      
      if(name != "" && emaili != "" ){
        alert("We thank you for your message. We really appreciate it.")

      }
  }

