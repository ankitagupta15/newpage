// add an event listener to the login form
function signIn(){
  const username = document.getElementById("id").value;
  const password = document.getElementById("pass").value;
  
  if ((username === "ankita" && password === "123") || (username=== "sid" && password === "123") || (username==="lakshya" && password === "123") || (username==="neha" && password === "123") || (username === "mishti" && password === "123") || (username === "anku" && password === "123") || (username === "Pratap" && password === "123") || (username === "kunal" && password === "123")) {
        webengage.user.login(username);

        //Webengage Identification
        if(username == "ankita"){
          webengage.user.setAttribute('we_email', 'gankita009@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Ankita');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '+919619903182');
          webengage.user.setAttribute('Date of Birth', '15-10-1996');
          webengage.user.setAttribute('we_gender', 'female');
          webengage.user.setAttribute("age_web", 26);
        }else if(username == "sid"){
          webengage.user.setAttribute('we_email', 'pndsiddharth2309@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Siddharth');
          webengage.user.setAttribute('we_last_name', 'Pandey');
          webengage.user.setAttribute('we_phone', '9876765432');
          webengage.user.setAttribute('Date of Birth', '23-09-1996');
          webengage.user.setAttribute('we_gender', 'male');
          webengage.user.setAttribute("age_web", 26);
        }else if(username == "lakshya"){
          webengage.user.setAttribute('we_email', 'glakshya01@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Lakshya');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '+917715973811');
          webengage.user.setAttribute('Date of Birth', '01-12-2004');
          webengage.user.setAttribute('we_gender', 'male');
          webengage.user.setAttribute("age_web", 18);
        }else if(username == "neha"){
          webengage.user.setAttribute('we_email', 'gneha0509@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Neha');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '+919819638848');
          webengage.user.setAttribute('Date of Birth', '05-09-1993');
          webengage.user.setAttribute('we_gender', 'female');
          webengage.user.setAttribute("age_web", 29);
        }else if(username == "mishti"){
          webengage.user.setAttribute('we_email', 'guptafamily.030@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Mishti');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '90760022408');
          webengage.user.setAttribute('Date of Birth', '27-09-2021');
          webengage.user.setAttribute('we_gender', 'female');
          webengage.user.setAttribute("age_web", 1);
        }else if(username == "anku"){
          webengage.user.setAttribute('we_email', 'ankita.gupta@webengage.com');
          webengage.user.setAttribute('we_first_name', 'Anku');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '9619903182');
          webengage.user.setAttribute('Date of Birth', '15-10-1996');
          webengage.user.setAttribute('we_gender', 'female');
          webengage.user.setAttribute("age_web", 26);
        }else if(username == "kunal"){
          webengage.user.setAttribute('we_email', 'kunal.prasad@webengage.com');
          webengage.user.setAttribute('we_first_name', 'Kunal');
          webengage.user.setAttribute('we_last_name', 'Prasad');
        }else{
          webengage.user.setAttribute('we_email', 'pratapchauhan97@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Pratap');
          webengage.user.setAttribute('we_last_name', 'Chauhan');
          webengage.user.setAttribute('we_phone', '+918693822070');
          webengage.user.setAttribute('Date of Birth', '05-01-1997');
          webengage.user.setAttribute('we_gender', 'male');
          webengage.user.setAttribute("age_web", 26);
        }
      alert("You have successfully logged in.");
      window.location.href="home.html";
      webengage.track('MainPageView');
      }else {
            alert('Invalid username or password');
        }
  }


// add event listener to logout button
function logout() {
 window.location.href="index.html";
}
