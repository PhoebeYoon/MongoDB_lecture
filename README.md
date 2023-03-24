###### :cactus:  MongoDB_lecture

## Export Collection   
MongoDB compass에서 collection를 export한뒤에 import도 해 봅시다. 

1. 
<img width="323" alt="스크린샷 2023-03-24 오후 6 16 29" src="https://user-images.githubusercontent.com/48478079/227476954-306ba41d-0380-4fa6-8acf-1f4cb957f911.png">     
Export collection 클릭  

2.     
<img width="323" alt="스크린샷 2023-03-24 오후 6 19 39" src="https://user-images.githubusercontent.com/48478079/227477576-90cbe789-66e2-4941-bd09-3d864a2a266d.png">    

``` Select Fields ``` 를 클릭하면 field를 선택할 수 있습니다 ``` Export Full Collection ```를 클릭합니다.   

3.``` Export File Type ``` 에서 ``` JSON | CSV ``` 중 하나를 선택하면 됩니다. 우리는 ```JSON```를 선택하고 ``` Select a file...```  에서 저장할 위치를 지정하고 ``` Export ```를 클릭합니다. 

## import data  
첨부된 book2.json 파일을 import 해봅시다.   
<img width="257" alt="스크린샷 2023-03-24 오후 6 37 31" src="https://user-images.githubusercontent.com/48478079/227482842-66c0120f-dc17-4eea-a623-e383fda0e327.png">

## shell 에서 document 삭제
``` bookstore> db.books.deleteOne({_id: ObjectId("641d434ea0139faf66b2f99b") } ) ```    
id값은 기존내용중 아무거나 선택해서 사용합니다. 
만약 성공했다면, 
``` { acknowledged: true, deletedCount: 1 } ``` 가 나옵니다. 
