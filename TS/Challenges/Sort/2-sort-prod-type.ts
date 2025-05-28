import test from '../../Utils/testHelpers'

//#region Task
/**
 * Challenge 3: Group Products by Type
 * 
 * Scenario:
    You're given a flat list of products. Each product has a `type` like 'kit', 'product', or 'service'.

    type Product = {
      sku: string;
      type: 'kit' | 'product' | 'service';
      name: string;
    }

 * Task:
    Write a function that groups all products by their type.

    Output structure should be:
    {
      product: [...],
      kit: [...],
      service: [...]
    }

    The order inside each group does not matter.
 */
//#endregion Task

//#region DB

type Product = {
    sku: string;
    type: 'kit' | 'product' | 'service';
    name: string;
  };
  
  const products: Product[] = [
    { sku: '001', type: 'kit', name: 'Kitchen Set' },
    { sku: '002', type: 'product', name: 'Chair' },
    { sku: '003', type: 'service', name: 'Assembly' },
    { sku: '004', type: 'product', name: 'Table' },
    { sku: '005', type: 'kit', name: 'Toolbox' },
    { sku: '006', type: 'service', name: 'Delivery' },
    { sku: '007', type: 'product', name: 'Sofa' },
    { sku: '008', type: 'kit', name: 'Bath Set' },
    { sku: '009', type: 'service', name: 'Installation' },
    { sku: '010', type: 'product', name: 'Lamp' },
  ];
  
  //#endregion DB
  
  //#region Solution
  
  function groupProductsByType(products: Product[]) {
    const grouped: Record<Product['type'], Product[]> = {
      product: [],
      kit: [],
      service: [],
    };
  
    for (const product of products) {
      grouped[product.type].push(product);
    }
  
    return grouped;
  }
  
  //#endregion Solution
  
  //#region Test
  

  const expectedGroupedOutput = {
    product: [
      { sku: '002', type: 'product', name: 'Chair' },
      { sku: '004', type: 'product', name: 'Table' },
      { sku: '007', type: 'product', name: 'Sofa' },
      { sku: '010', type: 'product', name: 'Lamp' },
    ],
    kit: [
      { sku: '001', type: 'kit', name: 'Kitchen Set' },
      { sku: '005', type: 'kit', name: 'Toolbox' },
      { sku: '008', type: 'kit', name: 'Bath Set' },
    ],
    service: [
      { sku: '003', type: 'service', name: 'Assembly' },
      { sku: '006', type: 'service', name: 'Delivery' },
      { sku: '009', type: 'service', name: 'Installation' },
    ]
  };
  
  test.runTest('TEST - groupProductsByType groups products correctly', () => {
    const result = groupProductsByType([...products]);
    test.expectEqual(result, expectedGroupedOutput);
  });
  
  //#endregion Test
  