import DataSections from "./_components/data-sections";

export default function Data() {
  return (
    <div className="text-white flex flex-col gap-6 max-lg:items-center">
      <h1 className="text-4xl font-bold max-sm:text-center">Os dados do seu GitHub</h1>
      <DataSections />
    </div>
  );
}
