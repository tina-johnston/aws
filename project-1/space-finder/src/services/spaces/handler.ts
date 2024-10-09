import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

// Single lambda function to handle all HTTP methods
// Or you can create separate lambda functions for each HTTP method

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  let message: string = '';

  switch (event.httpMethod) {
    case 'GET':
      message = 'GET method called';
      break;
    case 'POST':
      message = 'POST method called';
      break;
    default:
      break;
  }

	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify(message),   
	};
	return response;
}

export { handler };
