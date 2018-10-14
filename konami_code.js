const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var codeIndex = 0;

function init() {
  document.body.addEventListener('keydown', function(e){
    console.log(e.key);
    if (e.key === codes[codeIndex]){
      codeIndex++;
      console.log(codeIndex);
    }else{
      codeIndex = 0;
      console.log(codeIndex);
    }
    if (codeIndex === codes.length){
      alert('Code activated!');
    }
  })
}
