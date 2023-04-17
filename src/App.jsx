import { BookList } from "./Components/BookList"
import { createRouter } from "@swan-io/chicane";
import { match } from "ts-pattern";

const Router = createRouter({
  Home: "/",
  Books: "/books",
});

export const App = () => {
	const route = Router.useRoute(["Home", "Books"]);

  return match(route)
    .with({ name: "Home" }, () => <h1>Home</h1>)
    .with({ name: "Books" }, () => <BookList />)
    .otherwise(() => <h1>404</h1>);
}