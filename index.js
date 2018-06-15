var oP = document.getElementById("options");
var oL = document.getElementById("list");
var oLi = oP.getElementsByTagName("li");
var oBox = oL.getElementsByTagName('li');
for(var i=0;i<oLi.length;i++){
    oLi[i].index = i;
    oLi[i].onclick=function(){
        for(var j=0;j<oLi.length;j++){
        	oLi[j].className="";
        	oBox[j].style.display="none";
        }
        oLi[this.index].className="active";
        oBox[this.index].style.display="block";
    }
}
