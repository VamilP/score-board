let scoreOne = document.getElementById("score-1");
let scoreTwo = document.getElementById("score-2");
let count = 0;
let count1 = 0;

function btnScoreOne()
{
    count += 1
    scoreOne.textContent = count;
}

function btnScoreTwo()
{
    count += 2
    scoreOne.textContent = count;
}

function btnScoreThree()
{
    count += 3
    scoreOne.textContent = count;
}

function btnScoreA()
{
    count1 += 1
    scoreTwo.textContent = count1;
}

function btnScoreB()
{
    count1 += 2
    scoreTwo.textContent = count1;
}

function btnScoreC()
{
    count1 += 3
    scoreTwo.textContent = count1;
}

function resetBtn()
{
    reset = 0
    scoreOne.textContent = reset;
    scoreTwo.textContent = reset;
}