import { default as nextAuthMiddleware } from "next-auth/middleware";

export const middleware = nextAuthMiddleware;

export const config = { 
  // You can add more routes (e.g., '/profile', '/settings') here to secure them.
  matcher: ["/dashboard"], 
};
