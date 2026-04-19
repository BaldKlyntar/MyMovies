from django.contrib import admin
from .models import Movie, Genre, Studio, User, Review, Actor, Role

admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Studio)
admin.site.register(User)
admin.site.register(Review)
admin.site.register(Actor)
admin.site.register(Role)
