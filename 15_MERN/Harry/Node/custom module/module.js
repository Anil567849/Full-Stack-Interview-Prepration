

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}


// single object
// module.element.name = "anil ";


// key value 
module.exports = {
    avg : average, 
    name : "anil"
};