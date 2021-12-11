function ipLocal() {
    const myIp = Object.values(require("os").networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address;
    return myIp
}
console.log(ipLocal());