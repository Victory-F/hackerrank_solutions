// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
    
  const annaBill = bill.reduce((total, price, index) => {
    return index === k ? total : total + price;
  }, 0) / 2;
  
    console.log(annaBill === b ? "Bon Appetit" : b - annaBill);
}
