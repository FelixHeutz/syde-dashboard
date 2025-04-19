export function Tabs({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function TabsList({ children, ...props }) {
  return <div className="flex gap-2 border-b border-gray-700 pb-2 mb-4" {...props}>{children}</div>;
}

export function TabsTrigger({ children, value, ...props }) {
  return <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700" {...props}>{children}</button>;
}

export function TabsContent({ children, value, ...props }) {
  return <div className="mt-4" {...props}>{children}</div>;
}
