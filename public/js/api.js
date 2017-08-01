var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj.data)
        //document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "http://127.0.0.1:8000/public/js/transaction_data.txt", true);
xmlhttp.send();