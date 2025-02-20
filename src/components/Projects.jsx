function Projects() {
  const projects = [
    {
      image: img1,
      name: "To-Do-List",
      git_hub: "https://github.com/anonimka05/To-do-List",
      link_project: "https://to-do-list-iota-gray.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span>Projects</span>
        </h3>
      </div>
      <h2>Projects</h2>
      <div className="">project1</div>
      <div className="">project2</div>
    </section>
  );
}

export default Projects;
