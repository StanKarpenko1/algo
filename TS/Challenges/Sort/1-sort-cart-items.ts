//#region task
/**
 * Challenge 1: Sorting Cart Items by Priority and Type
 * 
 * Scenario:
    You're building an e-commerce cart system. Each item in the cart has the following structure:
 
    type CartItem = {
        sku: string;
        type: 'product' | 'kit' | 'service';
        priority: number; // higher number = higher priority
      }

 * You need to display cart items with this rule:

Sort by priority descending (highest first).

If two items have the same priority, products come first, then kits, then services.

Task:
***Write a function in JavaScript or TypeScript that takes an array of CartItem and returns the sorted array.

*/
//#endregion Task

//#region DB
type CartItem = {
   sku: string;
   type: 'product' | 'kit' | 'service';
   priority: number;
 };

const cart: CartItem[] = [
   { sku: '001', type: 'kit', priority: 2 },
   { sku: '002', type: 'product', priority: 3 },
   { sku: '003', type: 'service', priority: 3 },
   { sku: '004', type: 'product', priority: 2 },
   { sku: '005', type: 'service', priority: 1 },
 ];


//#endregion DB

//#region Solution

// SOLUTION:

// 1. Sort by priority descending: b.priority - a.priority
// 2. assign type weights: { product: 0, kit: 1, service: 2 }

function sortCartItems (cart: CartItem[]) : CartItem[] {

   const typeOrder: Record<CartItem['type'], number> = {
      product: 0, 
      kit: 1, 
      service: 2 
   }

   return cart.sort ((a, b) => {
      if ( b.priority !== a.priority){
         return b.priority - a.priority;
      }

      return typeOrder[a.type] - typeOrder[b.type]
      
   })
}


//#endregion Solution

//#region tests
function runTest(description: string, testFn: () => void) {
   try {
     testFn();
     console.log(`✅ ${description}`);
   } catch (error) {
     console.error(`❌ ${description}`);
     console.error(error);
   }
 };
 function expectEqual(actual: any, expected: any) {
   const a = JSON.stringify(actual);
   const e = JSON.stringify(expected);
   if (a !== e) {
     throw new Error(`Expected: ${e}, but got: ${a}`);
   }
 };
 runTest('TEST - sorts by priority descending', () => {
   const input: CartItem[] = [...cart];
   const result = sortCartItems([...input]).map(i => i.sku);
   const expected = ['002', '003', '004', '001', '005'];
   expectEqual(result, expected);
 });
 runTest('TEST - sorts by type when priorities are equal', () => {
   const result = sortCartItems([...cart]).map(i => i.priority);
   const expected = [3,3,2,2,1];
   expectEqual(result, expected);
 });
 
 
//#endregion tests

console.table(sortCartItems(cart))




