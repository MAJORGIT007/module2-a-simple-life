import Head from "next/head";
import AboutmeSidebar from "components/AboutmeSidebar";
import RecentpostsSidebar from "components/RecentpostsSidebar";

function aboutme() {
  return (
    <>
      <Head>
        <title>Module 2 - A simple life</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="mx-auto w-[90%] max-w-[980px] py-8">
        <div className="flex flex-col gap-10 md:flex-row">
          <main className="md:w-[75%]">
            <img src="/about-me.jpg" alt="man smilling" className="mb-4" />
            <h1 className="mb-2 font-lora text-2xl font-medium text-sky-900">
              My name is John and living the simple life saved my life
            </h1>

            <p className="mb-2">
              <strong className="text-neutral-700">
                I used to be a pack rat
              </strong>
              . I had so many things that I thought that I loved, but the truth
              was I couldn't even appreciate any of it because there was too
              much.
            </p>
            <p className="mb-4">
              Things were terrible. I had a job that I hated, a home that I
              didn't want to live in, and I couldn't hold a relationship.
            </p>

            <h2 className="mb-2 font-lora text-xl font-medium text-sky-900">
              How I turned things around
            </h2>
            <p className="mb-2">
              <strong className="text-neutral-700">
                I was on the verge of a breakdown when I got rid of everything
              </strong>
              . I literally put 90% of my possessions in the garbage, sold my
              place and moved into a smaller apartment, and I quit my job.
            </p>
            <p className="mb-4">
              It wasn't easy at all, but everything around me was in such a bad
              place, I didn't know what else to do. And it worked.
            </p>

            <h2 className="mb-2 font-lora text-xl font-medium text-sky-900">
              Now I live the simple life
            </h2>
            <p className="mb-2">
              Now that I'm living a simple life, things are so much better. I'm
              less stressed, enjoy life and work more, and I have more free time
              to enjoy.
            </p>
            <p>
              With how much it turned my life around,{" "}
              <strong className="text-neutral-700">
                I felt like I had no choice but to start sharing how I did it
              </strong>
              , and how others can benefit from living a simple life as well,
              which is why I started this site!
            </p>
          </main>
          <div className="md:w-[25%]">
            <AboutmeSidebar />
            <RecentpostsSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
export default aboutme;
