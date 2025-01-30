document.addEventListener("DOMContentLoaded", () => {
  const grid0 = document.getElementById("grid0");
  const grid1 = document.getElementById("grid1");
  const grid2 = document.getElementById("grid2");
  const grid3 = document.getElementById("grid3");
  const grid4 = document.getElementById("grid4");
  const grid5 = document.getElementById("grid5");
  const grid6 = document.getElementById("grid6");
  const grid7 = document.getElementById("grid7");
  const grid8 = document.getElementById("grid8");

  const gd0 = document.getElementById("gd0");
  const gd1 = document.getElementById("gd1");
  const gd2 = document.getElementById("gd2");
  const gd3 = document.getElementById("gd3");
  const gd4 = document.getElementById("gd4");
  const gd5 = document.getElementById("gd5");
  const gd6 = document.getElementById("gd6");
  const gd7 = document.getElementById("gd7");
  const gd8 = document.getElementById("gd8");

  var xo = ["x", "o"];
  let x = true;
  let y = false;
  let gr0 = true;
  grid0.addEventListener("click", () => {
    if (gr0 === true) {
      if (x == true) {
        document.getElementById("gd0").innerText = xo[0];
        x = false;
        y = true;
        let arr0 = 0;
        gr0 = false;
        winningx(arr0);
      } else {
        document.getElementById("gd0").innerText = xo[1];
        y = false;
        x = true;
        let arr0 = 0;
        gr0 = false;
        winningy(arr0);
      }
    }
  });

  let gr1 = true;
  grid1.addEventListener("click", () => {
    if (gr1 === true) {
      if (x == true) {
        document.getElementById("gd1").innerText = xo[0];
        x = false;
        y = true;
        let arr1 = 1;
        gr1 = false;
        winningx(arr1);
      } else {
        document.getElementById("gd1").innerText = xo[1];
        y = false;
        x = true;
        let arr1 = 1;
        gr1 = false;
        winningy(arr1);
      }
    }
  });

  let gr2 = true;
  grid2.addEventListener("click", () => {
    if (gr2 === true) {
      if (x == true) {
        document.getElementById("gd2").innerText = xo[0];
        x = false;
        y = true;
        let arr2 = 2;
        gr2 = false;
        winningx(arr2);
      } else {
        document.getElementById("gd2").innerText = xo[1];
        y = false;
        x = true;
        let arr2 = 2;
        gr2 = false;
        winningy(arr2);
      }
    }
  });

  let gr3 = true;
  grid3.addEventListener("click", () => {
    if (gr3 === true) {
      if (x == true) {
        document.getElementById("gd3").innerText = xo[0];
        x = false;
        y = true;
        let arr3 = 3;
        gr3 = false;
        winningx(arr3);
      } else {
        document.getElementById("gd3").innerText = xo[1];
        y = false;
        x = true;
        let arr3 = 3;
        gr3 = false;
        winningy(arr3);
      }
    }
  });

  let gr4 = true;
  grid4.addEventListener("click", () => {
    if (gr4 === true) {
      if (x == true) {
        document.getElementById("gd4").innerText = xo[0];
        x = false;
        y = true;
        let arr4 = 4;
        gr4 = false;
        winningx(arr4);
      } else {
        document.getElementById("gd4").innerText = xo[1];
        y = false;
        x = true;
        let arr4 = 4;
        gr4 = false;
        winningy(arr4);
      }
    }
  });

  let gr5 = true;
  grid5.addEventListener("click", () => {
    if (gr5 === true) {
      if (x == true) {
        document.getElementById("gd5").innerText = xo[0];
        x = false;
        y = true;
        let arr5 = 5;
        gr5 = false;
        winningx(arr5);
      } else {
        document.getElementById("gd5").innerText = xo[1];
        y = false;
        x = true;
        let arr5 = 5;
        gr5 = false;
        winningy(arr5);
      }
    }
  });

  let gr6 = true;
  grid6.addEventListener("click", () => {
    if (gr6 === true) {
      if (x == true) {
        document.getElementById("gd6").innerText = xo[0];
        x = false;
        y = true;
        let arr6 = 6;
        gr6 = false;
        winningx(arr6);
      } else {
        document.getElementById("gd6").innerText = xo[1];
        y = false;
        x = true;
        let arr6 = 6;
        gr6 = false;
        winningy(arr6);
      }
    }
  });

  let gr7 = true;
  grid7.addEventListener("click", () => {
    if (gr7 === true) {
      if (x == true) {
        document.getElementById("gd7").innerText = xo[0];
        x = false;
        y = true;
        let arr7 = 7;
        gr7 = false;
        winningx(arr7);
      } else {
        document.getElementById("gd7").innerText = xo[1];
        y = false;
        x = true;
        let arr7 = 7;
        gr7 = false;
        winningy(arr7);
      }
    }
  });

  let gr8 = true;
  grid8.addEventListener("click", () => {
    if (gr8 === true) {
      if (x == true) {
        document.getElementById("gd8").innerText = xo[0];
        x = false;
        y = true;
        let arr8 = 8;
        gr8 = false;
        winningx(arr8);
      } else {
        document.getElementById("gd8").innerText = xo[1];
        y = false;
        x = true;
        let arr8 = 8;
        gr8 = false;
        winningy(arr8);
      }
    }
  });
});



let win = [
  [0, 1, 2],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],

];

let t1 = [];
let t2 = [];
let t3 = [];
let val = [];
let val3 = [];
let val2 = [];
let index = true;
let index1 = true;
let values = true;
let result = document.getElementById("result");

if (values === true) {
  if (index) {
    function winningx(arr) {
      val.push(arr);
      console.log(val);
      if (val.length === 3) {
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 2; i++) {
            if (wins.includes(val[i])) {
              t1[i] = 0;
              if (i === 2) {
                if (t1[0] === 0 && t1[1] === 0 && t1[2] === 0) {
                  result.innerText = "WINNING X";
                  console.log("stop");
                  alert("WINNING X");
                  
                  break;
                }
              }
            }
            else {
              t1.length = 0;
            }
          }
        }
      }

      else if (val.length === 4) {
        console.log(val);
        console.log(t1);
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 3; i++) {
            if (wins.includes(val[i])) {
              t1.push(0);
              console.log(t1);

              if (i === 3) {
                if (t1[0] === 0 && t1[1] === 0 && t1[2] === 0) {
                  result.innerText = "WINNING X";
                  console.log("stop");
                  alert("WINNING X");
                  console.log(val);
                  
                  break;
                }
              }
            }
            /* else {
              t1.length = 0;
              console.log(t1);
            } */
          }
          t1.length = 0;
        }

      }

      if (val.length === 5) {
        console.log(val);
        console.log(t1);
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 4; i++) {
            if (wins.includes(val[i])) {
              t1.push(0);
              console.log(t1);
              if (i === 4) {
                if (t1[0] === 0 && t1[1] === 0 && t1[2] === 0) {
                  result.innerText = "WINNING X";
                  console.log("stop");
                  console.log(val);
                  alert("WINNING X");
                  
                  break;
                }
              }
            }
            /* else {
              t1.length = 0;
              console.log(t1);
            } */
          }
          t1.length = 0;
        }
      }
      

    }
  }

  if (index1) {
    function winningy(arr1) {
      val2.push(arr1);
      console.log(val2);
      if (val.length === 3) {
        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 2; i++) {
            if (wins.includes(val2[i])) {
              t2[i] = 1;
              if (i === 2) {
                if (t2[0] === 1 && t2[1] === 1 && t2[2] === 1) {
                  result.innerText = "WINNING Y";
                  console.log("stop");
                  alert("WINNING Y");
                  
                  break;
                }

              }
            }
            else {
              t2.length = 0;
            }
          }
        }
      }

      if (val2.length === 4) {
        console.log(val2);
        console.log(t2);

        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 3; i++) {
            if (wins.includes(val2[i])) {
              t2.push(1);
              console.log(t2 + " " + val + " " + j + " " + i);
              if (i === 3) {
                if (t2[0] === 1 && t2[1] === 1 && t2[2] === 1) {
                  result.innerText = "WINNING Y";
                  console.log("stop");
                  alert("WINNING Y");
                  
                  break;
                }
                /* else {
  
                  t2.length = 0;
                  console.log(t2);
                } */
              }
            }
            /* else {
              t2.length = 0;
              console.log(t2);
            } */
          }
          t2.length = 0;
        }
        
      }

      if (val2.length === 5) {
        console.log(val2);
        console.log(t2);

        for (let j = 0; j < win.length; j++) {
          let wins = win[j].flat();
          for (let i = 0; i <= 4; i++) {
            if (wins.includes(val2[i])) {
              t2.push(1);
              console.log(t2 + " " + val + " " + j + " " + i);
              if (i === 4) {
                if (t2[0] === 1 && t2[1] === 1 && t2[2] === 1) {
                  result.innerText = "WINNING Y";
                  alert("WINNING Y");
                  console.log("stop");
                  break;
                }
                /* else {
  
                  t2.length = 0;
                  console.log(t2);
                } */
              }
            }
            /* else {
              t2.length = 0;
              console.log(t2);
            } */
          }
          t2.length = 0;
        }
      }
    }
  }
  values = false;
}


