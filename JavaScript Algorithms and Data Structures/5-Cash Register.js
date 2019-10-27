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


    if (changeDue >= 100 && changeDue <= cid[8][1]) {
        var quantity = Math.floor((changeDue / 100));
        change.push(["ONE HUNDRED", quantity * 100]);
        changeDue = changeDue - quantity * 100;
    } else if (changeDue >= 100) {
        change.push(["ONE HUNDRED", cid[8][1]]);
        changeDue -= cid[8][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 20 && changeDue <= cid[7][1]) {
        var quantity = Math.floor((changeDue / 20));
        change.push(["TWENTY", quantity * 20]);
        changeDue = changeDue - quantity * 20;
    } else if (changeDue >= 20) {
        change.push(["TWENTY", cid[7][1]]);
        changeDue -= cid[7][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 10 && changeDue <= cid[6][1]) {
        var quantity = Math.floor((changeDue / 10));
        change.push(["TEN", quantity * 10]);
        changeDue = changeDue - quantity * 10;
    } else if (changeDue >= 10) {
        change.push(["TEN", cid[6][1]]);
        changeDue -= cid[6][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);


    if (changeDue >= 5 && changeDue <= cid[5][1]) {
        var quantity = Math.floor((changeDue / 5));
        change.push(["FIVE", quantity * 5]);
        changeDue = changeDue - quantity * 5;
    } else if (changeDue >= 5) {
        change.push(["FIVE", cid[5][1]]);
        changeDue -= cid[5][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 1 && changeDue <= cid[4][1]) {
        var quantity = Math.floor(changeDue / 1);
        change.push(["ONE", quantity * 1]);
        changeDue = changeDue - quantity * 1;
    } else if (changeDue >= 1) {
        change.push(["ONE", cid[4][1]]);
        changeDue -= cid[4][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 0.25 && changeDue <= cid[3][1]) {
        var quantity = Math.floor(changeDue / 0.25);
        change.push(["QUARTER", quantity * 0.25]);
        changeDue = changeDue - quantity * 0.25;
    } else if (changeDue >= 0.25) {
        change.push(["QUARTER", cid[3][1]]);
        changeDue -= cid[3][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 0.1 && changeDue <= cid[2][1]) {
        var quantity = Math.floor(changeDue / 0.1);
        change.push(["DIME", quantity * 0.1]);
        changeDue = changeDue - quantity * 0.1;
    } else if (changeDue >= 0.1) {
        change.push(["DIME", cid[2][1]]);
        changeDue -= cid[2][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 0.05 && changeDue <= cid[1][1]) {
        var quantity = Math.floor(changeDue / 0.05);
        change.push(["NICKEL", quantity * 0.05]);
        changeDue = changeDue - quantity * 0.05;
    } else if (changeDue >= 0.05) {
        change.push(["NICKEL", cid[1][1]]);
        changeDue -= cid[1][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue >= 0.01 && changeDue <= cid[0][1]) {
        var quantity = Math.floor(changeDue / 0.01);
        change.push(["PENNY", quantity * 0.01]);
        changeDue = changeDue - quantity * 0.01;
    } else if (changeDue >= 0.01) {
        change.push(["PENNY", cid[0][1]]);
        changeDue -= cid[0][1];
    }
    changeDue = parseFloat(changeDue).toFixed(2);

    if (changeDue != 0.00) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }


    return { status: "OPEN", change: change };
}