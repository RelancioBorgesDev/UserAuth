import DataSections from "./_components/data-sections";

export default function Data() {
  return (
    <div className="text-white font-bold flex flex-col gap-6">
      <h1 className="text-4xl">Os dados do seu GitHub</h1>
      <DataSections />
    </div>
  );
}
