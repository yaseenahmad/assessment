

export default function About() {
  return (
    <div>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">Learn more about our company and mission.</p>
      </main>
    </div>
  );
}

export function meta() {
  return [
    { title: 'About Us' },
    {
      name: 'description',
      content: 'Learn more about our company',
    },
  ];
}