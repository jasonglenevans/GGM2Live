var s = document.createElement('script');
s.text = "console.log(window);";
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};
console.log(window);