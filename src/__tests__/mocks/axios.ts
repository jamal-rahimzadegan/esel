import axios from 'axios';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');

// how to use it:
// test("good response", () => {
// axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {...} }));
// });
