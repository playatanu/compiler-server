const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getallUser,
  getUserByID,
  deleteUserByID,
  patchUserByID,
} = require("../functions/userFunction");

// GET all user
router.route("/").get(authMiddleware, async (req, res) => {
  res.send(await getallUser());
});

// GET user by Id
router.route("/:id").get(authMiddleware, async (req, res) => {
  res.send(await getUserByID(req.params.id));
});

// PATCH user by Id
router.route("/:id").patch(authMiddleware, async (req, res) => {
  res.send(await patchUserByID(req.params.id, req.body));
});

// DELETE user by id
router.route("/:id").delete(authMiddleware, async (req, res) => {
  res.send(await deleteUserByID(req.params.id));
});

//? ---------------------------------------------------------------------

// GET Followers by id
router.route("/followers/:id").get(authMiddleware, async (req, res) => {
  res.send("followers");
});

// GET following by id
router.route("/following/:id").get(authMiddleware, async (req, res) => {
  res.send("following");
});

// POST Follow user by id
router.route("/follow/:id").post(authMiddleware, async (req, res) => {
  res.send("follow");
});

// POST Unfllow user by id
router.route("/unfollow/:id").post(authMiddleware, async (req, res) => {
  res.send("unfollow");
});

module.exports = router;
