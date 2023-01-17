import React from 'react';

const Form = ({ updateMainCat }) => {
  const [value, setValue] = React.useState('');
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [errorMsg, setErrorMsg] = React.useState('');

  function handleInputChange(e) {
    const userValue = e.target.value;
    if (includesHangul(userValue) === true) {
      setErrorMsg('한글은 입력할 수 없습니다.')
    } else {
      setErrorMsg('');
    }
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    if (value === '') {
      setErrorMsg('빈 값으로 만들 수 없습니다.')
      return;
    }
    updateMainCat(value);

  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        onChange={handleInputChange}
        value={value}
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }} >{errorMsg}</p>
    </form>
  );
}

export default Form;