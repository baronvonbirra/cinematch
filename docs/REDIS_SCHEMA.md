# Redis Schema

Keys format: `{namespace}:{identifier}:{subkey}`

- `profile:{username}`: Scraped user ratings and analyzed user metadata (30d TTL)
- `recommendations:{username}:{type}`: Calculated recommendation sets (24h TTL)
- `tmdb:{movie_id}`: TMDb movie cache (7d TTL)
- `trending:movies`: List of trending unseen movies (7d TTL)
