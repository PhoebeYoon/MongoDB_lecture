###### :cactus:  MongoDB_lecture

## indexes

특정한 문서에 접속하게 

<img width="300" alt="스크린샷 2023-03-25 오후 12 18 07" src="https://user-images.githubusercontent.com/48478079/227689189-133fba37-47bd-4b9a-8800-5a209bcb580b.png">  



MONGOSH 에서  
``` db.books.find({ rating:8}).explain('executionStats') ```   




<img width="230" alt="스크린샷 2023-03-25 오후 12 23 32" src="https://user-images.githubusercontent.com/48478079/227689479-1f7f24d4-833e-415f-8c07-7c3a9bb62a6e.png">
