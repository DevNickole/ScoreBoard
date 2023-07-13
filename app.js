
let team1 = document.getElementById("score-team-1")
let team1Score = 0



function add1pointsTeam1(){
    if(team1Score < 9){
        team1.innerText ="0" + ++team1Score
    }else{
        team1.innerText = ++team1Score
    }
}

function add2pointsTeam1(){
    team1Score += 2
    if(team1Score <= 9){
        team1.innerText ="0" + team1Score
    }else{
        team1.innerText = team1Score
    }
}

function add3pointsTeam1(){
    team1Score += 3
    if(team1Score <= 9){
        team1.innerText ="0" + team1Score
    }else{
        team1.innerText = team1Score
    }
}


//code for team 2
let team2 = document.getElementById("score-team-2")
let team2Score = 0

function add1pointsTeam2(){
    if(team2Score < 9){
        team2.innerText ="0" + ++team2Score
    }else{
        team2.innerText = ++team2Score
    }
}

function add2pointsTeam2(){
    team2Score += 2
    if(team2Score <= 9){
        team2.innerText ="0" + team2Score
    }else{
        team2.innerText = team2Score 
    }
}

function add3pointsTeam2(){
    team2Score += 3
    if(team2Score <= 9){
        team2.innerText ="0" + team2Score
    }else{
        team2.innerText = team2Score
    }
}
let team1q1 = document.getElementById("first-quarter-t1")
let team2q1 = document.getElementById("first-quarter-t2")

let team1q2 = document.getElementById("second-quarter-t1")
let team2q2 = document.getElementById("second-quarter-t2")

let team1q3 = document.getElementById("third-quarter-t1")
let team2q3 = document.getElementById("third-quarter-t2")

let team1q4 = document.getElementById("fourth-quarter-t1")
let team2q4 = document.getElementById("fourth-quarter-t2")
function saveToFirstQuarter(){
    team1q1.innerText = team1.innerText
    team2q1.innerText = team2.innerText
    let self = document.getElementById("q1btn")
    self.disabled = true
}

function saveToSecondQuarter(){
    team1q2.innerText = team1.innerText
    team2q2.innerText = team2.innerText
    let self = document.getElementById("q2btn")
    self.disabled = true
}

function saveToThirdQuarter(){
    team1q3.innerText = team1.innerText
    team2q3.innerText = team2.innerText
    let self = document.getElementById("q3btn")
    self.disabled = true
}

function saveToFourthQuarter(){
    team1q4.innerText = team1.innerText
    team2q4.innerText = team2.innerText
    let self = document.getElementById("q4btn")
    self.disabled = true
}

function reset(){
    location.reload()
}
