/* "use strict";

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  } //рекурсия
  return result;
}
//
function pow(x, n) {
  if (n === 1) {
   
    return x;
   
  } else {
    return x * pow(x, n - 1);   // рекурсия
    
  }
}
console.log(pow(5, 5)); //3125 */
let Students = {
    js:[{
        name:'James',
        progress: 100
    },
    {
        name:'Lisa',
        progress:60
    }

    ],
    html:{
             pro:[
                     {     
                         name:'Anna',
                          progress:20
                       },
                     {
                          name:'Bakai',
                         progress:18
                    }],
             basic:[

                     {
                         name:'Abujahl',
                          progress:10
                     }
        ]
    
}};

/* function getTotal(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;
        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
} */

function getTotalByRecursion (data) {
  if(Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i< data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length]
  } else {
    let total = [0,0];
    for(let subData of Object.values(data)) {
      const subDataArr = getTotalByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total
  }
};
const result = getTotalByRecursion(Students);
console.log(result[0]/ result[1]);
