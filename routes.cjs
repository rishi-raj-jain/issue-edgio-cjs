import { Router } from "@edgio/core/router";

export default new Router()
  .static("assets")
  .match("/:path*", ({ renderWithApp }) => {
    renderWithApp();
  });
