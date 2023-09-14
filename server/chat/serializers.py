# What should be sent.

from rest_framework import serializers
from database.models import ChatHistory

class ChatTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatHistory
        fields = ( 
                  'conversation_title',                 
                  )

class ChatConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatHistory
        fields =( 'user_id',
                    'chat_history_id',
                    'date',
                    'conversation_title',
                    'question',
                    'answer'
                    )
class ChatRealTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatHistory
        fields = ( 'user',
                    'chat_history_id',
                    'date',
                    'conversation_title',
                    'question',
                    'answer'
                    )
        
# class ChatConversationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ChatHistory
#         fields =( 'user_ID',
#                     'chat_history_id',
#                     'date',
#                     'conversation_title',
#                     'question',
#                     'answer'
#                     )