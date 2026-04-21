from django.urls import path
from .views import (
    get_movies,
    get_movie,
    create_movie,
    update_movie,
    delete_movie,
    get_reviews,
    get_review,
    create_review,
    update_review,
    delete_review,
    import_movie,
    get_actors
)

urlpatterns = [
    path("movies/", get_movies),
    path("movies/<int:id>/", get_movie),
    path("movies/create/", create_movie),
    path("movies/import/<int:tmdb_id>/", import_movie),
    path("movies/<int:id>/update/", update_movie),
    path("movies/<int:id>/delete/", delete_movie),
    path("reviews/", get_reviews),
    path("reviews/<int:id>/", get_review),
    path("reviews/create/", create_review),
    path("reviews/<int:id>/update/", update_review),
    path("reviews/<int:id>/delete/", delete_review),
    path('actors/<int:tmdb_id>/', get_actors)
]