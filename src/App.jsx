import { BookList } from "./Components/BookList"
import { createRouter } from "@swan-io/chicane";
import { match } from "ts-pattern";
import { Home } from './Components/Home'

const Router = createRouter({
  Home: "/",
  Books: "/books",
});

export const App = () => {
	const route = Router.useRoute(["Home", "Books"]);

  return match(route)
    .with({ name: "Home" }, () => <Home />)
    .with({ name: "Books" }, () => <BookList />)
    .otherwise(() => <h1>404</h1>);
}