from django.urls import path
from .views import (
    get_movies,
    get_movie,
    create_movie,
    update_movie,
    delete_movie
)

urlpatterns = [
    path("movies/", get_movies),
    path("movies/<int:id>/", get_movie),
    path("movies/create/", create_movie),
    path("movies/<int:id>/update/", update_movie),
    path("movies/<int:id>/delete/", delete_movie),
]