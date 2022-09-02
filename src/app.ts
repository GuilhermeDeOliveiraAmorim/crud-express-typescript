import QueryString from "qs";
import server from "./server";

server.settings("query parser", function (str: any) {
  return QueryString.parse(str, {
    /* custom options */
  });
});

server.listen(8001);
