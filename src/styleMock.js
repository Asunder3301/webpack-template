const styleMock = new Proxy({}, {
  get: (target, key) => key,
});

export default styleMock;
