import "./App.css";
import Description from "./Description";
import Hr from "./Hr";
import Title from "./Title";

function App() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold max-w-3xl mb-2 mx-auto text-center">
        Tips and Tricks with Tailwind CSS
      </h1>
      <h2 className="mb-8 text-base text-gray-500 sm:text-lg max-w-3xl mx-auto text-center">
        Learn how to tailor your Tailwind CSS project with the help of Tailwind
        CSS examples shown below.
      </h2>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="1: Delegate classes to parent" />
          <Description>
            The below nav items has <b>text-2xl</b> on ul tag instead of having
            on each li tag. This helps to avoid writing it multiple times.
          </Description>
          <Hr />
          <nav>
            <ul className="flex flex-wrap text-2xl text-fuchsia-800 text-opacity-70 p-1">
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
            parent.
          </Description>
          <Hr />
          <ul className="flex flex-row space-x-5">
            <li className="size-16 bg-red-400">Item 1</li>
            <li className="size-16 bg-red-500">Item 2</li>
            <li className="size-16 bg-red-600">Item 3</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="3: Don't overuse @apply utility classes" />
          <Description>
            Using custom classname like <b>.nav-items</b> and adding tailwind
            classes in css files using <b>@apply</b> can cause problems like
            name collisions and hard to maintain code. It is ok to use it when
            working with third party libraries.
          </Description>
          <Hr />
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
            <b>.bg-opacity-*</b> and <b>.text-opacity-*</b> tailwind classes.
          </Description>
          <Hr />
          <div className="bg-teal-500 bg-opacity-100 w-[200px]">
            <p className="text-blue-900 text-opacity-70">tailwind css text</p>
          </div>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="5: Adding Transition & Animation " />
          <Description>
            To animate elements <b>transition-*</b> and <b>duration-* </b>
            classes can be used. Tailwind also has predefined animations.
          </Description>
          <Hr />
          <button className="p-2 text-white rounded bg-blue-500 hover:bg-blue-700 active:bg-blue-900 transition-colors duration-200">
            Buy Items
          </button>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="6: Group hover example" />
          <Description>
            Hover on button, will rotate the icon present inside the button as a
            separate child element. This can be achieved by adding <b>group</b>{" "}
            classname on parent and <b>group-hover:property</b> classname on
            child element.
          </Description>
          <Hr />
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
            The below button has a background color added using <b>after</b>{" "}
            pseudo class. One can also use <b>before</b> pseudo classes the same
            way.
          </Description>
          <Hr />
          <button className="p-2 relative after:absolute after:bg-green-300 after:inset-0 after:z-0">
            <h6 className="z-10 relative">BUTTON </h6>
          </button>
        </section>
        <section className="bg-gray-50 p-8 rounded-2xl">
          <Title text="8: Adding Custom input values" />
          <Description>
            The value of any classname property can be customize using
            <b> property-[value]</b> syntax. E.g <b>text-[#007bff]</b>,{" "}
            <b>text-[200px]</b>
          </Description>
          <Hr />
          <h5 className="text-[#007bff] text-[4rem]">Hello World</h5>
        </section>
      </main>
      <footer className="mt-6 text-center">
        Code available on{" "}
        <a
          href="https://github.com/nirajrajgor/tailwindcss-tips"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
