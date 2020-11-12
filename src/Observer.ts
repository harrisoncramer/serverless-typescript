import { APIGatewayEvent, Callback, Context, ProxyResult } from "aws-lambda";
import { isString } from "./util";

export const temp = async (
  event: APIGatewayEvent, // The event that triggers the function. In this case, an API Get request
  context: Context // The context of the execution
): Promise<ProxyResult> => {
  let response: ProxyResult;
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Temperature is ${100} degrees! And secret key is ${
          process.env.SECRET
        }`,
      }),
    };
  } catch (err) {
    console.error(err);
    return err;
  }

  return response;
};

export const poster = async (
  event: APIGatewayEvent, // The event that triggers ''the function. In this case, an API Get request
  context: Context, // The context of the execution
  callback: Callback
): Promise<void> => {
  let response: ProxyResult;
  let input = isString(event) ? event : JSON.stringify(event);

  // Do something with the input...

  try {
    response = {
      statusCode: 200,
      body: input,
    };
    callback(null, response);
  } catch (err) {
    console.error(err);
    callback(err);
  }
};
