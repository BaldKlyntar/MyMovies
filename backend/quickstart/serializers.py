from rest_framework import serializers
from .models import Movie, Review, Role, Genre, Actor, Studio
from django.db.models import Avg, Count

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'movie', 'user', 'text', 'score', 'createdAt']

    def validate_score(self, value):
        if value < 1 or value > 10:
            raise serializers.ValidationError("La calificacion debe ser un valor entre 0 y 10")
        return value
    

class RoleSerializer(serializers.ModelSerializer):
    actor_name = serializers.CharField(source='actor.name')
    actor_image = serializers.CharField(source='actor.image')

    class Meta:
        model = Role
        fields = ['actor_name', 'actor_image', 'character_name']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name']

class StudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studio
        fields = ['id', 'name']

class MovieDetailSerializer(serializers.ModelSerializer):
    roles = RoleSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only = True)
    genres = GenreSerializer(many=True, read_only=True)
    studio = StudioSerializer(read_only=True)

    vote_average = serializers.SerializerMethodField()
    vote_count = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = '__all__'

    def get_vote_average(self, obj):
        return obj.reviews.aggregate(avg=Avg('score'))['avg']
    
    def get_vote_count(self,obj):
        return obj.reviews.aggregate(count=Count('id'))['count']
    
class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'



    


