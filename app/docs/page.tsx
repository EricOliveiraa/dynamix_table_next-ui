import { title } from "@/components/primitives";
import DefaultTable from "@/components/DynamicTable/DefaultTable";

import columns from "@/utils/Table/ColumnsDocs";

async function getbooking() {
  const url = "https://dad-jokes.p.rapidapi.com/random/joke";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "19a6afccb4msh9132b25cf1b6cffp1300fbjsn81b2ddf76630",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default async function DocsPage() {
  const data = await getbooking();
  console.log("🚀 ~ file: page.tsx:27 ~ DocsPage ~ data:", data);

  return (
    <div>
      <h1 className={title()}>Dynamic Table - Cars by API-Ninjas</h1>
      {/* <DefaultTable data={data} columns={columns}   /> */}
    </div>
  );
}
