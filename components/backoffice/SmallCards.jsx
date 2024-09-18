import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";
import SmallCard from "./SmallCard";

export default function SmallCards({ data }) {
  const orderStatus = [
    {
      title: "Total Order",
      number: 500,
      iconColor: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      number: 100,
      iconColor: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Order Processing",
      number: 200,
      iconColor: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      number: 300,
      iconColor: "bg-purple-600",
      icon: CheckCheck,
    },
  ];
  <Loader2 />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
