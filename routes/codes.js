const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCode,
  getallCode,
  getCodeByID,
  deleteCodeByID,
  patchCodeByID,
} = require("../functions/codeFunction");

const { likeCode, unlikeCode } = require("../functions/codeLikeFunction");

// LIKE codes by Id
router
  .route("/like/:id")
  .post(authMiddleware, async (req, res) =>
    res.send(await likeCode(req.params.id, req.body.id))
  );

// UNLIKE codes by Id
router
  .route("/unlike/:id")
  .post(authMiddleware, async (req, res) =>
    res.send(await unlikeCode(req.params.id, req.body.id))
  );

// GET All code
router
  .route("/")
  .get(authMiddleware, async (req, res) => res.send(await getallCode()));

// POST new code
router
  .route("/")
  .post(authMiddleware, async (req, res) =>
    res.send(await createCode(req.body))
  );

// GET post by Id
router
  .route("/:id")
  .get(authMiddleware, async (req, res) =>
    res.send(await getCodeByID(req.params.id))
  );

// PATCH code by Id
router
  .route("/:id")
  .patch(authMiddleware, async (req, res) =>
    res.send(await patchCodeByID(req.headers.token, req.params.id, req.body))
  );

// DELETE code by id
router
  .route("/:id")
  .delete(authMiddleware, async (req, res) =>
    res.send(await deleteCodeByID(req.headers.token, req.params.id))
  );

module.exports = router;
