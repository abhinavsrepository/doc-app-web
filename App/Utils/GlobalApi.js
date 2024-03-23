import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clu3lubpq0de907w2y9cpda0h/master";
const getCategory = async () => {
  const query = gql`
    query MyQuery {
      categories {
        id
        name
        icon {
          url
        }
        slug
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
export default {
  getCategory,
};
