/* eslint-disable react/prop-types */
export default function Input({ text, type, placeholder, name }) {
  return (
    <>
      <label htmlFor="email" className="text-base md:text-lg">
        {text}
      </label>
      <br />
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="outline outline-1 outline-slate-300 rounded-sm py-2 px-3 w-full h-7 mb-10 md:h-9 lg:h-10"
      />
    </>
  );
}
