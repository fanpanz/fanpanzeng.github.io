export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="space-y-8">
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-2xl font-semibold">Project Title</h2>
          <p className="mb-4 text-muted-foreground">
            A brief description of your project goes here.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              View Project →
            </a>
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              Source Code →
            </a>
          </div>
        </div>
        
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-2xl font-semibold">Another Project</h2>
          <p className="mb-4 text-muted-foreground">
            Another project description. Add more projects as needed.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-sm text-primary hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
