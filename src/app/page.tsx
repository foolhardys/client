import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 flex items-center justify-center h-screen">
      <div className="w-[500px] border-white border-2 p-12 shadow-lg bg-black/80 rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Medical Claim & Loan Portal
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Choose an option to get started with filing a medical claim or
          applying for a medical loan.
        </p>
        <div className="space-x-8 flex items-center justify-center gap-6">
          <Link href="/claim">
            <p className="bg-blue-500 text-white py-2 px-4 rounded text-center">
              File a Claim
            </p>
          </Link>
          <Link href="/loan">
            <p className="bg-green-500 text-white py-2 px-4 rounded text-center">
              Apply for a Loan
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
