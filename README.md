## install
`npx create-react-app .`
`npm install react-router-dom`
`npm install gsap`
`npm install react-use`
`npm install axios`
`npm i react-router-dom`
`npm install framer-motion`




## error
`export 'Switch' (imported as 'Switch') was not found in 'react-router-dom'`

해결방법:
Switch를 사용하다 BrowserRouter로 바꾸어줌


`Uncaught Error: useLocation() may be used only in the context of a <Router> component.`
 useLocation 훅이 <Router> 컴포넌트의 컨텍스트 외부에서 사용되었을 때 발생합니다. useLocation 훅은 반드시 <BrowserRouter> (또는 다른 라우터 컴포넌트) 안에서 호출되어야 합니다.