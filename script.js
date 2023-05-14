var h1= document.createElement("h1");
h1.innerHTML="COVID 19 TRACKING";
h1.style.textAlign="center";
h1.style.marginTop="50px";

var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");input.style.width="30%";
input.setAttribute("placeholder" , "Enter the CountryName");

var linebreaker= document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type" , "button");
button.classList.add("brn", "btn-primary");
button.style.margin="20px";
button.style.width="10%";
button.innerHTML="Search";
button.addEventListener("click", foo);
var outputdata=document.createElement("div");
outputdata.style.fontSize="20px";

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/dayone/country/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    var index=res2.length-1;
    //console.log(res2[index]);
   outputdata.innerHTML=`Active : ${res2[index].Active}<br>
   Death :${res2[index].Deaths} <br>
   Recovered :${res2[index].Recovered} `;

}


div.append(input,linebreaker,button,outputdata)
document.body.append(h1)
document.body.append(div);
