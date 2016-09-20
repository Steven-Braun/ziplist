/**
 * zipList function
 * Created by steven on 9/19/2016.
 */

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(lista, listb) {
  let combined = [];
  for(let i = 0; i < lista.length; i++) {
    combined.push(lista[i], listb[i]);
  }
  return combined;
}

function zipListTheEasyWay(listc, listd) {
  return _.flatten[_.zip(listc, listd)];
}

console.log(zipList(list1, list2));
console.log(zipListTheEasyWay(list1, list2));


