
function frame1to2(){
    // frame 1 to 2
    document.getElementById('ssrf-frame-1').style.display = 'none';
    document.getElementById('ssrf-frame-2').style.display = 'flex';
    document.getElementById('ssrf-progress-bar').style.display = 'flex';
}

function frame2to3(){
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    var arr = [];
    for (var checkbox of markedCheckbox){
        arr.push(parseInt(checkbox.value));
    }
    var score = 0;
    var result = [8,9,10,11,12];
    for (var items of arr){
        if(result.includes(items)){
            score++;
        }
        else{
            score--;
        }
    }
    if( score >= 4 ){
        document.getElementById('ssrf-frame-2').style.display = 'none';
        document.getElementById('ssrf-bar-status1').classList.add('ssrf-bar-status')
        document.getElementById('ssrf-frame-3').style.display = 'flex';
    }
}

function frame3to4(){
    var markedCheckbox = document.querySelectorAll('input[name="form2"]:checked');
    var arr = [];
    for (var checkbox of markedCheckbox){
        arr.push(parseInt(checkbox.value));
    }
    var score = 0;
    var result = [3,7,11,15];
    for (var items of arr){
        if(result.includes(items)){
            score++;
        }
        else{
            score--;
        }
    }
    if( score >=1 ){
        document.getElementById('ssrf-frame-3').style.display = 'none';
        document.getElementById('ssrf-bar-status2').classList.add('ssrf-bar-status')
        // document.getElementById('ssrf-frame-4').style.display = 'flex';
    }
}