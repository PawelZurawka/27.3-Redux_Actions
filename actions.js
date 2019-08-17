const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}
const boundAddComment = text => dispatch(addComment(text));

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}
const boundRemoveComment = id => dispatch(removeComment(id));

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
}
const boundEditComment = (id, text) => dispatch(editComment(id, text));

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}
const boundThumbUpComment = id => dispatch(ThumbUpComment(id));

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}
const boundThumbDownComment = id => dispatch(ThumbDownComment(id));
