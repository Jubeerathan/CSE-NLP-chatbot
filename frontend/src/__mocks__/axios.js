// In __mocks__/axios.js
const axios = {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        token:
          "eyJhbGciOiJFUzI1NiIsImtpZCI6ImtleTEiLCJ0eXAi.k0NzJlYjEzNGE5Mzg4MWQ2NVyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy8wZGU3ZGQ3OS1lNjIxLTQ2MmEtODgwNy0wNjg3YzkxZTU2YWIvcmVzb3VyY2VHcm91cHMvTkxQLUNoYXRib3QvcHJvdmlkZXJzL01pY3Jvc29mdC5Db2duaXRpdmVTZXJ2aWNlcy9hY2NvdW50cy9Wb2ljZVJlY2c.iGbSfbZj0b6voyj_nP3hJW1T3QUez-xqcQo74tlAwgkrpS1LFA0p",
      },
    })
  ), // Mock the axios.get method
  // You can add other axios methods and their mock implementations here if needed.
};

export default axios;
