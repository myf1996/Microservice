npm install
npm build
mkdir tmp


zip -r ./tmp/dist.zip dist/ node_modules/ package.json package-lock.json .env

cd deployment

terraform init -backend-config="key=user-service" -backend-config="bucket=terraform-states"
terraform plan
terraform apply # -auto-approve

cd ..
rm -rf tmp/