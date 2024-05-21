# Lambda

resource "aws_lambda_function" "lambda" {
  filename      = var.OUTPUT_PATH
  function_name = format("%s-%s-%s",var.PROJECT_NAME, var.ENVIRONMENT, "lambda-function")
  role          = aws_iam_role.iam_lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs12.x"
  source_code_hash = filebase64sha256("${var.OUTPUT_PATH}")
  timeout      = 30
  

    vpc_config {
    subnet_ids         = [var.SUBNET_ID_1, var.SUBNET_ID_2]
    security_group_ids = [var.LAMBDA_SECURITY_GROUP_ID]
  }

  tags = {
    Environment = var.ENVIRONMENT
  }
}

# Lambda Permissions

resource "aws_lambda_permission" "with_lb" {
  statement_id  = "AllowExecutionFromlb"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.arn
  principal     = "elasticloadbalancing.amazonaws.com"
  source_arn    = aws_lb_target_group.lambda_target_group.arn
}