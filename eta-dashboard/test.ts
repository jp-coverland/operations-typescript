import axios from "axios";

async function getItems() {
  const url = "https://api.skulabs.com/inventory/get_items";
  const reqeustBody = {
    item_ids: ["65ea058dc232eeedf72687ac"],
    warehouse_ids: ["62f0fcc0fc3f4e916f865d70"],
  };

  const response = await axios.post(url, reqeustBody, {
    headers: {
      Authorization: `Bearer ${process.env.SKU_LABS_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

async function main() {
  const data = await getItems();
  console.log(data);
}

main();
