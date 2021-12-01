let xhr;
let flag=true;
let nowOffset=10;

if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = ActiveXObject("Microsoft.XMLHTTP");
}

xhr.onreadystatechange = function () { //once ready do this function call
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        let resultURL_Array_Data = JSON.parse(xhr.responseText);

        for (let i=0; i<10;i++){
            $("body").append('<iframe src="'+ resultURL_Array_Data[i] +'" width = "500" height="300" frameBorder = "0" class="giphy-embed" allowFullScreen></iframe>');
        }

        window.addEventListener("click", function (){
            xhr.open("GET", "index.php?nowOffset=" + nowOffset);
            xhr.send(null);
            flag=false;
            nowOffset+=10;
        });

        window.addEventListener("scroll", function (){
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
            xhr.open("GET", "index.php?nowOffset=" + nowOffset);
            xhr.send(null);
            flag=false;
            nowOffset+=10;
            }
        });
        }
}

if (flag==true){
    xhr.open("GET", "index.php?nowOffset=" + 0);
    xhr.send(null);
}
