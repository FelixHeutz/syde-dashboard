
import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export default function Dashboard() {
  const defaultTasks = [
    "Define Brand Identity",
    "Design Logo & Visuals",
    "Find Manufacturer",
    "Sample Testing",
    "Build Online Store"
  ];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("syde_roadmap");
    setTasks(saved ? JSON.parse(saved) : defaultTasks.map(text => ({ text, done: false })));
  }, []);

  useEffect(() => {
    localStorage.setItem("syde_roadmap", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">SYDE Founder Dashboard</h1>

      <Tabs defaultValue="roadmap" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-6 mb-6">
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap">
          <h2 className="text-2xl font-semibold mb-4">📌 Launch Roadmap</h2>
          <ul className="space-y-3">
            {tasks.map((task, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(idx)} />
                <span className={task.done ? "line-through text-gray-400" : ""}>{task.text}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="product">
          <h2 className="text-2xl font-semibold mb-4">🧵 Product Development</h2>
          <p>Track your joggers, tees, and sample progress here soon...</p>
        </TabsContent>

        <TabsContent value="branding">
          <h2 className="text-2xl font-semibold mb-4">🎨 Branding</h2>
          <p>Add logo concepts, font ideas, color palettes, and moodboard inspiration.</p>
        </TabsContent>

        <TabsContent value="marketing">
          <h2 className="text-2xl font-semibold mb-4">📣 Marketing & Content</h2>
          <p>Plan social posts, email ideas, and content strategy here.</p>
        </TabsContent>

        <TabsContent value="finance">
          <h2 className="text-2xl font-semibold mb-4">💸 Finance</h2>
          <p>Input your production costs and retail prices to calculate margins.</p>
        </TabsContent>

        <TabsContent value="resources">
          <h2 className="text-2xl font-semibold mb-4">🔗 Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-400 underline">
            <li><a href="https://www.alibaba.com/" target="_blank">Alibaba</a></li>
            <li><a href="https://www.techpacker.com/" target="_blank">Techpacker</a></li>
            <li><a href="https://www.fontshare.com/" target="_blank">Fontshare</a></li>
            <li><a href="https://coolors.co/" target="_blank">Coolors</a></li>
            <li><a href="https://www.shopify.com/" target="_blank">Shopify</a></li>
            <li><a href="https://www.capcut.com/" target="_blank">CapCut</a></li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
