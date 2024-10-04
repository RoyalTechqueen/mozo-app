import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function Benefits() {
  return (
    <div className="scroll-mt-24 py-16 bg-gray-50 w-full">
      <div className="mx-auto max-w-screen-2xl text-center px-4 sm:px-6 lg:px-8">
        <div className="space-7-8">
          <h1 className="text-2xl font-semibold text-primary">BENEFITS</h1>
          <p className="mt-4 text-md">
            Everything you need to simplify your projects and boost productivity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="border border-1 flex flex-col gap-2 text-left p-4 rounded-md">
            <h1 className="text-2xl font-semibold">Agile Project Planning</h1>
            <p>
              {" "}
              Drive project success with agile project management capabilities
              tailored for small teams focused on rapid product development.
            </p>
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold text-xl"
            >
              Learn More <HiArrowRight />
            </Link>
          </div>
          <div className="border border-1 flex flex-col gap-2 text-left p-4 rounded-md">
            <h1 className="text-2xl font-semibold">Seamless Collaboration</h1>
            <p>
              {" "}
              Empower your team with integrated tools for file sharing, task
              management, and real-time collaboration, ensuring smooth project
              workflows from start to finish.
            </p>
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold text-xl"
            >
              Learn More <HiArrowRight />
            </Link>
          </div>
          <div className="border border-1 flex flex-col gap-2 text-left p-4 rounded-md">
            <h1 className="text-2xl font-semibold">
              Enhanced Team Communication
            </h1>
            <p>
              {" "}
              Simplify team discussions and collaboration with our efficient
              messaging features, enabling swift decision-making and project
              progress tracking.
            </p>
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold text-xl"
            >
              Learn More <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
