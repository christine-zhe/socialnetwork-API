const router = require('express').Router();
const {
  getAllUser,
  getUserId,
  postUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');
// /api/users/
router.route('/').get(getAllUser)
  .post(postUser);

// /api/users/:id
router.route('/:id').get(getUserId).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId


router
  .route('/:userId/friends/:friendId').post(addFriend)
  .delete(deleteFriend);

module.exports = router;
