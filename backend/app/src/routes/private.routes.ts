import { Router } from "express";
const router = Router();

import passport from "passport";

router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

export default router;
