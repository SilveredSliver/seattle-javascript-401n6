class Router {
  constructor() {
    this.routes = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE: {}
    }
  }

  get(path, cb) {
    this.routes.GET[path] = cb;
  }

  post(path, cb) {
    this.routes.POST[path] = cb;
  }

  put(path, cb) {
    this.routes.PUT[path] = cb;
  }

  delete(path, cb) {
    this.routes.DELETE[path] = cb;
  }

  route(req, res) {
    const method = req.method;
    const url = req.url;

    const route = this.routes[method][url];
    if (route) {
      return route(req, res);
    } else {
      throw `404 Not Found: ${method} ${url}`; 
    }
  }
}

module.exports = Router;