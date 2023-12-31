const StyledComponent = () => {
  return (
    <>
      <section>
        <h2>2️⃣styled-component 방식 연습하기</h2>
        <button>스타일드컴포넌트로 emotion 스타일링</button>
        <div>withComponent로 태그 변경 해 스타일 재사용</div>

        <button>props로 동적 스타일링</button>

        <div>단독 child</div>
        <div>
          <div>Parent 안에 있는, 자식 Child</div>
        </div>
      </section>
    </>
  );
};

export default StyledComponent;

// const Btn = styled.button`
//   padding: 2rem;
//   background-color: blueviolet;
//   color: white;
// `;

// // withComponent 연습
// const Div = Btn.withComponent("div");

// // props로 동적 스타일링 연습
// const PropBtn = styled.button<{ color: string; bgColor: string }>(
//   {
//     marginTop: "1rem",
//     padding: "2rem 3rem",
//     fontSize: "1rem",
//     borderRadius: "0.5rem",
//     textAlign: "center",
//   },
//   (props) => ({
//     color: props.color,
//     backgroundColor: props.bgColor,
//   })
// );

// //targeting 연습
// const Child = styled.div`
//   background-color: pink;
//   color: white;
//   border: 1px solid black;
//   margin: 5px;
// `;
// const Parent = styled.div`
//   ${Child} {
//     color: red;
//   }
// `;
