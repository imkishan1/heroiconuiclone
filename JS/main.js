
function printbox(){
    const part1 = document.getElementById('part1')
    const part2 = document.getElementById('part2')
    for(var i=0;i<100;i++)
    {
        var temp = ` <div class="box">              
  
        </div>`
        part1.innerHTML+=temp;
        part2.innerHTML+=temp;
    }
    console.log("hello")
}

printbox();