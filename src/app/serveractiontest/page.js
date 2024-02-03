import { addPost } from "../../../lib/action";
import { deletePost } from "../../../lib/action";

const serverActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title"/>
        <input type="text" placeholder="Description" name="desc"/>
        <input type="text" placeholder="Slug" name="slug"/>
        <input type="text" placeholder="UserId" name="userId"/>
        <button type="submit">Add data</button>
      </form>

      <form action={deletePost}>
        <input placeholder="id" name="id"/>
        <button>Click Me</button>
      </form>
    </div>
  )
}

export default serverActionTest
