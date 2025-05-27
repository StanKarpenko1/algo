
 function runTest(description: string, testFn: () => void) {
    try {
      testFn();
      console.log(`✅ ${description}`);
    } catch (error) {
      console.error(`❌ ${description}`);
      console.error(error);
    }
  }
  
   function expectEqual(actual: any, expected: any) {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a !== e) {
      throw new Error(`Expected: ${e}, but got: ${a}`);
    }
  }

  const testUtils = {
    runTest,
    expectEqual
  }

  export default testUtils
  