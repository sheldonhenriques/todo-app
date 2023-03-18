require("dotenv").config();
import express from "express";
import todoController from "../controllers/todoController";
import personController from "../controllers/personController";
import indexController from "../controllers/indexController";
import listController from "../controllers/listController";
import authenticateController from "../controllers/authenticateController";
import { routes } from "../util/constants";
import { verifyToken, userLoggedIn } from "../middleware/auth";
import cookieParser from "cookie-parser";

// const urlencodedParser = bodyParser.json();

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());
app.use(cookieParser(process.env.COOKIE_SCERET));

app.get(routes.index, userLoggedIn, indexController.index);

app.get(routes.todoId, verifyToken, todoController.getListItems);

app.post(routes.todo, verifyToken, todoController.addListItem);

app.delete(routes.todoId, verifyToken, todoController.deleteListItem);

// User routes
app.post(routes.signUp, personController.userSignUp);

app.post(routes.login, authenticateController.login);

app.get(routes.profileId, personController.getUserProfile);

app.put(routes.profileId, personController.editUserProfile);

app.delete(routes.profileId, personController.deleteUserProfile);

// List routes
app.get(routes.listWithUserId, verifyToken, listController.getList);

app.post(routes.list, verifyToken, listController.addList);

app.post(routes.listWithName, verifyToken, listController.searchListWithName);

app.post(routes.listWithTag, verifyToken, listController.searchListWithTag);

app.delete(routes.listId, verifyToken, listController.deleteList);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log({
    level: "info",
    message: `Express is listening at http://localhost:${port}`,
  });
});
