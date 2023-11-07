// className을 설정할 때, import로 불러온 styels 객체 안에 있는 값을 참조

const BasicCssModules = () => {
  return (
    <section>
      <h2>1️⃣ 기본 CSS-Modules 사용법 익히기</h2>
      {/* 단일 클래스 + 클래스명에 하이픈 있는 경우 */}
      <button>버튼 0</button>
      {/* 다중 클래스 + 템플릿 리터럴 */}
      <button>버튼 1</button>
      {/* 다중 클래스 + join() 사용 */}
      <button>버튼 2</button>
    </section>
  );
};

export default BasicCssModules;
