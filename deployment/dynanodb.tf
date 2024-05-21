resource "aws_dynamodb_table" "dynamodb-table" {
  name           = var.TABLE_NAME
  billing_mode   = var.BILLING_METHOD
  read_capacity  = var.READ_CAPACITY
  write_capacity = var.WRITE_CAPACITY
  hash_key       = var.HASH_KEY

  attribute {
    name = var.HASH_KEY
    type = var.HASH_TYPE
  }

  # email
  attribute {
    name = "${var.INDEX_HASH_KEY_1}"
    type = "${var.INDEX_HASH_TYPE_1}"
  }
  # phoneNumber
  attribute {
    name = "${var.INDEX_HASH_KEY_2}"
    type = "${var.INDEX_HASH_TYPE_2}"
  }

  tags = {
    Name        = format("%s-%s-%s",var.PROJECT_NAME, var.ENVIRONMENT, var.TABLE_NAME)
    Environment = var.ENVIRONMENT
  }
}