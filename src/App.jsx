import "./App.css";
import Hr from "./Hr";
import Title from "./section-title";

function App() {
  return (
    <section className="container mx-auto px-4 py-12 border-2 border-rose-600">
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Title text="Example 1: Delegate classes to parent" />
      <h4>
        Description: Instead of using <b>text-2xl</b> on each li, we can use the
        same class on the ul
      </h4>
      <nav>
        {/* TODO: Group */}
        <ul className="flex flex-wrap text-2xl text-gray-900 p-1">
          <li className="mr-4 bg-gray-200 text-blue-400 p-1">
            <a href="#">Home</a>
          </li>
          <li className="mr-4 p-1">
            <a href="#">About</a>
          </li>
          <li className="mr-4 p-1">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Hr />
      <Title text="Example 2: Adding space between elements" />
      <h4>
        Description: Instead of using <b>gap-*, margin, padding</b> property on
        each child, we can use the <b>space-x-*, space-y-*</b> property on the
        parent
      </h4>
      <ul className="flex flex-row space-x-3">
        <li className="size-16 bg-red-300">Item 1</li>
        <li className="size-16 bg-red-400">Item 2</li>
        <li className="size-16 bg-red-500">Item 3</li>
      </ul>
      <Hr />
    </section>
  );
}

export default App;
