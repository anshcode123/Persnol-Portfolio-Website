export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-all"
    >
      {children}
    </button>
  );
}
