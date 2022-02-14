document.addEventListener("DOMContentLoaded", function () {

    const btn = document.createElement("button");
    const btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    let btnClick = 1;

    let div = document.createElement("div")
    
    document.body.appendChild(div)

    btn.addEventListener("click", function () {
        let div = document.createElement("div");
        document.body.appendChild(div);

        div.id = ("Button" + btnClick); //
        btnClick++;



        div.addEventListener("mouseenter", function () {
            let div = document.createElement('div');
            div.id = btnClick;
            let boxText = document.createTextNode(div.id);
            div.appendChild(boxText);
        });

        div.addEventListener("mouseleave", function () {
            let numBox = document.getElementById(btnClick);
            numBox.parentNode.removeChild(numBox);
        })

    });

    let boxColor = ["black", "yellow", "green", "purple", "Teal", "Grey"]

    div.addEventListener("click", function () {
        let randomColor = Math.floor(Math.random() * boxColor.length);
        div.style.backgroundColor = boxColor[randomColor]
    });

    div.addEventListener("dblclick", function(){

    })

    // div.style.border = ("5px solid black")
    // div.style.width.height = ("100px")
    // div.style.height = ("100px")
    // div.style.background = ("black")


});