import { BookList } from "./Components/BookList"
import { createRouter } from "@swan-io/chicane";
import { match } from "ts-pattern";
import Home from './Components/Home'
import { Contact } from './Components/Contact'
import { Whoami } from './Components/Whoami'

const Router = createRouter({
  Home: "/",
  Books: "/books",
  Contact: "/contact",
	Whoami: "/whoami"
});

export const App = () => {
	const route = Router.useRoute(["Home", "Books", "Contact", "Whoami"]);

  return match(route)
    .with({ name: "Home" }, () => <Home />)
    .with({ name: "Books" }, () => <BookList />)
    .with({ name: "Contact" }, () => <Contact />)
    .with({ name: "Whoami" }, () => <Whoami />)
    .otherwise(() => <h1>404</h1>);
}