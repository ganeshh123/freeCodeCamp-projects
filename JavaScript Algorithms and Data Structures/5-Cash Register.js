function checkCashRegister(price, cash, cid) {
    var change = [];
    var drawerTotal = 0.00;
    var changeDue = Math.round((cash - price) * 100) / 100;

    // Calculate the Total Cash in the Drawer
    cid.forEach(function(currencyType) {
        drawerTotal += currencyType[1];
    })
    drawerTotal = Math.round(drawerTotal * 100) / 100;

    if (drawerTotal < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }


    return change;
}