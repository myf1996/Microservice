terraform {
  backend "s3" {
    bucket          = "terraform-states"
    key             = "user-service"
    region          = "us-east-1"
  }
}