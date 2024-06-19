export default function Title({ text }) {
  return (
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {text}
    </h2>
  );
  // return <h2 className="text-2xl font-semibold my-2">{text}</h2>;
}
