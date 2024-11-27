const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    it("should return the initial greeting", async () => {
        const instance = await HelloWorld.deployed();
        const greeting = await instance.getGreeting();
        assert.equal(greeting, "Hello, World!", "Initial greeting is not correct");
    });

    it("should update the greeting", async () => {
        const instance = await HelloWorld.deployed();
        await instance.setGreeting("Hello, Blockchain!");
        const updatedGreeting = await instance.getGreeting();
        assert.equal(updatedGreeting, "Hello, Blockchain!", "Greeting was not updated");
    });
});
