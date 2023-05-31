let runningTotal =0;
let buffer = '0';
let previousoperator ;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else handleNumber(value);
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch (symbol){
        case 'C':
            buffer ='0';
            runningTotal = 0;
            break;
        case '←' :
           if(buffer.length === 1) buffer = '0';
           else buffer = buffer.substring(0,buffer.length-1);
           break;
        case '=':
            if(previousoperator===null) {return}
            flushOperation (parseInt(buffer));
            buffer=runningTotal;
            runningTotal=0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':    
            Math(symbol);
            break;
    }
}

function Math(symbol){
    if (buffer === '0') return;
    const intbuffer = parseInt(buffer);
    if (runningTotal===0)  runningTotal=intbuffer;
    else flushOperation(intbuffer);
    previousoperator = symbol;
    buffer = '0';

}

function flushOperation(intbuffer){
    if (previousoperator==='+') runningTotal+=intbuffer;
    if (previousoperator === '−') runningTotal-=intbuffer;
    if (previousoperator=== '×') runningTotal*=intbuffer;
    if (previousoperator === '÷') runningTotal/=intbuffer;
}

function handleNumber(numberString){
    if (buffer==="0") buffer=numberString;
    else buffer+=numberString;
}

function init(){
    document.querySelector('.buttons').addEventListener('click',function(event) {
            buttonClick(event.target.innerText);
    })
}

init();
