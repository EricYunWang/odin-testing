function analyzeArray(array){
    return {
        average: average(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}

function average(arr){
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

module.exports = analyzeArray;