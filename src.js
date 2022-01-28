const { get, getSync } = require('@andreekeberg/imagedata')
const brain = require('brain.js')
var res = []
var str
var result
var res2 =[]
var counter2 = 0;
var finalData = []
var finalData2 = []
var data1 = []
var aMatrix
get('tti.png', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        data1 = data
    }
      counter=0
			counter2=1
pixels = ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]
length = data1.data.length
for (j = 0; j < length-1; j+=4) {
	if(finalData[counter]==undefined){finalData[counter] = []}
	finalData[counter].push(pixels[Math.round(data1.data[j]/4)])
	finalData2+=(pixels[Math.round(data1.data[j]/4)])
	
	counter2++
	if(counter2%70==0){
		counter++
		finalData2+=''
	}
}
finalData2 = finalData2.toString()
finalData2 = finalData2.split(",").join("")
finalData2 = finalData2.split("(?!^)")
counter=0;
for(i=0;i<finalData2.length;i++){
	finalData[counter]+=finalData2[i];
	if(i%7==0){
		counter++
	}
}


aMatrix = finalData;
aMatrix.shift()
aMatrix[69] = aMatrix[68];

counter4 = 0
counter5 = 0
multiplier = 1
 res=[]
   result = []
  function chuncks(n){
    let i=0
    while(i<aMatrix.length){
      for(let j=0;j<aMatrix[i].length;j++){
        res.push([aMatrix[i].splice(0,n),aMatrix[i+1].splice(0,n),aMatrix[i+2].splice(0,n),aMatrix[i+3].splice(0,n),aMatrix[i+4].splice(0,n),aMatrix[i+5].splice(0,n),aMatrix[i+6].splice(0,n)])
        res.push([aMatrix[i].splice(0,n),aMatrix[i+1].splice(0,n),aMatrix[i+2].splice(0,n),aMatrix[i+3].splice(0,n),aMatrix[i+4].splice(0,n),aMatrix[i+5].splice(0,n),aMatrix[i+6].splice(0,n)])
        j--
      }
      i+=n
    }
  }
  function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
  chuncks(7)
  str = res[1].toString()
  str = str.split(",").join("");
	for(i=0;i<res.length;i++){
		for(j=0;j<7;j++){
		 if(res[i][j].indexOf('.')==-1 && res[i][j].indexOf('#')==-1){
			res[i][j] = ['.','.','.','.','.','.','.']
		}
		}
	}
  for(i=0;i<res.length;i++){
    res2.push([])
    res2[i].push(res[i].toString())
    res2[i][0]=res2[i][0].split(",").join("")
  }



//========================================================
const a = character(
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#......'
);
const b = character(
  '###.....' +
  '..##....' +
  '...##...' +
  '....##..' +
  '.....##.' +
  '......##' +
  '......##'
);
const c = character(
  '....###' +
  '...##..' +
  '..##...' +
  '.##....' +
  '##.....' +
  '#......' +
  '#......'
);

const d = character(
  '......#' +
  '......#' +
  '......#' +
  '.....#.' +
  '...##..' +
  '.##....' +
  '#......' 
);

const e = character(
  '#......' +
  '#......' +
  '#......' +
  '.#.....' +
  '..##...' +
  '....##.' +
  '......#' 
);

const f = character(
  '.......' +
  '.......' +
  '.#...#.' +
  '#######' +
  '...#...' +
  '.......' +
  '.......'
);

const g = character(
  '......#' +
  '.....#.' +
  '...##..' +
  '...#...' +
  '.##....' +
  '#......' +
  '.......'
);

const h = character(
  '#......' +
  '.#.....' +
  '..##...' +
  '...#...' +
  '....##.' +
  '......#' +
  '.......'
);

const o = character(
  '.......' +
  '.......' +
  '.......' +
  '.......' +
  '.......' +
  '.......' +
  '.......'
);
const k = character(
  '......#' +
  '......#' +
  '......#' +
  '......#' +
  '......#' +
  '......#' +
  '......#'
);



const net = new brain.NeuralNetwork();
net.train([{
    input: a,
    output: {
      a: 1
    }
  },
  {
    input: b,
    output: {
      b: 1
    }
  },
  {
    input: c,
    output: {
      c: 1
    }
  },
  
  {
    input: d,
    output: {
      d: 1
    }
  },
  {
    input: e,
    output: {
      e: 1
    }
  },
  {
    input: f,
    output: {
      f: 1
    }
  },
  {
    input: g,
    output: {
      g: 1
    }
  },
  {
    input: h,
    output: {
      h: 1
    }
  },
  {
    input: o,
    output: {
      o: 1
    }
  },
  
  {
    input: k,
    output: {
      k: 1
    }
  }
  
], {
});

console.log(res2)
var result = ""
for(j=0;j<res2.length-1;j++){
  result += brain.likely(character(res2[j][0]), net);
}
console.log(result.length); 






function character(string) {
  return string
    .trim()
    .split('')
    .map(integer);
}


function integer(character) {
  if ('#' === character) return 1;
  return 0;
}







function character(string) {
  return string
    .trim()
    .split('')
    .map(integer);
}


function integer(character) {
  if ('#' === character) return 1;
  return 0;
}
})
