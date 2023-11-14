// eslint-disable-next-line react/prop-types
export default function Button({ text }) {
  return (
    <>
      <button className="py-2 rounded-md w-full font-bold text-lg border  bg-primary text-white">
        {text}
      </button>
    </>
  );
}
