import sum from "./sum.js"

//We can describe multiple testcases : - 
describe('Sum function test cases', () => {
    test('is sum function giving correct output', ()=>{
        expect(sum(4, 4)).toBe(8);
    }),
    test('is this working for multiply', ()=> {
        expect(sum(9, 9)).toBe(18);
    })
});


test('Additon of the 2 + 2 = 4', () =>{
    expect(sum(4, 4)).toBe(8);
})