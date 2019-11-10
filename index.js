function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const dil = document.querySelector( `div.target`);
  return dil
}


function deepestChild(){
  
  const duck = document.querySelector('#grand-node div div div div ')
  
  return duck
    
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list').children
  for (let i =0;i<list.length;i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
  
  // const list2 = document.querySelectorAll('ul.ranked-list')[1].children
  // for (let i =0;i<list.length;i++){
  //   list2[i].innerHTML = (parseInt(list2[i].innerHTML) + n).toString()
  // }
  
}