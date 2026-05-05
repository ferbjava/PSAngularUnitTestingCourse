import { StrengthPipe } from "./strength.pipe";

describe('Strenght Pipe', () => {
    it('should display weak if value is 5', () => {
        let pipe = new StrengthPipe();

        let value = pipe.transform(5);
        
        expect(value).toBe("5 (weak)");
    });
   
    it('should display strong if value is 10', () => {
        let pipe = new StrengthPipe();

        let value = pipe.transform(10);
        
        expect(value).toBe("10 (strong)");
    });
});