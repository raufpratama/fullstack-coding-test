let arrayA = [
  { "label": 1, "parent": null },
  { "label": 2, "parent": 1 },
  { "label": 3, "parent": 2 },
  { "label": 4, "parent": 2 },
  { "label": 5, "parent": 1 },
  { "label": 6, "parent": 1 },
  { "label": 7, "parent": 6 },
  { "label": 8, "parent": 6 },
  { "label": 9, "parent": 8 }
]

// interface Tree {
//   label: number
//   children: Tree[]
// }

/*tree A = {
  "label": 1, 
  "children": [
    {
      "label": 2, 
      "children": [
        { "label": 3, "children": [] },
        { "label": 4, "children": [] }
      ]
    },
    { "label": 5, "children": [] },
    {
      "label": 6, 
      "children": [
        { "label": 7, "children": [] },
        {
          "label": 8, 
          "children": [
            { "label": 9, "children": [] }
          ]
        }
      ]
    }
  ]
}*/// --> expected output

function makeItTree(list) {
  let map = {}, node = {}, roots = {};
  let i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].label] = i;
    list[i].children = [];
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent) {
      list[map[node.parent]].children.push(node);
    } else {
      roots = list[i];
    }
  }
  return roots;
}

console.log(JSON.stringify(makeItTree(arrayA)))