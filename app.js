// var username= prompt("enter your name");
// var welcome="this script works"+ username;
// alert(welcome);
var btnTranslatedoth=document.querySelector("#Translate1");
var btnTranslateValyrian=document.querySelector("#Translate2");
var inpText=document.querySelector("#inputtext");
var Outputtext=document.querySelector("#output");
var urldoth="https://api.funtranslations.com/translate/dothraki.json";
var urlvalyrian="https://api.funtranslations.com/translate/valyrian.json";
function CreateURL(text,url){
    return url+"?text="+text;
}

function errormessage(error){
    alert("Server down!! Failed to translate :( !! Please try after some time!");
    console.log("error occured ",error);
}

function TranslatebyFetching(url){
    var Output=document.querySelector("body");

    if(url===urldoth)
    Output.style.backgroundImage="linear-gradient(rgba(254, 254, 254, 0.55), rgba(254, 254, 254, 0.55)),url(images/dothraki.jpg)";
    else
    Output.style.backgroundImage="linear-gradient(rgba(254, 254, 254, 0.55), rgba(254, 254, 254, 0.55)),url(images/valyrian.jpg)";
    
    fetch(CreateURL(inpText.value,url))
    .then(response => response.json())
    .then(json => 
        {Outputtext.innerText=json.contents.translated;}
        )
    .catch(errormessage);
}

btnTranslatedoth.addEventListener("click",function(){TranslatebyFetching(urldoth);},true);
btnTranslateValyrian.addEventListener("click", function(){TranslatebyFetching(urlvalyrian);},true);