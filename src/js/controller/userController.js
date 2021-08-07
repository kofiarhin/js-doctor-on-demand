import User from "../model/user";
import * as UserView from "../view/userView";
import { test, auth, redirect } from "../lib/helper";

const user = new User();

const state = {
  userData: "",
  id: "",
};

async function getUser(id) {
  const user = new User();

  // get user with id from database
  const userData = await user.getUser(id);

  if (!_.isEmpty(userData)) {
    state.userData = userData;
    UserView.renderUser(userData);
  }
}

async function DeleteController(userData) {
  await user.deleteUser(userData);

  redirect("doctors.html");
}

async function HashChangeController(e) {
  const hash = window.location.hash;
  const query = hash.replace("#", "");
  if (query === "delete") {
    const { userData } = state;
    DeleteController(userData);
  }
}

// user controller
export default async function () {
  const search = new URLSearchParams(window.location.search);
  const id = search.get("id");

  // set the id of the user
  state.id = id;

  // get user
  await getUser(id);

  window.addEventListener("hashchange", HashChangeController);
}
