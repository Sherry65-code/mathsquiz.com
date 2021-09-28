function submit() {
    var score = 0;
    if (document.getElementById('a1').value == "12"){
        score += 1;
    }
    else if (document.getElementById('a1').value != "12"){
        score += 0;
    }
    if (document.getElementById('a2').value == "40"){
        score += 1;
    }
    else if (document.getElementById('a2').value != "40"){
        score += 0;
    }
    if (document.getElementById('a3').value == "2"){
        score += 1;
    }
    else if (document.getElementById('a3').value != "2"){
        score += 0;
    }
    if (document.getElementById('a4').value == "8497"){
        score += 1;
    }
    else if (document.getElementById('a4').value != "8497"){
        score += 0;
    }
    if (document.getElementById('a5').value == "142"){
        score += 1;
    }
    else if (document.getElementById('a5').value != "142"){
        score += 0;
    }
    document.getElementById('q').innerHTML = " ";
    document.getElementById('score').innerHTML = "Score = "+score+"/5";
    document.querySelector('.header').innerHTML = "Score Board";
}