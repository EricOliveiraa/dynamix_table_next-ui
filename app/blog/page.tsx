import DefaultTable from "@/components/DynamicTable/DefaultTable";
import { title } from "@/components/primitives";
import columns from "@/utils/Table/ColumnsBlog";

// realizar chamada fetch
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function BlogPage() {
  const data = await getUsers();

  return (
    <div>
      <h1 className={title()}>Dynamic Table Users - Api JsonPlaceHolder</h1>
      <DefaultTable data={data} columns={columns} />
    </div>
  );
}
