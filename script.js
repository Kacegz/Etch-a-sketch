let drawcolor="black";
const grid=document.querySelector("#grid");
const gridvalue=document.querySelector("#gridnumber")
function creategrid(size){
    const plane=document.querySelector('#plane');
    plane.textContent="";
    for(let i=0;i<size;i++){
        let row=document.createElement('div');
        row.classList.add('row');
        plane.appendChild(row);
        for(let j=0;j<size;j++){
            const box=document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
    }
    draw()
}
let colorinput=document.querySelector("#setcolor");
colorinput.addEventListener("change",()=>{
        drawcolor=colorinput.value;
})
function draw(){
    const boxes=document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('mouseover',()=>{box.style.backgroundColor=drawcolor;})
    });
}
function setrandomcolor(){
    const boxes=document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('mouseover',()=>{box.style.backgroundColor=randomcolor();})
    });
}
function newgrid2(){
    gridvalue.textContent=grid.value
    creategrid(grid.value)
}
function newgrid(){
    let size;
    do{
        size=parseInt(prompt("Set a number of squares"));
    }while (size>100 || size<1 || isNaN(size))
    gridvalue.textContent=size
    grid.value=size
    creategrid(size)
}
function randomcolor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let rgb="rgb("+(r)+","+g+","+b+")";
    return rgb
}
function shading(){
    if(i>0){
        i=parseInt(i-2)  
    }
    let shaded="rgb("+(i)+","+(i)+","+(i)+")";
    return shaded
}
function setshading(){
    i=255
    const boxes=document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('mouseover',()=>{box.style.backgroundColor=shading();})
    });
}
function erase(){
    const boxes=document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('mouseover',()=>{box.style.backgroundColor="white"})
    });
}

function clean(){
    const boxes=document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.style.backgroundColor="white";
    });
}
creategrid(16);