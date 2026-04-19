from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie,  Review, Genre, Studio, Actor, Role
from .serializers import MovieSerializer, ReviewSerializer, MovieDetailSerializer
from rest_framework import status
from .utils.tmdb import fetch_movie, map_movie_data, fetch_movie_credits

#----------------------------------------MOVIES----------------------------------------------

@api_view(['GET'])
def get_movies(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_movie(request, id):
    try:
        movie = Movie.objects.prefetch_related('roles__actor', 'reviews').get(id=id)
    except Movie.DoesNotExist:
        return Response({'error': 'Pelicula no encontrada'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = MovieDetailSerializer(movie)
    return Response(serializer.data)

@api_view(['POST'])
def create_movie(request):
    serializer = MovieSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status= status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def import_movie(request, tmdb_id):
    if Movie.objects.filter(tmdb_id=tmdb_id).exists():
        movie = Movie.objects.get(tmdb_id=tmdb_id)
        serializer = MovieDetailSerializer(movie)
        return Response(serializer.data)

    data = fetch_movie(tmdb_id)

    if not data:
        return Response({"error": "No encontrada"}, status=404)

    movie_data = map_movie_data(data)

    studio = None
    if movie_data.get("studio_name"):
        studio, _ = Studio.objects.get_or_create(
            name=movie_data.pop("studio_name")

        )

    movie = Movie.objects.create(
        tmdb_id=tmdb_id,
        studio=studio,
        **movie_data
    )

    for g in data.get("genres", []):
        genre, _ = Genre.objects.get_or_create(
            tmdb_id=g["id"],
            defaults={"name": g["name"]}
        )
        movie.genres.add(genre)

    credits = fetch_movie_credits(tmdb_id)

    if credits:
        for actor_data in credits.get("cast", [])[:10]:
            actor, _ = Actor.objects.get_or_create(
                tmdb_id = actor_data.get("id"),
                defaults={
                    "name": actor_data.get("name"),
                    "image": f"https://image.tmdb.org/t/p/w500{actor_data.get('profile_path')}"
                    if actor_data.get("profile_path") else ""
                }
            )

            Role.objects.get_or_create(
                movie=movie,
                actor=actor,
                defaults={
                    "character_name": actor_data.get("character")
                }
            )

    serializer = MovieDetailSerializer(movie)
    return Response(serializer.data, status=201)

@api_view(['PUT', 'PATCH'])
def update_movie(request, id):
    try:
        movie = Movie.objects.get(id=id)
    except Movie.DoesNotExist:
        return Response({"error": "Movie not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = MovieSerializer(movie, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_movie(request, id):
    try:
        movie = Movie.objects.get(id=id)
    except Movie.DoesNotExist:
        return Response({"error": "Movie not found"}, status=status.HTTP_404_NOT_FOUND)

    movie.delete()
    return Response({"message": "Movie deleted"}, status=status.HTTP_204_NO_CONTENT)


#-------------------------------------------------REVIEWS---------------------------------------

@api_view(['GET'])
def get_reviews(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_review(request, id):
    try:
        review = Review.objects.get(id=id)
    except Review.DoesNotExist:
        return Response({"error": "Review not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = ReviewSerializer(review)
    return Response(serializer.data)

@api_view(['POST'])
def create_review(request):
    serializer = ReviewSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'PATCH'])
def update_review(request, id):
    try:
        review = Review.objects.get(id=id)
    except Review.DoesNotExist:
        return Response({"error": "Review not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = ReviewSerializer(review, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_review(request, id):
    try:
        review = Review.objects.get(id=id)
    except Review.DoesNotExist:
        return Response({"error": "Review not found"}, status=status.HTTP_404_NOT_FOUND)

    review.delete()
    return Response({"message": "Review deleted"}, status=status.HTTP_204_NO_CONTENT)