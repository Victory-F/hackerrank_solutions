// https://www.hackerrank.com/challenges/jim-and-the-orders/problem

function jimOrders(orders) {
  const delivered = orders.map(([t, d], i) => [t + d, i + 1]);
  delivered.sort((a, b) => a[0] - b[0]);
  return delivered.map(([_, i]) => i);
}
