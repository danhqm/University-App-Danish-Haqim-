function buttonClicked(){
    var universities = document.getElementById("universities_input").value
    fetch(`http://universities.hipolabs.com/search?country=Malaysia&name=${universities}`)
        
    .then((response) => response.json())
    .then((data) => {
        var info = data
        /*Calling the first input*/ 
        var oldname = document.getElementById("Name").innerHTML 
        var oldpage = document.getElementById("Web page").innerHTML  
            console.log(info)
            document.getElementById("Name").innerHTML = /*Calling the first input*/oldname + "</tr></td></br>" + /*Adding new input below the first input*/info[0].name + "</tr></td></br>" 
            document.getElementById("Web page").innerHTML = oldpage + "</tr></td></br>" + info[0].web_pages + "</tr></td></br>"
    });
}
