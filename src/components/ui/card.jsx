export function Card({ children }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
