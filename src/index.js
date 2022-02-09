module.exports = function reverse (n) {
	if (n < 0) n = -n;
  let otvet = '';
   while (n) {
       otvet += n % 10;
       n = Math.floor(n / 10);
   }
   return otvet;
  
}
