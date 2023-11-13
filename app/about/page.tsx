import { title } from "@/components/primitives";
import DefaultTable from "@/components/DynamicTable/DefaultTable";
import columns from "@/utils/Table/ColumnsAbout";

// realizar chamada fetch
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function AboutPage() {
  const data = await getProducts();

  return (
    <div>
      <h1 className={title()}>Dynamic Table Products - Api FakeStore</h1>
      <DefaultTable data={data} columns={columns} />
    </div>
  );
}
