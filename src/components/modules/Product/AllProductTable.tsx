/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingLayout from "@/components/layouts/LoadingLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProductQuery } from "@/redux/features/product/product.api";

const AllProductTable = () => {
  const { data, isLoading } = useGetProductQuery(undefined) || [];

  if (isLoading) {
    <LoadingLayout />;
  }

  console.log(data);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((product: any, idx: number) => (
            <TableRow className="space-x-2" key={idx}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-sm w-12 h-12 object-cover"
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.name}
                  />
                  <div>
                    <div className="font-medium">{product.name}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.status}</TableCell>

              <TableCell className="text-right">Tk. {product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-muted-foreground mt-4 text-center text-sm">Products</p>
    </div>
  );
};

export default AllProductTable;
