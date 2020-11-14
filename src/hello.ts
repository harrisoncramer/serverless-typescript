import "source-map-support/register";
import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { isString } from "./util";

export const getter: APIGatewayProxyHandler = async (
  event,
  _context,
  callback
): Promise<APIGatewayProxyResult> => {
  console.log(`Running getter function`);
  try {
    let result = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Hello World!",
          input: event,
        },
        null,
        2
      ),
    };
    return result;
  } catch (err) {
    callback(err);
  }
};

export const poster: APIGatewayProxyHandler = async (
  event,
  _context,
  callback
): Promise<APIGatewayProxyResult> => {
  let input = isString(event) ? event : JSON.stringify(event);
  try {
    let response = {
      statusCode: 200,
      body: input,
    };
    return response;
  } catch (err) {
    console.error(err);
    callback(err);
  }
};
