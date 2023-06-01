import { BookList } from "./Components/Pages/BookList"
import { createRouter } from "@swan-io/chicane";
import { match } from "ts-pattern";
import { Home } from './Components/Pages/Home'
import { Contact } from './Components/Pages/Contact'
import { Whoami } from './Components/Pages/Whoami'

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