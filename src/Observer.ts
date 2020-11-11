import { APIGatewayEvent, Context, ProxyResult } from "aws-lambda";

export const temp = async (
  event: APIGatewayEvent,
  context: Context
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
