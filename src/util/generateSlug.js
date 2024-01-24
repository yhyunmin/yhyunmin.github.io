export const generateSlug = str => {
  // 공백 제거
  str = str?.replace(/^\s+|\s+$/g, '');
  // 소문자 변환
  str = str?.toLowerCase();
  //  특수문자 대체
  const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaaeeeeiiiioooouuuunc------';

  // 문자변경 반복문
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  //특수문자,숫자 빼고 제거
  //공백 하이픈으로 대체
  str = str
    ?.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return str;
};
