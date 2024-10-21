const helloWorld = () => new Promise(resolve => {
    setTimeout(() => resolve("Hello World!"), 2000);
});

const messages = async () => {
    const msg = await helloWorld();
    console.log(msg); 
};

export { messages };
