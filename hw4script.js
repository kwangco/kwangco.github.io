$(function() {
    $("#draggable").draggable();
});

$(function() {
    let nums = []
    let sumResult = 0
    let productResult = 1
    for (let i = 5; i <= 25; i+=4) {
        nums.push(i)
        sumResult += i
        productResult *= i
    }
    let productString = nums.join(' * ')
    let sumString = nums.join(' + ')
    $('#product-result').text(`The result of ${productString} is ${productResult.toLocaleString()}`);
    $('#sum-result').text(`The result of ${sumString} is ${sumResult.toLocaleString()}`);  
});

$(function() {
    let nums = []
    let sumResult = 0
    let productResult = 1
    for (let i = 3; i <= 18; i+=3) {
        nums.push(i)
        sumResult += i
        productResult *= i
    }
    let productString = nums.join(' * ')
    let sumString = nums.join(' + ')
    $('#product-result-2').text(`The result of ${productString} is ${productResult.toLocaleString()}`);
    $('#sum-result-2').text(`The result of ${sumString} is ${sumResult.toLocaleString()}`);  
});

$(function() {
    const rates = [['#table1', .05], ['#table2', .06], ['#table3', .07]]
    for (const rateArr of rates) {
        const tableId = rateArr[0];
        const rate = rateArr[1];
        let tableHTML = '<table><tr><th>Year</th><th>Amount on deposit</th><th>Interest Rate</th></tr>';
        for (let year = 1; year <= 5; year++) {
            const amount = (1000 * Math.pow((1 + rate), year)).toFixed(2);
            tableHTML += '<tr><td>' + year + '</td><td>' + amount + '</td><td>' + rate + '</td></tr>';
        }
        tableHTML += '</table>';
        $(tableId).html(tableHTML);        
    }
})