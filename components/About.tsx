import { LinkPreview } from "./ui/link-preview";

const About = () => {
  return (
    <section className="py-12">
      <h2 className="mb-4 text-xl font-semibold">About me</h2>
      <p className="text-neutral-400">
        Frontend developer based in{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Morocco
        </LinkPreview>
        , specializing in interactive web apps with{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          React.js
        </LinkPreview>
        ,
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Next.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          TypeScript
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          TailwindCSS
        </LinkPreview>
        .
      </p>
    </section>
  );
};

export default About;
