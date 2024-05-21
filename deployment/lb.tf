
resource "aws_lb_target_group" "lambda_target_group" {
  name        =  format("%s-%s-%s",var.PROJECT_NAME, var.ENVIRONMENT, "target-group")
  target_type = "lambda"
}


resource "aws_lb_target_group_attachment" "lb_target_group_attachment" {
  target_group_arn = aws_lb_target_group.lambda_target_group.arn
  target_id        = aws_lambda_function.lambda.arn
  depends_on       = [aws_lambda_permission.with_lb]
}


resource "aws_lb_listener_rule" "static" {
  listener_arn = var.LB_LISTENER_ARN
  
  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.lambda_target_group.arn
  }

  condition {
    path_pattern {
      values = ["${var.PATH_PATTERN}*"]
    }
  }
}