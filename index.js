let lengthOfSequence=7

function output(arr){
  for(let i=0; i<height; i++)
    console.log(arr[i])
}

function Vmirror(){
  Vborder/=2
  let bool=0
  let cou=0
  for(let i=long-1; i>-1; i--){
    if(cou%Vborder==0)
      bool=!bool
    z[0][i]=bool
    cou++
  }
}

function Gmirror(){
  Gborder/=2
  let bool=0
  let cou=0
  for(let i=0; i<height; i++){
    if(cou%Gborder==0)
      bool=!bool
    z[i][long-1]=bool
    cou++
  }
}

function fillMirror(){
  for(let i=1; i<height; i++)
    for(let j=0; j<long-1; j++){
         z[i][j]=z[i][long-1]==z[0][j]
    }
}

function fillColumn(border, iter, bool){
  for(let i=0; i<height; i++)
    for(let j=border; j>-1; j-=iter){
      v[i][j]=z[i][j]==bool
    }
    it1/=2
}

function fillString(border, iter, bool){
  for(let i=border; i>-1; i-=iter)
    for(let j=0; j<long; j++){
      g[i][j]=z[i][j]==bool
    }
    it2/=2
}

function fill(){
  for(let k=0; k<lengthOfSequence; k++){
    if(sequence[k]%2==0){
      VleftBorder=(VleftBorder+VrightBorder-1)/2
      fillColumn(VleftBorder, it1,sequence[k]==0)
      Vmirror() 
    } 
    else{
      GleftBorder=(GleftBorder+GrightBorder-1)/2
      fillString(GleftBorder, it2,sequence[k]==1)
      Gmirror()
    }
    fillMirror()
  }
}



console.log("A=0,B=2,C=1,D=3")
console.log("generated sequence:")

let nOdd=0;
let nEven=0;

sequence=[lengthOfSequence]
// sequence=[0,3,2,1,2,0]
// sequence=[1,2,2,0,0,3,1]
for(let i=0; i<lengthOfSequence; i++){
  sequence[i]=Math.floor(Math.random()*4)
  nOdd+=sequence[i]%2
  nEven+=!(sequence[i]%2)
}
var long=2**nEven
var height=2**nOdd
var Vborder=long
var Gborder=height

var VleftBorder=-1
var VrightBorder=long
var GleftBorder=-1
var GrightBorder=height

var it1=long
var it2=height
  
console.log(sequence)
console.log("odd: "+nOdd)
console.log("even: "+nEven)
console.log("long: "+long)
console.log("height: "+height)

v=[long]
g=[long]
z=[long]
paper=[long]

for(let i=0; i<height; i++){
  v[i]=new Array(long);
  g[i]=new Array(long);
  z[i]=new Array(long);
  paper[i]=new Array(long);
}

for(let i=0; i<height; i++)
  for(let j=0; j<long; j++){
    v[i][j]=9
    g[i][j]=9
    z[i][j]=1
    paper[i][j]='.'
  }

// output(z)

fill()
let result=nSQ()
output(paper)
console.log("number of the right squares: "+result)


function nSQ(){
  let nSquart=0
  for(let i=1; i<height-1; i++){
    for(let j=1; j<long-1; j++){
      rightsq=v[i][j]==v[i][j-1] &&
              v[i][j]==g[i-1][j] &&
              v[i][j]==g[i][j]
      nSquart+=rightsq
      paper[i-1][j]=+rightsq==0? '.':'R'
    }
  }
  return nSquart
}
