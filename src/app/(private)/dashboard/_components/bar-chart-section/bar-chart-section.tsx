"use client";

export default function BarChartSection() {
  const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString();
  return (
    <section className="w-full h-full text-white px-4 py-2 bg-zinc-900/95 flex flex-col items-center gap-16">
      <p className="text-xl">Principais linguagens utilizadas</p>
      <p>chart</p>
    </section>
  );
}
