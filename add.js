var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;
  var answer = frac(bunshi, bunbo);
  return answer;

};
a = frac(1,3);
b = frac(4,3);
c = add(a,b);
console.log(c);

add(a,b)

ーーーー

var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;

  if(Number.isInteger(b)){

  b = frac(b,1);

  }

  if(a.bunbo !== b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a.bunbo * b.bunbo;


  }else{
    bunshi = a.bunshi + b.bunshi;
    bunbo = a.bunbo;
  }

  var answer = frac(bunshi, bunbo);
  return answer;

};

a = frac(1,4);
b = frac(b,1);
c = add(a,1);
console.log(c);

add(a,1);

/*
[object Object]
*/

ーーーー

var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;

  if(Number.isInteger(b)){

  b = frac(b,1);

  }

  if(a.bunbo !== b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a.bunbo * b.bunbo;


  }else{
    bunshi = a.bunshi + b.bunshi;
    bunbo = a.bunbo;
  }

  var answer = frac(bunshi, bunbo);
  return answer;

};

a = frac(2,3);
b = frac(b,1);
c = add(4,a);
console.log(c);

add(4,a);


/*
[object Object]
*/

-----

var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;

  if(Number.isInteger(a) && Number.isInteger(b)){
    return a + b;

  }


  if(Number.isInteger(a)){

  a = frac(a,1);

  }

  if(Number.isInteger(b)){

  b = frac(b,1);

  }

  if(a.bunshi !== b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunbo + b.bunshi * a.bunbo;
    bunbo = a.bunbo * b.bunbo;


  }else{
    bunshi = a.bunshi + b.bunshi;
    bunbo = a.bunbo;
  }

  var answer = frac(bunshi, bunbo);
  return answer;

};

a = frac(4,5);
b = frac(3,7);
c = frac(3,5)
d = add(a,c);
console.log(d);

add(1, 2);
