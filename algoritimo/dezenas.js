import {toString} from "./algarismo"

describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 0", ()=>{
        let algarismo = 0;

        let texto = toString(algarismo);

        expect(texto).toBe("zero");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 1", ()=>{
        let algarismo = 1;

        let texto = toString(algarismo);

        expect(texto).toBe("um");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 2", ()=>{
        let algarismo = 2;

        let texto = toString(algarismo);

        expect(texto).toBe("dois");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 3", ()=>{
        let algarismo = 3;

        let texto = toString(algarismo);

        expect(texto).toBe("tres");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 4", ()=>{
        let algarismo = 4;

        let texto = toString(algarismo);

        expect(texto).toBe("quatro");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 5", ()=>{
        let algarismo = 5;

        let texto = toString(algarismo);

        expect(texto).toBe("cinco");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 6", ()=>{
        let algarismo = 6;

        let texto = toString(algarismo);

        expect(texto).toBe("seis");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 7", ()=>{
        let algarismo = 7;

        let texto = toString(algarismo);

        expect(texto).toBe("sete");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 8", ()=>{
        let algarismo = 8;

        let texto = toString(algarismo);

        expect(texto).toBe("oito");
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test("caso seja 9", ()=>{
        let algarismo = 9;

        let texto = toString(algarismo);

        expect(texto).toBe("nove");
    });
describe("transforme uma algarismo em um texte ", () =>{
    test('caso seja "a"', ()=>{
        let algarismo = "a";

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`);
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test('caso seja true', ()=>{
        let algarismo = true;

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`);
    });
});
describe("transforme uma algarismo em um texte ", () =>{
    test('caso seja false', ()=>{
        let algarismo = false;

        let texto = toString(algarismo);

        expect(texto).toBe(`${algarismo} nao e um algarismo`);
    });
});
})