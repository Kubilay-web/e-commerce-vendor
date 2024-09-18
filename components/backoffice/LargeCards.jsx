import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      title: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      title: "Yesterday Orders",
      sales: 130000,
      color: "bg-blue-600",
    },
    {
      title: "This Month",
      sales: 3000000,
      color: "bg-orange-600",
    },
    {
      title: "All-Time Sales",
      sales: 5000000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item, i) => {
        return <LargeCard data={item} key={i} />;
      })}
    </div>
  );
}
