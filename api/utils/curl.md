
curl -X POST http://localhost:8080/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "username": "testuser2",
    "email": "test2@example.com",
    "password": "password123"
}'



git공부. 
remote repository를 github에서 수정함(readme.md) 
그리고 local 환경에서 개발 후 커밋 시 둘의 내용이 달랐음
(원격 내용들이 로컬에 없는 상황 ! )

git pull로 원격 내용 가져오려함. 

아직 커밋하지 않은 로컬에서의 변경 사항들을 git stash로 임시 보관해둠 . 그럼 마지막 커밋 상태로 돌아감. 
이 후 충돌없이 git pull로 원격 저장소 최신 내용 가져옴 . 
그 후 git stash pop으로 수정된 부분들 가져옴. 
최종 커밋함. 


curl -X POST http://localhost:8080/api/hotels -H "Content-Type: application/json" -d '{"name":"Hotel Madrid","type":"hotel","city":"Madrid","address":"123 Main St","distance":"500","desc":"A beautiful hotel in the heart of Madrid.","cheapestPrice":250}'


curl -X POST http://localhost:8080/api/rooms -H "Content-Type: application/json" -d '{"title":"Premium Test Room","price":600,"maxpeople":3,"desc":"Expensive and fancy rooms for yeongseo and kim. have a good day",roomNumbers : {'number':100 , 'unavailableDates' : ''} }'
