interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  description: string[];
}

function ExperienceItem({
  company,
  role,
  date,
  description,
}: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
        <span className="text-sm text-neutral-400">{date}</span>
      </div>
      <ul className="list-inside space-y-2 text-neutral-400">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section className="py-12">
      <h2 className="mb-8 text-xl font-semibold">Experience</h2>
      <ExperienceItem
        company="Tech Corp"
        role="Frontend Developer"
        date="Feb 2024 - Present"
        description={[
          "Developed and maintained multiple React applications",
          "Implemented responsive designs using TailwindCSS",
          "Collaborated with backend team for API integration",
        ]}
      />
      <ExperienceItem
        company="Digital Solutions"
        role="Frontend Developer"
        date="Dec 2023 - Feb 2024"
        description={[
          "Built interactive user interfaces with React",
          "Optimized application performance",
          "Implemented state management using Redux",
        ]}
      />
    </section>
  );
}
