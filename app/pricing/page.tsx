import DefaultTable from "@/components/DynamicTable/DefaultTable";
// import UserTableStatic from "@/components/UsarTableStatic";
import columns from "@/utils/Table/ColumnsPricing";

import { title } from "@/components/primitives";

const getMarket = async () => {
  const url =
    "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "19a6afccb4msh9132b25cf1b6cffp1300fbjsn81b2ddf76630",
      "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default function PricingPage() {
  const data = getMarket();

  return (
    <div>
      <h1 className={`${title()} mb-4 `}>Teste Tabela Market and Financial</h1>
      <DefaultTable data={data} columns={columns} />
    </div>
  );
}
