// JavaScript File
function myFunction() {
    var country = document.getElementById("country");
    let xhr = new XMLHttpRequest;
	//Call the open function, GET-type of request, url, true-asynchronous
	var x = document.getElementById("myCheck").checked;
	if (document.getElementById("c").check){
        xhr.onreadystatechange = function(){
            xhr.open('GET', "world.php?all=true", true);
            document.getElementById("result").innerHTML=xhr.responseText;
        }
    }else{
        xhr.onreadystatechange = function(){
            //check if the status is 200(means everything is okay)
            if (this.status === 200 && this.readyState == 4){
                xhr.open('GET', "world.php?country="+country.value, true);
                document.getElementById("result").innerHTML=xhr.responseText;
            }
        }
    }
    xhr.send();
}

function Function() {
    //var ans = document.getElementById("c").value;
    var country = document.getElementById("country");
    let xhr2 = new XMLHttpRequest;
	//Call the open function, GET-type of request, url, true-asynchronous
    xhr2.onreadystatechange = function(){
        //check if the status is 200(means everything is okay)
        if (this.status === 200){
            alert(xhr2.responseText);
        }
    }
	//call send
	xhr2.open('GET',"world.php?country="+country.value, true);
	xhr2.send();
}

