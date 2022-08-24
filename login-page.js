//astrinsic px code
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
  (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9DYNKKOX8BGS-1");



//feedback function
function feedback(){
  document.getElementById("feedback").innerHTML = "Feedback Button is Clicked";
}

function zero(){
  document.getElementById("number").innerHTML = "0";
  aptrinsic('track', 'zero', {"name":"zero"}); 

}

function one(){
  document.getElementById("number").innerHTML = "1";
  aptrinsic('track', 'one', {"name":"one"}); 
}


function newpage(){
  window.location.href="index.html"
}
