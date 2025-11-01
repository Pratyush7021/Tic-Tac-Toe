let boxes = document.querySelectorAll(".box");   //For class
let ResetBtn = document.querySelector("#resetBtn");  //For id
let NewBtn = document.querySelector("#newbtn");
let MsgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turn0 = true; //plauer O

const winpatterns = [  // collection of data 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

    const ResetGame = () => {                 // For Reset Game
            turn0 = true;
            enableboxes();
            MsgContainer.classList.remove("hide");
            }
        

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {   // if (turn0 === true)
            box.innerText = "O";
            box.style.color = "#3336ffff";
            turn0 = false;
        }else{
            box.innerText = "X";
            box.style.color = "#33ff4eff";
            turn0 = true;
        }

        box.disabled = true;

        checkwinner();    // To check the winner
    });
});
        const disableboxes = () => {
            for(let box of boxes){
            box.disabled = true;
            }
        }

        const enableboxes = () => {
            for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
            }
        }

        const showWinner = (winner) => {     // It means const showwinner(is for defination) and winner means the value stored in the pos1val variable is       copied and assigned to the winner parameter.
            msg.innerText = `Congratulation, winner is ${winner}`; 
            MsgContainer.classList.remove("hide");

            disableboxes();
        };

    const checkwinner = () => {
        for (let pattern of winpatterns) {
            let pos1val = boxes[pattern [0]].innerText;
            let pos2val = boxes[pattern [1]].innerText;
            let pos3val = boxes[pattern [2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != ""){
                if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val); // It means showwinner call pos1val(It is the winner value).
                }
            }
        }
    };

        ResetBtn.addEventListener("click", ResetGame);
        NewBtn.addEventListener("click", ResetGame);
