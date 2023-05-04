
     const boxOne = document.querySelector ('.box_first');
    const boxTwo= document.querySelector('.box_second');
    const boxThree= document.querySelector('.box_third');
    const background = document.querySelector('body');

  

    boxOne.addEventListener ('click',function (){
      background.style.backgroundColor = '#AED6F1'
    });
    boxTwo.addEventListener ('click',function (){
      background.style.backgroundColor = '#EAA9D4'
    });

    boxThree.addEventListener ('click',function (){
      background.style.backgroundColor = '#C0EEA7'
    }); 
    


