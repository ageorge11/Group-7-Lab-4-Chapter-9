/* add code here */
function loadEvent()

{
document.getElementById("highlight").style.display = "block";
document.getElementById("hide").style.display = "none";
document.getElementById("highlight").addEventListener("click", function(){

var elements = document.querySelectorAll("h1, main, div, p, tr, td, caption, th, a, legend, label, fieldset, button");
for (var i = 0; i < elements.length; i++) {
if(elements[i].nodeType == 1)
{
var spanEle = document.createElement('SPAN');
spanEle.className = "hoverNode";
spanEle.innerHTML = elements[i].tagName;
elements[i].appendChild(spanEle);

spanEle.addEventListener("click", function(e){
    var parentElement = e.currentTarget.parentElement;
    var parentId = parentElement.getAttribute("id");
    var tagName = parentElement.tagName;
    var className = parentElement.className;
    var innerhtml = parentElement.innerHTML;
    var alertMsg = parentId + " " + tagName + " " + className + " " + innerhtml;
    alert(alertMsg);
    });
}
}

});

document.getElementById("hide").addEventListener("click", function(){
    while(document.getElementsByClassName("hoverNode").length > 0)
    {
    var spanNodes = document.getElementsByClassName("hoverNode");
    for (var i = 0; i < spanNodes.length; i++) {
    spanNodes[i].remove();
    }
    }
});

}

