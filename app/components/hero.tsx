import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-32 xl:py-12">
      {/* Left Side - Content */}
      <div className="flex-1 space-y-6 lg:pr-8 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
          Effortless project management,{" "}
          <span className="text-blue-600">anytime</span>
        </h1>
        <p className="text-lg">
          Manage tasks and projects easily with an all-in-one platform designed
          for seamless collaboration.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/demo"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            Request a Demo
          </Link>
          <Link
            href="/contact"
            className="border border-gray-400 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-100 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Right Side - Images */}
      <div className="hidden lg:flex lg:relative">
        <div className=" mt-8 relative lg:mb-0 mb-4 flex justify-center lg:justify-end">
          <Image
            src="/lap.png"
            alt="Dashboard"
            width={600} // Width for larger screens
            height={350} // Height for larger screens
            className="rounded-md shadow-xl"
          />
        </div>
        <div className="mt-8 lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 lg:-translate-x-8 flex justify-center">
          <Image
            src="/phone.png"
            alt="Mobile Dashboard"
            width={200} // Width for larger screens
            height={200} // Height for larger screens
            className="rounded-md shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
