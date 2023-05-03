// insertion sort
tab= [2,1,0,5,7,3];
for(var i=1; i< tab.length; i++){
      var currentElement= tab[i];
      for(var j=i-1; j>=0 && tab[j] > currentElement; j--){
                  tab[j+1]=tab[j];
            
      }
      tab[j+1]=currentElement; 
}
console.log(tab);