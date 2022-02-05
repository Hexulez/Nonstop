const {summa, verkkosivusto, ruoka, paiva, jako, name, kerroNumerot, turtlePower} = require("./testaus");

test("2 + 3 = 5",()=>{
  expect(summa(2,3)).toBe(5);
});

test("verkkosivusto = edabit.com", ()=>{
  expect(verkkosivusto).toBe("edabit.com");
});

test("ruoka = pizza", ()=>{
  expect(ruoka).toBe("pizza");
});

test("paiva = 19", ()=>{
  expect(paiva).toBe(19);
});

test("100 / 2 = 50", ()=>{
  expect(jako).toBe(50);
});

test("firstName + lastName", ()=>{
  expect(name).toBe("Luke Skywalker")
})

test.each([[1,1,1],[2,2,4],[3,3,9]])(
  "%i * %i = %i", (num1, num2, total)=>{
    expect(kerroNumerot(num1,num2)).toBe(total)
  }
)

/*
do later
test("kilpikonnat[3] = Donatello", ()=>{
  expect(turtlePower(kilpikonnat[3]).toBe("Donatello"));
})
*/
