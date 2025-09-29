$(function() {
    $(document).tooltip();
});

$(function() {
    $('#grades-form').on('submit', function(e) {
        e.preventDefault();
        if ($('#avg').val() === '' || $('#midterm').val() === '' || $('#final').val() === '' || $('#participation').val() === '') {
            $('#grades-result').text('Error: Some input fields are empty. Please enter all scores.');
            return;
        }
        const n1 = parseFloat($('#avg').val()) || 0;
        const n2 = parseFloat($('#midterm').val()) || 0;
        const n3 = parseFloat($('#final').val()) || 0;
        const n4 = parseFloat($('#participation').val()) || 0;
        const w1 = .5
        const w2 = .2
        const w3 = .2
        const w4 = .1
        const finalAvg = parseInt(n1 * w1 + n2 * w2 + n3 * w3 + n4 * w4) || 0
        $('#grades-result').html('Final Grade: ' + finalAvg + '%, Letter Grade: ' + (finalAvg >= 90 ? 'A' : finalAvg >= 80 ? 'B' : finalAvg >= 70 ? 'C' : finalAvg >= 60 ? 'D' : 'F') + (finalAvg >= 70 ? '' : '<br><br>Student must retake the course'));
    });
    $('#grades-clear').on('click', function() {
        $('#grades-result').text('');
    });          
});

$(function() {
    $('#sales-form').on('submit', function(e) {
        e.preventDefault();
        const n1 = parseFloat($('#item1').val()) || 0;
        const n2 = parseFloat($('#item2').val()) || 0;
        const n3 = parseFloat($('#item3').val()) || 0;
        const n4 = parseFloat($('#item4').val()) || 0;
        const p1 = 20.99
        const p2 = 12.75
        const p3 = 9.95
        const p4 = 35.89
        const t1 = n1 * p1
        const t2 = n2 * p2
        const t3 = n3 * p3
        const t4 = n4 * p4
        const totalAmount = t1 + t2 + t3 + t4
        const totalWeeklyEarnings = totalAmount * 0.09 + 250
        $('#qty1').val(n1);
        $('#qty2').val(n2);
        $('#qty3').val(n3);
        $('#qty4').val(n4);
        $('#total1').val('$' + t1.toFixed(2));
        $('#total2').val('$' + t2.toFixed(2));
        $('#total3').val('$' + t3.toFixed(2));
        $('#total4').val('$' + t4.toFixed(2));
        $('#totalamount').val('$' + totalAmount.toFixed(2));
        $('#totalearnings').val('$' + totalWeeklyEarnings.toFixed(2));
    });
    $('#sales-clear').on('click', function() {
        $('#sales-result input').val('');
    });          
});