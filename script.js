document.addEventListener("DOMContentLoaded", function () {

    const btn = document.createElement("button");
    const btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let btnClick = 1;

    const containerDiv = document.createElement("div")
    containerDiv.className = "container";
    document.body.appendChild(containerDiv)

    btn.addEventListener("click", function () {

        let div = document.createElement("div");
        div.id = btnClick;
        div.classList.add("box");
        btnClick++;
        containerDiv.appendChild(div);// nesting divs w/i the container div

        // function to hover mosue enter
        div.addEventListener("mouseenter", function () {

            let h3 = document.createElement('h3');
            h3.id = btnClick;
            let h3Text = document.createTextNode("BOX " + div.id);
            h3.appendChild(h3Text);
            div.appendChild(h3);
        })

        //function when hover leaves mouse leave
        div.addEventListener("mouseout", function () {
            let numBox = document.getElementById(btnClick);
            numBox.parentNode.removeChild(numBox);
        })

        //Set a var arry of colors
        let boxColor = ["black", "yellow", "green", "purple", "Teal", "Grey"]

        div.addEventListener("click", function () {
            let randomColor = Math.floor(Math.random() * boxColor.length);
            div.style.backgroundColor = boxColor[randomColor]
        });

        div.addEventListener("dblclick", function () {
            if (div.id % 2 === 0) {
                if (div.nextSibling === null) {
                    alert('There is nothing after this square');
                } else {
                    containerDiv.removeChild(div.nextSibling);
                }
                console.log('even');
            } else {
                if (div.previousSibling === null) {
                    alert('There is nothing before this square');
                } else {
                    console.log('odd');
                    containerDiv.removeChild(div.previousSibling);
                }
            }
        })
// all function set w/i btn function
    });
});