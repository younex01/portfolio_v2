import { LinkPreview } from "./ui/link-preview";

const About = () => {
  return (
    <section className="py-12">
      <h2 className="mb-4 text-xl font-semibold">About me</h2>
      <p className="text-neutral-400">
        Frontend developer based in{" "}
        <LinkPreview
          url="/morocco.jpg"
          imageSrc="/morocco.jpg"
          isStatic
          className="font-bold bg-clip-text text-transparent text-white"
          >
          Morocco
        </LinkPreview>
        , specializing in interactive web apps with{" "}
        <LinkPreview
          url="/react-1.png"
          imageSrc="/react-1.png"
          isStatic
          className="font-bold bg-clip-text text-transparent text-white"
          >
          React.js
        </LinkPreview>
        ,
        <LinkPreview
          imageSrc="/next-js.png"
          isStatic
          url="/next-js.png"
          className="font-bold bg-clip-text text-transparent text-white"
          >
          Next.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          imageSrc="/tailwind-css-2.png"
          isStatic
          url="/tailwind-css-2.png"
          className="font-bold bg-clip-text text-transparent text-white"
          >
          TypeScript
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="/tailwind-css-2.png"
          imageSrc="/tailwind-css-2.png"
          isStatic
          height={32}
          className="font-bold bg-clip-text text-transparent text-white"
        >
          TailwindCSS
        </LinkPreview>
        .
      </p>
    </section>
  );
};

export default About;
