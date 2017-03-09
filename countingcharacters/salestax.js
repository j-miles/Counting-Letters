var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function getSum(total, num) {
    return total + num;
}
function calculateSalesTax(salesData, taxRates) {
  var printMe = {};
  for (var i = 0; i < companySalesData.length ; i++) {
    var branchSales = companySalesData[i].sales;
    var totalBranchSales = branchSales.reduce(getSum);
    var branchTax = totalBranchSales * (salesTaxRates[companySalesData[i].province]);
    var currentBranch ={
    name: companySalesData[i].name,
    totalSales: totalBranchSales,
    totalTaxes: branchTax
    }
    var currentName = companySalesData[i].name;
    if (printMe[currentName]) {
     printMe[currentName].totalSales += totalBranchSales;
     printMe[currentName].totalTaxes += branchTax;
    } else {
      printMe[currentName] = {totalSales: totalBranchSales, totalTaxes: branchTax};
    }
  }
  return printMe;
}
console.log(calculateSalesTax(companySalesData, salesTaxRates));

//var results = calculateSalesTax(companySalesData, salesTaxRates);

/*
 Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/