
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if((matrix != '') && (matrix != undefined)){
    for(let i = 0; i<matrix.length; i++){
        if(i%2==0){
          matrix[i] = matrix[i].join();
        } else { 
            matrix[i] = matrix[i].reverse().join();
        }
    }
    return matrix.join().split(',');
    //console.log(matrix.join().split(','));
} else {console.log('hi');  return [];}

}
