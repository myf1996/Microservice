variable "AWS_REGION" {
  default = "us-east-1"
}

variable "ENVIRONMENT" {
  default ="development"
}

variable "PROJECT_NAME" {
  default = "user-service"
}

############################################
###############    LAMBDA    ###############
############################################
variable "OUTPUT_PATH" {
  default = "../tmp/dist.zip"
}

variable "SUBNET_ID_1" {
  default = "PRIVATE_SUBNET_1"
}

variable "SUBNET_ID_2" {
  default = "PRIVATE_SUBNET_2"
}

variable "PATH_PATTERN" {
  default = "/user-service/"
}

variable "LAMBDA_LOADBALANCER_ARN" {
  default = "INTERNAL_LOADBALANCER_ARN"
}

variable "LAMBDA_SECURITY_GROUP_ID" {
  default = "LAMBDA_SECURITY_GROUP_ID"
}

variable "LB_LISTENER_ARN" {
  default = "LB_LISTENER_ARN"
}

############################################
##############    DYNAMODB    ##############
############################################


variable "TABLE_NAME" {
  default = "user-service"
}

variable "BILLING_METHOD" {
  default = "PROVISIONED" #PAY_PER_REQUEST
}

variable "READ_CAPACITY" {
  default = 5
}

variable "WRITE_CAPACITY" {
  default = 5
}

variable "HASH_KEY" {
  default = "id"
}

variable "HASH_TYPE" {
  default = "S" # B #N
}

variable "INDEX_HASH_KEY_1" {
  default = "email"
}

variable "INDEX_HASH_TYPE_1" {
  default = "S"
}

variable "INDEX_HASH_KEY_2" {
  default = "phoneNumber"
}

variable "INDEX_HASH_TYPE_2" {
  default = "S"
}