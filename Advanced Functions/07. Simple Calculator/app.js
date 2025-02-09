function calculator() {
  
   let s1
   let s2
   let  output 
 

  function calc(a, b, sign) {
    const signs = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };

    return signs[sign](Number(a), Number(b));
  }

  return {
    init: (a, b, c) => {
        s1 = document.querySelector(a);
      s2 = document.querySelector(b);
      output = document.querySelector(c);
    },
    add: () => {
      output.value = Number(s1.value )+ Number(s2.value) 
    },
    subtract: () => {
      output.value = calc(s1.value,s2.value, "-");
    },
  };
}
