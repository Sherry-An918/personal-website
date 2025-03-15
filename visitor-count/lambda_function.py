import json
import boto3
from boto3.dynamodb.conditions import Key
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VisitorCount')


def lambda_handler(event, context):
    response = table.get_item(Key={'siteId': 'nisirui.com'})
    # {"Item": {"visitorCount": 0}}
    visitor_count = response['Item']['visitorCount']
    visitor_count += 1
    table.update_item(
        Key={'siteId': 'nisirui.com'},
        UpdateExpression='SET visitorCount = :val',
        ExpressionAttributeValues={':val': visitor_count}
    )
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    # Return updated count
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',  # Enable CORS
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'visitorCount': int(visitor_count), 'timestamp': current_time})
    }
