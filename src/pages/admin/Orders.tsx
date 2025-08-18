import { AllOrdersTable } from "@/components/modules/Order/AllOrdersTable";

const Orders = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center gap-2">
        <h1 className="text-xl font-semibold">Orders</h1>
      </div>
      <div className="my-10">
        <AllOrdersTable />
      </div>
    </div>
  );
};

export default Orders;
