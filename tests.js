// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be define function', function () {
        expect(typeof sayHello).toBe('function');

    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World! when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed with input true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed with input false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed with input ""', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when executed with input 2.3', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});



describe('isFive', function(){
    it ('should be a defined function',function(){
        expect(typeof isFive).toBe('function');
    });
    it ('should return a boolean', function(){
        expect(typeof isFive()).toBe('boolean')
    });
    it ('should return true if inputted 5', function(){
        expect(isFive(5)).toBe(true)
    });

    it ('should return true if "5" is inputted', function(){
        expect(isFive("5")).toBe(true);
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
});








