function run() {
  url = document.getElementById("url").value;
  iter = document.getElementById("iter").value;
  if (url == "" || iter == "") {
    document.getElementById("num").innerHTML = "Error!";
  } else {
    iter = Number(iter);
	arr = [];
	count = [];
    for (i=0; i<iter; i++) {
      fetch(url).then(x => updateElapse(x,arr)).then(y => updateIter(y,count));
	}
  }
}

function updateElapse(x,arr) {
  end = Date.now();
  if (typeof start != "undefined") {
    arr.push(end-start);
    document.getElementById("num").innerHTML = "Elapse: "+arr.reduce((a,b)=>a+b,0)/arr.length+" ms";
  }
  start = Date.now();
  y = 1;
  return y;
}

function updateIter(y,count) {
  count.push(y);
  document.getElementById("status").innerHTML = "Current: "+count.reduce((a,b)=>a+b,0);
}
