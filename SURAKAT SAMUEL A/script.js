const Inputscreen=document.querySelector('#Input_screen');
    const btn= document.querySelectorAll('.btn');
    for(item of btn)
    {
        item.addEventListener('click', (e)=>{
            btntext =e.target.innerText;
            if(btntext=='x')
            {
                btntext='*';
            }
         
            Inputscreen.value += btntext;
        });
    }
        function Clear() {
            resultScreen.value = "";
        }

    // Select the necessary elements from the HTML file
const historyButton = document.querySelector('.history');
const historyList = document.querySelector('.history');






