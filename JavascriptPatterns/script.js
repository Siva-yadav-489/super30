//butterfly pattern
let n = 4;
let m = 8;
let text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (j <= i || j > m - i) {
      text += "*";
    } else {
      text += " ";
    }
  }
  text += "<br>";
}

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= m; j++) {
    if (j <= i || j > m - i) {
      text += "*";
    } else {
      text += " ";
    }
  }
  text += "<br>";
}

document.getElementById("butterfly").innerHTML = text;

//Hollow daimond inscribed square
n = 7;
text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == 1 || j == 1 || i == n || j == n || i == j || j == n - i + 1) {
      text += "*";
    } else {
      text += " ";
    }
  }
  text += "<br>";
}

document.getElementById("HollowDiamondInscribedSquare").innerHTML = text;

// Numeric Palindromic Pyramid
n = 5;
text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    text += " ";
  }
  for (let j = 1; j <= i; j++) {
    text += j;
  }
  for (let j = i - 1; j >= 1; j--) {
    text += j;
  }
  text += "<br>";
}

document.getElementById("NumericPalindromicPyramid").innerHTML = text;

// X Pattern With Numbers
n = 5;
text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || j == n - i + 1) {
      text += j;
    } else {
      text += " ";
    }
  }

  text += "<br>";
}

document.getElementById("XPatternWithNumbers").innerHTML = text;

//Spiral Square Matrix
n = 5;
text = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    let min = Math.min(i, j, n - i + 1, n - j + 1);
    text += min + " ";
  }
  text += "<br>";
}
document.getElementById("SpiralSquareMatrix").innerHTML = text;

//Pyramid with Increasing Numbers
n = 5;
text = "";

let x = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    text += " ";
  }
  for (let j = 1; j <= i; j++) {
    text += x;
    text += " ";
    x++;
  }

  text += "<br>";
}

document.getElementById("PyramidwithIncreasingNumbers").innerHTML = text;

//Hollow Number Pyramid
n = 5;
text = "";

// x = 1;
for (let i = 1; i <= n; i++) {
  x = 1;
  for (let j = 1; j <= n - i; j++) {
    text += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (j > 1 && j < i && i != n) {
      text += " ";
      text += " ";
    } else {
      text += x;
      text += " ";
    }
    x++;
  }

  text += "<br>";
}
document.getElementById("HollowNumberPyramid").innerHTML = text;

//Pascals Triangle With Stars
n = 5;
text = "";

for (let i = 1; i <= n; i++) {
  x = 1;
  for (let j = 1; j <= n - i; j++) {
    text += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (j > 1 && j < i && i != n) {
      text += " ";
      text += " ";
    } else {
      text += "*";
      text += " ";
    }
    x++;
  }

  text += "<br>";
}
document.getElementById("PascalsTriangleWithStars").innerHTML = text;

//Zig-Zag Wave Pattern

n = 3;
m = 15;
text = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (i % 5 == 1) {
      if (j % 5 == 3) {
        text += "*";
      } else {
        text += " ";
      }
    } else if (i % 5 == 2) {
      if (j % 5 == 2 || j % 5 == 4) {
        text += "*";
      } else {
        text += " ";
      }
    } else if (i % 5 == 3) {
      if (j % 5 == 0 || j % 5 == 1) {
        text += "*";
      } else {
        text += " ";
      }
    }
  }
  text += "<br>";
}

// for (let i = 1; i <= n; i++) {
//   for (let repeat = 0; repeat < 3; repeat++) {
//     // Repeat 3 times horizontally
//     for (let j = 1; j <= m - i; j++) {
//       text += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       if (j > 1 && j < i) {
//         text += "  "; // Two spaces for hollow effect
//       } else {
//         text += "* ";
//       }
//     }
//     text += "  "; // Space between repeated patterns
//   }
//   text += "\n"; // Move to the next line
// }
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= m - i; j++) {
//     text += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     if (j > 1 && j < i) {
//       text += " ";
//       text += " ";
//     } else {
//       text += "*";
//       text += " ";
//     }
//   }
//   text += "<br>";
// }
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= m - i; j++) {
//     text += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     if (j > 1 && j < i) {
//       text += " ";
//       text += " ";
//     } else {
//       text += "*";
//       text += " ";
//     }
//   }
//   text += "<br>";
// }
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= m; j++) {
//     if ((i + j) % 4 == 0 || (i == 2 && j % 4 == 0)) {
//       text += "*";
//     } else {
//       text += " ";
//     }
//   }
//   text += "<br>";
// }

document.getElementById("ZigZagWavePattern").innerHTML = text;

// Concentric Rectangle Pattern
n = 5;
text = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    let min = Math.max(i, j, n - i + 1, n - j + 1);
    text += min + " ";
  }
  text += "<br>";
}
document.getElementById("ConcentricRectanglePattern").innerHTML = text;
