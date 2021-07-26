// var username= prompt("enter your name");
// var welcome="this script works"+ username;
// alert(welcome);
var btnTranslatedoth=document.querySelector("#Translate1");
var btnTranslateValerian=document.querySelector("#Translate2");
// var btnTranslateIrish=document.querySelector("#Translate3");
var inpText=document.querySelector("#inputtext");
var Outputtext=document.querySelector("#output");
var urldoth="https://api.funtranslations.com/translate/dothraki.json";
var urlvalerian="https://api.funtranslations.com/translate/valerian.json";
// var urlIrish="https://api.funtranslations.com/translate/irish.json";
function CreateURL(text,url){
    return url+"?text="+text;
}
//make a function for catching errors
function errormessage(error){
    alert("Server down!! Failed to translate :( !! Please try after some time!");
    console.log("error occured ",error);
}

function TranslatebyFetching(url){
    // console.log("lala");
    fetch(CreateURL(inpText.value,url))
    .then(response => response.json())
    .then(json => 
        {Outputtext.innerText=json.contents.translated;}
        )
    .catch(errormessage);
}

btnTranslatedoth.addEventListener("click",function(){TranslatebyFetching(urldoth);},false);
btnTranslateValerian.addEventListener("click", function(){TranslatebyFetching(urlvalerian);},false);
// btnTranslateIrish.addEventListener("click", function(){TranslatebyFetching(urlIrish);},false);