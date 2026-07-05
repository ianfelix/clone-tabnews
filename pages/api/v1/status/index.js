import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  return response.json({ status: "tudo certo com a api status" });
}

export default status;
