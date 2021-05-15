function palindrome(str){
str=str.toUpperCase().replace(/\s/g,'');
return str===str.split('').reverse().join('');
}
