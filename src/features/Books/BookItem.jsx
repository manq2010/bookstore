import React from 'react';

const BookItem = () => (
  <div>
    <form>
      <input
        type="text"
        name="bookItem"
        id="bookItemId"
        placeholder="Book Title"
      />
      <input
        type="text"
        name="author"
        id="authorId"
        placeholder="Author Name"
      />
      <select name="category" id="caterogyId">
        <option value="action">Action</option>
        <option value="science">Science Friction</option>
        <option value="economy">Economy</option>
        <option value="sports">Sports</option>
      </select>
      <input type="button" value="Add Book" />
    </form>
  </div>
);

export default BookItem;
