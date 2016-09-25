//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    //create a request object
    var request = new XMLHttpRequest();
    //and capture and store it in a variable
    request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE){
        //take some action
        if(request.status===200){
         var counter = request.responseText;
         var span = document.getElementByIdI('count');
         span.innerHTML = counter.toString();
        }
            
        }
    };
 //   make a request to the counter endpoint
    request.open('GET', 'http://premarajanmk.imad.hasura-app.io/counter',true);
    request.send(null);
}; 
    
 
 
 
 

