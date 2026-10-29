'use client'
import { randomInt } from "node:crypto";
import React from "react";
import { useState, useEffect } from "react"
import { createRoot } from "react-dom/client";

let variabley = 1;
let variablex = 1;
let score_card = 0;
let score_count = 0;
let loc = variabley + 1;
let movement = 5;
let eloc = 1;
let ploc = 1;
let area1 = [];
let area2 = [];
let noreset = true;


function counter () {
  variabley += 1;
  
  if (variabley >= 6) {
    variabley = 1;
    score_count += 1;
    eloc = 1;
    ;
  }
}

function counterx () {
  variablex += 1;
  if (variablex > 5) {
    variablex = 1;
  }
}


export default function Game() {
const [gameStart, setGame] = useState(false);
const [score, scoreCount] = useState(0);
const [HUD, setHUD] = useState(false);
const [move, setMove] = useState(1);

function startGame() {
setGame(true);

}

function Score() {
if (score_card === 10 && noreset === true) {setHUD(true)};
noreset = true;
scoreCount((score_card) => score_card += 1);
[scoreCount]

  }


function count () {
 
 if (score_count !=0 ) {
    score_card += 1;
    Score();
    noreset = true;
    score_count = 0;
  }
  if (noreset === false) {
    score_card = 0;
  }
  const enemy = document.getElementById('enemy');
  const char = document.getElementById('character');
  enemy.style.gridRowStart = String(rand);
  enemy.style.gridColumnStart = String(rand);
  let eloc1 = Number(enemy?.style.gridRowStart); 
  let eloc2 = Number(enemy?.style.gridColumnStart);
  let ploc1 = Number(char.style.gridRowStart); 
  let ploc2 = Number(char.style.gridColumnStart);
  area1 = [eloc1,eloc2]
  area2 = [ploc1,ploc2]
  if (eloc1 === ploc1 && eloc2 === ploc2) {scoreCount(0)}; 
  if (eloc1 === ploc1 && eloc2 === ploc2) { noreset = false };
  console.log(noreset);
}
function enemymovement () {
  if (rand >=6 ) {
    rand = 5;
  if (rand >=7) {
    rand = 4;
  }
  if (rand >=6) {
    rand = 3;
  }
  if (rand >= 5) {
    rand = 2;
  }
  
}
setMove((movement) => ((movement = 1 * (Math.round(Math.random() * 10)))));

[setMove]
 }
let rand = move;

function moveUp (event) {
  
  if (event.code === 'ArrowDown') {
    counter();
    enemymovement();
  const character = document.getElementById('character');
  const DOWN = String(variabley * 1);
  if (variabley <=5 && variabley != 0) {
    character.style.gridRowStart = DOWN;
    ploc = Number(character.style.gridRowStart);
  } else { character.style.gridRowStart = '0';}
  const enemy = document.getElementById('enemy');
  enemy.style.gridRowStart = String(rand);

  
}

if (event.code === 'ArrowUp') {
const character = document.getElementById('character');
const UP = String(variabley - 1);
if (variabley <=8 && variabley >1 ) {
     character.style.gridRowStart = UP;
     variabley -= 1;

  } else character.style.gridRowEnd = '5';
  
}
  if (event.code === 'ArrowRight') {
  counterx();
  const character = document.getElementById('character');
  const RIGHT = String(variablex);
  if (variablex <= 5 && variablex !=(-2)) {
    character.style.gridColumnStart = RIGHT;

  }
  else { character.style.gridColumnStart = '1';
  
}
}
  if (event.code === 'ArrowLeft') {
  const character = document.getElementById('character');
  const LEFT = String(variablex - 1);
  if (variablex <=5 && variablex >1 ) {
    character.style.gridColumnStart = LEFT;
    variablex -= 1;
  }
  else {
    variablex = 1;
  }
}
count();

}







  return (
<div id="body" className="flex px-5 py-5 mx-auto">
  <main>     
    {!gameStart && (
        <div id="titlescreen" className="text-center">
          
        <h2 className="text-xl font-bold">Road Jump</h2>
        <button className="my-100 bg-red-500 w-50 h-20" onClick={startGame}>Click Here To Start </button>
        </div>
          )}
        {gameStart && (<div id="game" className="game px-20 grid grid-cols-5 grid-rows-5 grid-gap-5 bg-gray-400 border-green-400 border-t-50 border-b-150 h-200 w-200">
          <button id="character" className="bg-white
           rounded-full h-20 w-20 z-999" onKeyDown={moveUp}></button><button id="lake" className="absolute bottom-33 left-140 mr-50 z-100 bg-cyan-300 w-200 h-22"></button><button className="absolute bottom-75 z-0 my-20 bg-yellow-300 w-50 h-10"></button><button className="absolute bottom-75 right-150 z-0 my-20  bg-yellow-300 w-50 h-10"></button><button id="enemy" className="enemy2 z-999 my-20 rounded-full bg-blue-300 w-25 h-25"></button>  <button className="absolute bottom-80 z-0 my-50 bg-yellow-300 w-50 h-10"></button> <button className="absolute top-65 z-0 bg-yellow-300 w-50 h-10"> </button> <button className="absolute z-0 my-15 bg-yellow-300 w-50 h-10"></button><button className="absolute right-150 z-0 my-15 bg-yellow-300 w-50 h-10"></button><button className="absolute bottom-80 right-150 z-0 my-50 z-0 bg-yellow-300 w-50 h-10"></button><button className="absolute top-65 right-150 z-0 bg-yellow-300 w-50 h-10"></button>
        {!HUD && (<div id="score" className="z-9999"><h1 id="yourscore"  className="font-bold text-3xl ">Your Score: {score}</h1></div>)} {HUD && (<div id="winningscreen" className="z-9999"><h1 className="font-bold text-3xl font-red-500">You Win!</h1></div>)}
</div>
        )}</main>
    </div>
  );
}


