import Layout from "./layout";
import Button from "./components/ui/button";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Showcasing my work and projects</p>
        <div className="mt-6 flex gap-4">
          <Button href="/projects" variant="primary">View Projects</Button>
          <Button href="/about" variant="secondary">About Me</Button>
        </div>
      </div>
    </Layout>
  );
}
