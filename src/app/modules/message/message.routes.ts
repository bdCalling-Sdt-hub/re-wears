import express from "express";
import { USER_ROLES } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { MessageController } from "./message.controller";
import fileUploadHandler from "../../middlewares/fileUploaderHandler";
const router = express.Router();

router.post(
  "/",
  fileUploadHandler(),
  auth(USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN, USER_ROLES.USER),
  MessageController.sendMessage
);
router.get(
  "/:id",
  auth(USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN, USER_ROLES.USER),
  MessageController.getMessage
);

export const MessageRoutes = router;
