import app from "./app";
import { MiddlewareFunction, authenticate } from "./middleware/authentication";
import { errorMiddleware } from './middleware/error';
import health from "./controllers/health";
import user from "./controllers/user";
import userid from "./controllers/user/{id}";
import { systemConfig } from "./config";
import validateRequest from "./middleware/validate";
import { userDto, userParamsDto, userQueryDto } from "./dto/user.dto";


const BASE_PATH = systemConfig.base_path
function createRoutes(
  path: string,
  controller: () => Record<string, (...args: any[]) => void>,
  middleware: Record<string, MiddlewareFunction[]>
) {
  const controllerObj = controller();
  for (const key in controllerObj) {
    if (typeof controllerObj[key] === "function") {
      const routeMiddleware = middleware[key] || [];
      switch (key) {
        case "get":
          app.get(path, ...routeMiddleware, controllerObj[key]);
          break;
        case "post":
          app.post(path, ...routeMiddleware, controllerObj[key]);
          break;
        case "patch":
          app.patch(path, ...routeMiddleware, controllerObj[key]);
          break;
        case "delete":
          app.delete(path, ...routeMiddleware, controllerObj[key]);
          break;
        default:
          break;
      }
    }
  }
}

createRoutes(`/${BASE_PATH}/health`, health, {});
createRoutes(`/${BASE_PATH}/user`, user, { 
  post: [authenticate, validateRequest({schema: userDto})], 
  get: [authenticate, validateRequest({schema: userQueryDto})] 
});
createRoutes(`/${BASE_PATH}/user/:id`, userid, {
  get: [authenticate, validateRequest({schema: userParamsDto})],
  patch: [authenticate, validateRequest({schema: {...userParamsDto, ...userDto}})],
  delete: [authenticate, validateRequest({schema: {...userParamsDto }})],
});

app.use(errorMiddleware);
