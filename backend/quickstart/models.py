from django.db import models


class Genre(models.Model):
    tmdb_id = models.IntegerField(unique=True)
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name
    
class Studio(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name
    
class Movie(models.Model):
    tmdb_id = models.IntegerField(unique=True, null=True, blank=True)
    title = models.CharField(max_length=70)
    country = models.CharField(max_length=50)
    release_date = models.DateField(blank= True, null = False)
    description = models.TextField(max_length=500)
    studio = models.ForeignKey(Studio, on_delete=models.CASCADE, related_name="movies")
    genres = models.ManyToManyField(Genre, related_name="movies")
    length = models.IntegerField(blank=True, null=True)
    image = models.URLField(blank=True)
    gross = models.FloatField(max_length=25)
    vote_average = models.FloatField(blank=True, null=True)
    vote_count = models.IntegerField(blank=True, null=True)


    def __str__(self):
        return self.title
    
    
class User(models.Model):
    name = models.CharField(blank=False, null=False, max_length= 25)
    lastName = models.CharField(blank= False, null=False, max_length=25)
    follows = models.ManyToManyField("self", symmetrical=False, related_name="followers", blank=True)


    def __str__(self):
        return self.name
    
class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="reviews")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(blank=True, null=False, max_length=1200)
    score = models.FloatField(blank=False, null=False)
    createdAt = models.DateField(auto_now_add=True)

    def __int__(self):
        return self.id
    
class Actor(models.Model):
    name = models.CharField(blank=False, null=False, max_length=50)
    country = models.CharField(blank=False, null=False)
    image = models.URLField(blank=False, null=False)

    def __str__(self):
        return self.name
    
class Role(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="roles")
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    character_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.actor} as {self.character_name}"



