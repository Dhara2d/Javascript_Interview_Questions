function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(curriedAdd(1)(2)(3))

//Real world example

//Here createApiRequest will be called first with baseurl as the argument, => api
//then this will return a function which has arugment of endpoint => getUsers, getPosts, that will 
//return a function with params as arguemnt => finally getUsers and getPosts 
//will be called with params as argument
function createApiRequest(baseUrl) {
    return function(endpoint) {
      return async function(params) {
        const url = `${baseUrl}${endpoint}?${new URLSearchParams(params).toString()}`;
        return await fetch(url).then(response => response.json());
      };
    };
  }
  
  const api = createApiRequest("https://api.example.com");
  const getUsers = api("/users");
  const getPosts = api("/posts");
  
  getUsers({ page: 1, limit: 10 }).then(data => console.log(data));  // Fetches users
  getPosts({ userId: 5 }).then(data => console.log(data)); 