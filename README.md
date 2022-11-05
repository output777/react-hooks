useEffect

- useEffect는 componentDidmount의 역할을 해서 새로고침을 하면 sayHello를 실행함
- 그렇지만 componentDidUpdate의 역할도 하기 때문에 클릭하면 sayHello를 실행함
- componentWillUnmount일 때 useEffect로부터 function이 return 됨
- useEffect의 첫 번째 인자는 function으로서의 effect임
- 두 번째 인자는 dependency임 -> deps가 있다면 effect는 deps 리스트에 있는 값일 때만 값이 변화도록 활성화 됨
