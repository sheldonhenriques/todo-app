import { Request, Response } from "express";
import _ from "lodash";

const index = (req: Request, res: Response): void => {
  if (_.get(req, "user")) {
    return res.redirect(`/list/${_.get(req, ["user", "user_id"])}`);
  }
  res.render("index");
};

export default {
  index,
};
