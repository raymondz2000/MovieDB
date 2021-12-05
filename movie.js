

var check = false;
function get(){
    var id = document.getElementById("movieid").value;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange=function(){
       if(this.readyState == 4 && this.status == 200){

           var myN=JSON.parse(this.responseText)
    
           var text = "Movie ID:"+document.getElementById("movieid").value+"<br/>"+"Title:"+ myN.Title+"<br/>Year:"+myN.Year+"<br/>Runtime:" + myN.Runtime+"<br/>Genre: "+myN.Genre+"<br/>Actors:" +myN.Actors;
           if(myN.Title!=undefined&&myN.Year!=undefined&&myN.Runtime!=undefined&&myN.Genre!=undefined&&myN.Actors!=undefined){
            document.getElementById("display").innerHTML=text
            check = true;
            document.getElementById("movieid").value=""
           }
           else{
            alert("The value you entered is not valid")
            document.getElementById("movieid").value=""
           }
         
       }
   };
   var id = document.getElementById("movieid").value;
   xhttp.open("GET","http://www.omdbapi.com/?i="+id+"&apikey=24be9258",true)
   
   xhttp.send();
}
function getreviews(){
    var str="-----------Reviews-----------"+"<br/>";
    let rev =  document.createElement("p")
   str+= document.getElementById("name").value +"<br/>"+document.getElementById("comment").value+"<br/>"+document.getElementById("rate").value+"/10"
  
   rev.innerHTML=str

    if(check==true){
        document.getElementById("display").append(rev);
        document.getElementById("name").value =""
        document.getElementById("rate").value=0
        document.getElementById("comment").value="";
    }
    else{
        alert("Please search your movie")
        document.getElementById("name").value =""
        document.getElementById("rate").value=0
        document.getElementById("comment").value="";
    }
  
}