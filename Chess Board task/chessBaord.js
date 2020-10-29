let MAX_COUNT = 8;
let containerEl = document.getElementById('container');
let i=0;
function  setRandomColor(){
    let currBox = this;
    console.log();
    let originalColor = currBox.style.backgroundColor;
    
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    currBox.style.backgroundColor = color;
    setTimeout(()=>{
        let box = currBox.getAttribute('original-box-color');
        if(box == 'black'){
            currBox.style.backgroundColor = 'black';
        }else{
            currBox.style.backgroundColor = 'white';
        }
        
    },3000);
  }
  
// creating game board
for(let i=0;i<MAX_COUNT;i++){
    //Creating rows
    let newRow = document.createElement('div');
    newRow.className = "row";
    containerEl.appendChild(newRow);

    //Creating cols
    for(let j=0;j<MAX_COUNT;j++){
        let newBox = document.createElement('div');
        newBox.className = "box";
        newRow.appendChild(newBox);
        let newColor = '';
        if(i%2){
            newColor = j%2?'white':'black';
            newBox.style.backgroundColor = newColor;
           
        }
        else{
            newColor = j%2?'black':'white';
            newBox.style.backgroundColor = newColor;
        }
        newBox.setAttribute('original-box-color',newColor);
        newBox.addEventListener('click',setRandomColor);
    }
}