function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    year = document.getElementById("years").value;
    interest = principal * year * rate / 100;

    if(principal > 0) {
        in_year = new Date().getFullYear() + parseInt(year)
    
        document.getElementById("result").innerHTML = "<p>If you deposit " + principal 
            + " ,</p><p>at an interest rate of " + rate 
            + "%.</p><p>You will receive an amount of "+ interest
            + "</p><p>In the year " + in_year + "</p>"
    }
    else {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    
}

function change_rate() {
    intallment_rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = intallment_rate + '%';
}