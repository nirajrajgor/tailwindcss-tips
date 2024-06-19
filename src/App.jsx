import "./App.css";
import Description from "./Description";
import Title from "./Title";

function App() {
  return (
    <div className="container mx-auto px-4 py-12 border-2 border-rose-600">
      <h1 className="text-4xl font-bold max-w-3xl mb-8 mx-auto text-center">
        Tips and Tricks with Tailwind CSS
      </h1>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="bg-gray-50 p-8 rounded-2xl hover:shadow">
          <Title text="1: Delegate classes to parent" />
          <Description>
            Instead of using <b>text-2xl</b> on each li, we can use the same
            class on the ul
          </Description>
          <nav>
            <ul className="flex flex-wrap text-2xl text-teal-700 text-opacity-50 p-1">
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
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="2: Adding space between elements" />
          <Description>
            Instead of using <b>gap-*, margin, padding</b> property on each
            child, we can use the <b>space-x-*, space-y-*</b> property on the
            parent
          </Description>
          <ul className="flex flex-row space-x-5">
            <li className="size-16 bg-red-400">Item 1</li>
            <li className="size-16 bg-red-500">Item 2</li>
            <li className="size-16 bg-red-600">Item 3</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="3: Don't overuse @apply utility classes" />
          <Description>
            Using custom classname like{" "}
            <code className="bg-gray-200 p-1">.nav-items</code> and adding
            tailwind classes in css files using <b>@apply</b> can cause problems
            like name collisions and hard to maintain code.
          </Description>
          <ul className="nav-items">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="4: Adding opacity to background & text" />
          <Description>
            You can apply opacity to background and text using{" "}
            <code className="bg-gray-200 p-1">
              .bg-opacity-* & .text-opacity-*{" "}
            </code>
          </Description>
          <div className="bg-teal-700 bg-opacity-50 w-[200px]">
            <p className="text-blue-700 text-opacity-70">tailwind css text</p>
          </div>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="5: Adding Transition & Animation " />
          <Description>
            <code className="bg-gray-200 p-1">transition-* & duration-*</code>
            property to be used
          </Description>
          <button className="p-2 text-white rounded bg-blue-500 hover:bg-blue-700 active:bg-blue-900 transition-colors duration-200">
            Buy Items
          </button>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="6: Group hover example" />
          <Description>
            Hover on button will rotate the icon present inside the button, this
            can be done using group classname on button and group-hover:property
            classname on child element
          </Description>
          <button className="p-2 text-white rounded group bg-blue-500 hover:bg-blue-700 active:bg-blue-900 transition-colors duration-200">
            <span>Click!</span>
            <span className="ml-2 inline-block group-hover:rotate-90 duration-300">
              &rarr;
            </span>
          </button>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="7: Using pseudo classes" />
          <Description>
            The below button background is added using after pseudo class
          </Description>
          <button className="p-2 relative after:absolute after:bg-green-300 after:inset-0 after:z-0">
            <h6 className="z-10 relative">BUTTON </h6>
          </button>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="8: Adding Custom input values" />
          <Description>Can be added using property-[value] syntax</Description>
          <h5 className="text-[#007bff] text-[4rem]">Hello World</h5>
        </section>
      </main>
    </div>
  );
}

export default App;
