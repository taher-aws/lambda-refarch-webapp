// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5thtf3ao8bbjrkmh5mop1b2mrk",     // CognitoClientID
  "api_base_url": "https://kgbutkcdge.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo-fullstack-webapp-with-auth-6t7y.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.dnvrxkrwzswox.amplifyapp.com"                                      // AmplifyURL
};

export default config;
