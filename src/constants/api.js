/**
 * API Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
export default {
  // productList: fetch("http://192.168.0.113:3000/api/v1/products", {method: "GET"})
  // .then((response) => response.json())
  // .then((responseData) => {
  //   console.log("PRODUCT LIST DATA");
  //   console.log(responseData);
  //  return responseData;
  // }).done(),

  // The URL we're connecting to
  hostname: 'http://wp-api.mcnam.ee',
  // hostname: 'http://192.168.0.113:3000/api/v1',
  // hostname: api_url

  // Map shortnames to the actual endpoints, so that we can
  // use them like so: AppAPI.ENDPOINT_NAME.METHOD()
  //  NOTE: They should start with a /
  //    eg.
  //    - AppAPI.recipes.get()
  //    - AppAPI.users.post()
  //    - AppAPI.favourites.patch()
  //    - AppAPI.blog.delete()
  endpoints: new Map([
    ['login', '/wp-json/jwt-auth/v1/token'], // If you change the key, update the reference below
    ['users', '/wp-json/wp/v2/users'],
    ['products', 'http://192.168.0.113:3000/api/v1/products'],
    ['me', '/wp-json/wp/v2/users/me'],
    ['recipes', '/wp-json/wp/v2/recipes'],
    ['meals', '/wp-json/wp/v2/recipe_meal'],
  ]),

  // Which 'endpoint' key deals with our tokens?
  tokenKey: 'login',
};
