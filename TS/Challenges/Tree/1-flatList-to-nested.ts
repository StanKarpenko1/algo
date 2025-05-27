import test from '../../Utils/testHelpers'
 
//#region Task
/**
 * Challenge 2: Building a Category Tree from Flat Data
 * 
 * Scenario:
    You’re given a flat list of product categories from a database. Each item has:
    
    type Category = {
        id: number;
        name: string;
        parentId: number | null;
    }

    Your task is to build a nested tree structure from this flat list.

Output Structure:

type CategoryNode = {
    id: number;
    name: string;
    children: CategoryNode[];
}

Example Input:
[
  { id: 1, name: 'Electronics', parentId: null },
  { id: 2, name: 'Laptops', parentId: 1 },
  { id: 3, name: 'Phones', parentId: 1 },
  { id: 4, name: 'Gaming Laptops', parentId: 2 },
]

Expected Output:
[
  {
    id: 1,
    name: 'Electronics',
    children: [
      {
        id: 2,
        name: 'Laptops',
        children: [
          { id: 4, name: 'Gaming Laptops', children: [] }
        ]
      },
      {
        id: 3,
        name: 'Phones',
        children: []
      }
    ]
  }
]
 */
//#endregion Task

//#region DB

type Category = {
    id: number;
    name: string;
    parentId: number | null;
  };
  
  type CategoryNode = {
    id: number;
    name: string;
    children: CategoryNode[];
  };
  
  const categories: Category[] = [
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Laptops', parentId: 1 },
    { id: 3, name: 'Phones', parentId: 1 },
    { id: 4, name: 'Gaming Laptops', parentId: 2 },
    { id: 5, name: 'Ultrabooks', parentId: 2 },
    { id: 6, name: 'Smartphones', parentId: 3 },
    { id: 7, name: 'Android Phones', parentId: 6 },
    { id: 8, name: 'iPhones', parentId: 6 },
    { id: 9, name: 'Accessories', parentId: null },
    { id: 10, name: 'Chargers', parentId: 9 },
    { id: 11, name: 'Phone Chargers', parentId: 10 },
    { id: 12, name: 'Laptop Chargers', parentId: 10 },
    { id: 13, name: 'Cables', parentId: 9 },
    { id: 14, name: 'USB-C Cables', parentId: 13 },
    { id: 15, name: 'HDMI Cables', parentId: 13 },
  ];
  
  
  //#endregion DB
  
//#region Solution
function buildCategoryTree (categories: Category[]): CategoryNode[]  {
  
// crate map id to node
const map = new Map<number, CategoryNode>() 
const roots: CategoryNode [] = []

// add to map - itterate through cat and crate roots
for (const cat of categories) {
  map.set(cat.id, {...cat, children: []})
}

// add nodes to root - itterate through cat
for (const cat of categories) {
  const node = map.get(cat.id)!
  if ( cat.parentId === null) {
    roots.push(node) ;
  } else {
    const parent = map.get(cat.parentId)!
    if (parent) { parent.children.push(node)} 
  }
}

  return roots
}

//#endregion Solution
  
// console.dir(buildCategoryTree(categories), { depth: null });

//#region tests
test.runTest('builds category tree with correct root nodes', () => {
  const result = buildCategoryTree([...categories]);

  const actualRootNames = result.map(node => node.name).sort();
  const expectedRootNames = ['Accessories', 'Electronics'];

  test.expectEqual(actualRootNames, expectedRootNames);
});
test.runTest('builds correct tree structure for Electronics → Phones → Smartphones → Android Phones', () => {
  const tree = buildCategoryTree([...categories]);
  const electronics = tree.find(cat => cat.name === 'Electronics')!;
  const phones = electronics.children.find(cat => cat.name === 'Phones')!;
  const smartphones = phones.children.find(cat => cat.name === 'Smartphones')!;
  const android = smartphones.children.find(cat => cat.name === 'Android Phones')!;

  test.expectEqual(android.name, 'Android Phones');
  test.expectEqual(android.children.length, 0);
});

//#endregion tests
  