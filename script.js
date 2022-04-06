/*--- Function to make a call AJAX with jQuery ---*/

$(document).ready(function () {
    $(`#loadText`).click(function (e) {
        e.preventDefault();
        $.get("home.json", function (data) {
            $(`#loadJson`).html(data.texto);
        })
    })
})
/*--- Function to make a call AJAX ---*/
/*---   Not used but functional  ---*/
document.querySelector("#loadText").addEventListener("click", printJson);
function printJson() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "home.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if ( this.status == 200 && this.readyState == 4 ) {
            let data = JSON.parse(this.responseText);
            let resp = document.querySelector("#loadJson");
            resp.innerHTML = `${data.texto}`;
        }
    };
}

/*---  Hit Counters. ---*/
var visitImage = [0, 0, 0, 0, 0];

/*---  Update Counter ---*/
function count(num) {
    visitImage[num - 1]++;
    document.getElementById("visits-img-" + num).innerHTML = visitImage[num - 1];
    let storage=localStorage.getItem("num");

}
/*--- function for popups ---*/
function openPopUp(title,img,num) {
    if ((num % 2) != 0) {
        var myWindow = window.open("", "myWindow", "width=800,height=400");
        myWindow.document.write(
            "<html><head><title>" +
            title +
            '</title><link rel="stylesheet" type="text/css" href="assets/styles/style-popup.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></head><body>'
        );
        myWindow.document.write(
            "<section><p><h1>" + title + "</h1></p>",
            '<img id="imgpopup" src="assets/img/' + img + '">',
            '<div class="row"><button id="ok" class="btn btn-primary btn-lg" onClick="action()">OK</button>',
            '<button type="button" class="btn btn-danger btn-lg" onClick="self.close()">Close</button></div></section>'
        );
        // Popup.
        myWindow.action = function () {
            count(num);
        };
        myWindow.document.write("</body></html>");
    } else {
        count(num);
    }
}



