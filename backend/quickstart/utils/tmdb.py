import requests
from django.conf import settings


def fetch_movie(tmdb_id):
    url = f"{settings.TMDB_BASE_URL}/movie/{tmdb_id}"

    headers = {
        "Authorization": f"Bearer {settings.TMDB_TOKEN}",
        "Content-Type": "application/json;charset=utf-8"
    }

    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        return None

    return response.json()

def fetch_movie_credits(tmdb_id):
    url = f"{settings.TMDB_BASE_URL}/movie/{tmdb_id}/credits"

    headers = {
        "Authorization": f"Bearer {settings.TMDB_TOKEN}",
        "Content-Type": "application/json;charset=utf-8"
    }

    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        return None

    return response.json()

def map_movie_data(data):
    companies = data.get("production_companies", [])
    studio_name = companies[0]["name"] if companies else None
    print(companies)

    return {
        "title": data.get("title"),
        "description": data.get("overview"),
        "release_date": data.get("release_date"),
        "image": f"https://image.tmdb.org/t/p/w500{data.get('poster_path')}",
        "vote_average": data.get("vote_average"),
        "vote_count": data.get("vote_count"),
        "length": data.get("runtime"),
        "gross": data.get("revenue"),
        "country": data.get("production_countries")[0]["name"] if data.get("production_countries") else None,
        "studio_name": studio_name
    }