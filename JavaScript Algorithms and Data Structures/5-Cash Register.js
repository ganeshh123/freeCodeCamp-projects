function checkCashRegister(price, cash, cid) {
    var change = [];
    var drawerTotal = 0.00;
    var changeDue = Math.round((cash - price) * 100) / 100;
    var status = "";

    // Calculate the Total Cash in the Drawer
    cid.forEach(function(currencyType) {
        drawerTotal += currencyType[1];
    })
    drawerTotal = Math.round(drawerTotal * 100) / 100;

    if (drawerTotal < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (drawerTotal == changeDue) {
        return { status: "CLOSED", change: cid };
    }

    if (changeDue >= 0.25 && changeDue <= cid[3][1]) {
        var quantity = Math.floor(changeDue / 0.25);
        var remainder = Math.floor(changeDue % 0.25);
        change.push(["QUARTER", quantity * 0.25]);
        changeDue = remainder;
    }

    if (changeDue >= 0.1 && changeDue <= cid[2][1]) {
        var quantity = Math.floor(changeDue / 0.1);
        var remainder = Math.floor(changeDue % 0.1);
        change.push(["DIME", quantity * 0.1]);
        changeDue = remainder;
    }

    if (changeDue >= 0.05 && changeDue <= cid[1][1]) {
        var quantity = Math.floor(changeDue / 0.05);
        var remainder = Math.floor(changeDue % 0.05);
        change.push(["NICKEL", quantity * 0.05]);
        changeDue = remainder;
    }

    if (changeDue >= 0.01 && changeDue <= cid[0][1]) {
        var quantity = Math.floor(changeDue / 0.01);
        var remainder = Math.floor(changeDue % 0.01);
        change.push(["PENNY", quantity * 0.01]);
        changeDue = remainder;
    }


    return { status: "OPEN", change: change };
}