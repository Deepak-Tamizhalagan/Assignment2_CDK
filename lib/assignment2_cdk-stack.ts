import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// AWS resources
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class Assignment2CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
  synthesizer: new cdk.BootstraplessSynthesizer()
});




    // ========== 1. S3 BUCKET ==========
    const myBucket = new s3.Bucket(this, 'S3Bucket8983627', {
      bucketName: 'assignment2-s3-8983627',
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY // Only for development (not for production)
    });

    // ========== 2. LAMBDA FUNCTION ==========
    const myLambda = new lambda.Function(this, 'Lambda8983627', {
      runtime: lambda.Runtime.NODEJS_18_X,  // Use latest runtime
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log('Lambda Executed!');
          return {
            statusCode: 200,
            body: 'Hello from CDK Lambda - 8983627'
          };
        }
      `),
      environment: {
        BUCKET_NAME: myBucket.bucketName
      }
    });

    // Grant Lambda read/write access to S3
    myBucket.grantReadWrite(myLambda);

    // ========== 3. DYNAMODB TABLE ==========
    const myTable = new dynamodb.Table(this, 'DynamoDBTable8983627', {
      tableName: 'assignment2-dynamodb-8983627',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY // Only for dev/test
    });

    // Grant Lambda access to DynamoDB
    myTable.grantReadWriteData(myLambda);
  }
}
