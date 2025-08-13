import UserOrderCard from "@/components/modules/Order/UserOrderCard";

const MyOrders = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-10">
      <h1 className="font-medium text-lg md:text-xl mb-4">Orders</h1>

      <div className="space-y-4">
        <UserOrderCard />
        <UserOrderCard />
      </div>
    </div>
  );
};

export default MyOrders;
