# Emis Client (ec)

## Adding a new lambda

### Code structure

   1. Add new lambda under `lambdas/src` folder
   2. Lambda path matches the api path + functionality. For example `/appointments` would be  under a folder `/appointments`. If the functionality is to create appointments, folder name would be indicative of that, like `/create-appointments`. So full path would be `lambdas/src/appointments/create-appointments`
   3. All lambdas share common code under `lambdas/src/utils`

### Installing node modules for a lambda
   1. `install-lambda-packages.sh` loops through all the lambdas containing a `package.json` file under `lambdas` folder and runs `npm install` if one is found.
   2. It is called in `unit-tests` and `build-and-zip-lambdas` stages of gitlab-ci pipeline

### Creating a zip for uploading to aws

   1. `build-and-zip-lambdas` stage in gitlab pipeline, which is coded in `.gitlab-ci.yml`,   is responsible for building and zipping the lambdas. It calls the `build-and-zip-lambdas.sh` file
   2. `build-and-zip-lambdas.sh` contains scripts for building layers, shared by all lambdas, and zipping the individual  lambdas. The output zip must be placed in the dist folder(`lambdas/dist`)

### Terraform Changes

   1. Define the lambda in `infra/lambdas.tf` and ensure add layer `ec-utils-layer`
   2. For the `filename` and `source_code_hash` fields, refer to the zip file created in previous section.
   3. Create a variable in `template_file.api_swagger` section in the file `infra/api.tf`, or referring to the lambda
   4. Create the openapi spec for the endpoint to be exposed via `API Gateway` in `infra/api.aml`. Under `x-amazon-apigateway-integration` section , add `uri` field as the variable name in above step
   5. Special note, the `httpMethod` is always `POST` under `x-amazon-apigateway-integration` section, regardless of the API method

## Deploying from local

   1. Install the third party dependencies for all lambdas by running `bash install-lambda-packages.sh` from project root
   2. Zip the lambdas by running `bash build-and-zip-lambdas.sh` from project root
   3. Run the following commands to deploy to aws via terraform
```
╰─$ cd infra 
╰─$ terraform init 
╰─$ terraform workspace select stg-uk
╰─$ terraform plan
╰─$ terraform apply -auto-approve=true
```
## Generate auth token for API testing

   1. ensure that you have `~/.aws/credentials` file correctly setup
   2. Run the following commands
      $ cd `lambdas/e2e/`
      $ npm i
      $ npm run generate-jwt
   3. On successful execution, the auth token would be saved at `lambdas/e2e/.jwt`

## Running end to end tests from local
 
   1. Generate the auth token by following the above steps
   2. Run the following command
      $ npm run e2e-tests

