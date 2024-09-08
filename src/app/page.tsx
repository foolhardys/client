import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-lg border-white border-2 p-12 shadow-lg bg-black/80 rounded-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Medical Claim & Loan Portal
        </h1>
        <p className="text-gray-300 mb-8">
          Choose an option to get started with filing a medical claim or
          applying for a medical loan.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 sm:space-x-6 items-center justify-center p-2">
          <Link href="/claim">
            <p className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-5 rounded text-center w-full sm:w-auto">
              File a Claim
            </p>
          </Link>
          <Link href="/loan">
            <p className="bg-green-500  hover:bg-green-400 text-white py-2 px-5 rounded text-center w-full sm:w-auto">
              Apply for a Loan
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
