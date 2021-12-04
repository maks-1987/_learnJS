//   ================ Map & Set =====================
let john = {
    name: 'john',
  };
  
  let visitsMap = new Map();
  
  visitsMap.set(john, 1111);
  
  console.log(visitsMap.get(john));
  
  visitsMap.set(NaN, 'it is NaN!!!').set(1, '1').set('2', 2);
  
  console.log(visitsMap.get(NaN));
  
  for (let visitsKey of visitsMap.keys()) {
    console.log(visitsKey);
  }
  
  for (let visitsValue of visitsMap.values()) {
    console.log(visitsValue);
  }
  
  // for(let visitsEntry of visitsMap.entries()) {
  for (let visitsEntry of visitsMap) {
    console.log(visitsEntry);
  }
  
  visitsMap.forEach((value, key) => {
      console.log(`${key}: ${value}`);
  });


//   ================= WeakMap & WeakSet ===============
