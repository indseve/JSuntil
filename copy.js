async function copy(value){
  let textarea=document.createElement('textarea');
  textarea.style='position:absolute; width:0; height:0; opacity:0;';
  document.body.appendChild(textarea);
  textarea.value = value;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

//e.g.
function onClick(text){
  copy(text).then(alert(`复制成功`))
}
