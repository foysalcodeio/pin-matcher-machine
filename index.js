//Empty Value
function emptyValue(id){
    document.getElementById(id).value = '';
}

//Empty Text
function emptyText(id){
    document.getElementById('id').innerText = '';
}

function displayNone(id){
    document.getElementById(id).style.display = 'none'
}

function display(id){
    document.getElementById(id).style.display = 'none';
}

function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}

function play(){
    var audio = document.getElementById('audio');
    audio.play();
}
//generate randomNumber / pin

//color property:
document.body.style.backgroundImage = "url('./image/landscape-1468519537-btufore.gif')"
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.opacity = "0.95"
document.body.style.backgroundPosition = "50% 50%";
document.body.style.backgroundSize = "50% 50%"



function generateData(){
    var randNumber = Math.floor(1000 + Math.random() * 8000);
    var data = document.getElementById('generate').value = randNumber;  
    document.getElementById('generate').style.backgroundColor = "black";
    document.getElementById('textMessage').innerHTML = "Press & Submit the pin Code";
    audio.play();
    emptyValue('pin-value')
    displayNone('matched')
    displayNone('not_matched')
    displayNone('GenerateMessage')
    displayNone('four-number')
    console.log(data);
}

// Input number value
function btnKey(id){
    let prevData = document.getElementById('pin-value').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('pin-value').style.backgroundColor = "black";
    
    audio.play();
    displayNone('textMessage');
    document.getElementById('pin-value').value = prevData + key;
    console.log(e.target.value);
    
}

// clean screen
function clean(){
    document.getElementById('pin-value').value = "";
    audio.play();
}

// clean last value that means backspace
function cleanLast(){
    var result = document.getElementById('pin-value').value;
    var removeValue = result.slice(0, result.length - 1);
    document.getElementById('pin-value').value = removeValue;
    audio.play();
}

// submit button & pin matching
function submitBtn(){
    var randomNumber = document.getElementById('generate').value;
    var typeNum = document.getElementById('pin-value').value;


    if(randomNumber.length == 0){
        document.getElementById('GenerateMessage').innerText = "Please Quickly Enter the Generate Button";
        shake('GenerateMessage');
        
    }
    else{
        if(randomNumber === typeNum){
            displayBlock('matched') // show command door is matched
            displayNone('not-matched') // hiding red color data
            displayBlock('.four_number');
            displayNone('tryContent')
            clean()
            
        }else{
            document.getElementById('four_number').innerText = "Enter the 4 number";
            displayBlock('not_matched') // show door password is not matched
            displayNone('matched') // hiding green color data
            tryLeft('tryLeft'); // this function increase by 1 when submit button per press.
            displayBlock('tryContent');
            shake('four-number')
            clean();
        }
    }
}

// pin match error - 3 time try
function tryLeft(id) {
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if (tryAgain == "1") {
        disableBtn('submit');
    }
}

// if try is 1 now pop up box and show that didn't match
function disableBtn(id) {
    let button = document.getElementById(id);
    button.style.cursor = "not-allowed";
    button.setAttribute('disabled', 'true');
    button.title = "Please Reload Page";
}
function shake(id){
    var addClass = document.getElementById(id);
    addClass.classList.add('shake');
}