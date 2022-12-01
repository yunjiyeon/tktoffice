// 캐싱 스토리지에 저장될 이름
//var CHCHE_NAME = 'pwa-offline-v1';
// 캐싱할 (캐시 스토리에 저장할) 웹 자원 (이미지, css..) 목록을 배열로 
// var filesToCache = [ 
//   '/',// index.html (현재 문서의 제일 윗 단계를 의미)
//   '/img/logo.png',
// ];



var CHCHE_NAME = 'pwa-offline-v2';
var filesToCache = [ 
  '/',
  '/img/webicon.png',
  'scss/main.css',
];

// 서비스워커 활성화 및 업데이트-> 파일 추가 위해 함수 새로 만들기 (새로 추가)
// 서비스 워커 설치 (웹 자원 캐싱)
self.addEventListener('install', function(event){
  event.waitUntil( // install 이벤트가 끝날때까지
    caches.open(CHCHE_NAME)
    // CHCHE_NAME 변수 이름으로 캐시 스토리지에 캐시를 생성 > pwa 파일 나옴
    // caches 캐시 스토리지에 접근 할 수 있는 예약어
    .then(function(cache){ //캐싱이 성공했을 때 (위에 결과물 캐시 파일)
      return cache.addAll(filesToCache); // pwa 파일 웹자원 추가
    })
    .catch(function(error){
      return console.log(error);
    }) 
  );
});

// 서비스워커 설치 후 네트워크 요청이 있을 때는 캐시로 돌려 줌 (캐시된 자원으로)
self.addEventListener("fetch", function(event){
  console.log('서비스워커 패치ㅛ');
  event.respondWith( // fetch과에 대한 응답을 알려주는 API
    caches
    .match(event.request) // caches.match() - 네트워크의 요청에 해당하는 캐싱을 반환
    .then(function(response){
      return response || fetch(event.request); // 캐시에 없을 때는 fetch API 실행 (네트워크로 가서 가져옴)
    })
    .catch(function(error){
      return console.log(error);
    }),
  );
})


// 서비스워커 활성화 및 업데이트
self.addEventListener("activate", function(event){
  var newCacheList = ['pwa-offline-v2'] // 바뀐 내용
  event.waitUntil(  // 내부 동작이 끝날때까지 기다려줌
    caches.keys() // 객체 안의 모든 키들, 스토리지의 모든 목록 확인
    .then(function(cacheList){  // 위의 목록을 가져온
      return Promise.all(   // PromiseConstructor 안에 들어있는 것들이 한방에 일어남 (한방에 일어나는 걸 기다려줬다가 일어난 뒤 리턴)
      // 여러 비동기 작업을 동시에 처리하여 결과를 얻고자 할 때 사용
      cacheList.map(function(cacheName){
        //새로운 서비스워커에서 사용할 캐시 이외의 것들은 모두 삭제
        if(newCacheList.indexOf(cacheName) === -1){
        //-1 : newCacheList에 내용이 없다는 뜻
        //문자열 또는 배열.indexOf('찾을문자') - 같은 게 몇번째인지 알아옴
        //새로운 newCacheList가 아이템(요소)이 기존 캐시에 없을 경우
          return caches.delete(cacheName);
        }
      })
      )
    })
    .catch(function(error){
      return console.log(error);
    })
  )
});

