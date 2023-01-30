function setup(){ 
    canvas=createCanvas(280,280);
    canvas.position(450,350);
    background("white");
}

function clearCanvas(){
background("white")
}

array_1=['book','paper','pen','bottle']
random_no=Math.floor((Math.random()*array_1.length)+1);
console.log(random_no);
Element_of_array=array_1[random_no]
console.log(Element_of_array);

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
