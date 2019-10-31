# Articles local updater
This is a example of using angular 8 + expressJs with typescript + MongoDb on Docker.

## Requirement
- Docker
- Port 3000 and 27017 free

## installation
```
git clone https://github.com/nexfor5/articles-local-updater.git

docker-compose up --build
```

Then take some coffe and wait, when docker is done open http://localhost:3000, if you want can try http://localhost:3000/docs for swagger.

## Note
When i was cheking the API (https://hn.algolia.com/api/v1/search_by_date?query=nodejs) i noticed the result was comment and stories, first there were no problem with that because i was saving just the data of the story and there wouldn't be duplicates but the problem was that the "created_at" date present in the comment types was a reference for the comment and not for the story, this make some old stories appear with wrong dates. Because there was no requirement for this i created a branch called "just_stories" just for fun that add to the API url the param "tags=story" so when is geting the data there is only stories and no wrong dates.

```
git checkout just_stories
```