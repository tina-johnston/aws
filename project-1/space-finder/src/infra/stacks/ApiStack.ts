import { Stack, StackProps } from 'aws-cdk-lib';
import { RestApi, LambdaIntegration} from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

interface ApiStackProps extends StackProps {
  spacesLambdaIntegration: LambdaIntegration
}

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: ApiStackProps) {
    super(scope, id, props);

    const api = new RestApi(this, 'space-finder-api');
    const spaceResource = api.root.addResource('spaces');
    spaceResource.addMethod('POST', props?.spacesLambdaIntegration )
    spaceResource.addMethod('GET', props?.spacesLambdaIntegration )
  }
}