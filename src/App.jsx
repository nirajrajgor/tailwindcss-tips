import "./App.css";
import Hr from "./Hr";
import Title from "./Title";

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
      <Title text="Example 3: Don't overuse @apply utility classes" />
      <h4>
        Description: Using custom classname like{" "}
        <code className="bg-gray-200 p-1">.nav-items</code> and adding tailwind
        classes in css files using <b>@apply</b> can cause problems like name
        collisions and hard to maintain code.
      </h4>
      <ul className="nav-items">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <Hr />
      <Title text="Example 4: Adding opacity to background & text" />
      <h4>
        You can apply opacity to background and text using{" "}
        <code className="bg-gray-200 p-1">
          .bg-opacity-* & .text-opacity-*{" "}
        </code>{" "}
      </h4>
      <div className="bg-teal-700 bg-opacity-50 w-[200px]">
        <p className="text-blue-700 text-opacity-70">tailwind css text</p>
      </div>
      <Hr />
      <Title text="Example 5: Adding Transition & Animation " />
      <h4>transition-* * duration-* property to be used</h4>
      <button className="p-2 text-white rounded bg-blue-500 hover:bg-blue-700 active:bg-blue-900 transition-colors duration-200">
        Buy Items
      </button>
      <Hr />
      <Title text="Example 6: External tailwind libraries to speed up development and copy the code" />
      <ul>
        <li>DaisyUI</li>
        <li>Flowbite</li>
      </ul>
    </section>
  );
}

export default App;
