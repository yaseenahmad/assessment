import { flatRoutes } from '@react-router/fs-routes';
import type { RouteConfig } from '@react-router/dev/routes';

// Discover routes under `src/routes` because our appDirectory is `src`
// This enables proper folder-based routing discovery
export default flatRoutes({ 
  rootDirectory: './routes'
}) satisfies RouteConfig;