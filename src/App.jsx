import "./App.css";
import Description from "./Description";
import Hr from "./Hr";
import Title from "./Title";

function App() {
  return (
    <main className="container mx-auto px-4 py-12 border-2 border-rose-600">
      <section className="shadow bg-white p-4 rounded-lg">
        {/* <h1 className="text-3xl font-bold">Hello world!</h1> */}
        <Title text="1. Delegate classes to parent" />
        <Description>
          Instead of using <b>text-2xl</b> on each li, we can use the same class
          on the ul
        </Description>
        <nav>
          {/* TODO: Group */}
          <ul className="flex flex-wrap text-2xl text-teal-900 text-opacity-30 p-1">
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
      <Hr />
      <Title text="Example 2: Adding space between elements" />
      <Description>
        Description: Instead of using <b>gap-*, margin, padding</b> property on
        each child, we can use the <b>space-x-*, space-y-*</b> property on the
        parent
      </Description>
      <ul className="flex flex-row space-x-5">
        <li className="size-16 bg-red-400">Item 1</li>
        <li className="size-16 bg-red-500">Item 2</li>
        <li className="size-16 bg-red-600">Item 3</li>
      </ul>
      <Hr />
      <Title text="Example 3: Don't overuse @apply utility classes" />
      <Description>
        Using custom classname like{" "}
        <code className="bg-gray-200 p-1">.nav-items</code> and adding tailwind
        classes in css files using <b>@apply</b> can cause problems like name
        collisions and hard to maintain code.
      </Description>
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
      <Title text="Example 6: Group hover example" />
      <h4>
        Hover on button will rotate the icon present inside the button, this can
        be done using group classname on button and group-hover:property
        classname on child element
      </h4>
      <button className="p-2 text-white rounded group bg-blue-500 hover:bg-blue-700 active:bg-blue-900 transition-colors duration-200">
        <span>Click!</span>
        <span className="ml-2 inline-block group-hover:rotate-90 duration-300">
          &rarr;
        </span>
      </button>
      <Hr />
      <Title text="Example 7: Using pseudo classes" />
      <h4>The below button background is added using after pseudo class</h4>
      <button className="p-2 relative after:absolute after:bg-green-300 after:inset-0 after:z-0">
        <h6 className="z-10 relative">BUTTON </h6>
      </button>
      <Hr />
      <Title text="Example 8: Adding Custom input values" />
      <h4>Can be added using property-[value] syntax</h4>
      <h5 className="text-[#007bff] text-[4rem]">Hello World</h5>
      <Hr />

      <Title text="Example 9: External tailwind libraries to speed up development and copy the code" />
      <ul>
        <li>DaisyUI</li>
        <li>Flowbite</li>
        <li>
          Tailwind cheatsheet - https://tailwindcomponents.com/cheatsheet/
        </li>
      </ul>
      <Hr />
      <Title text="Example 10: problems with tailwind" />
      <h4>
        1. Ugly looking html, jsx 2. Duplicated classname (can be avoided by
        creating components, e.g Navlinks) 3.
      </h4>
    </main>
  );
}

export default App;
