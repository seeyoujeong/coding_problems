// 날씨 비교하기
function solution(date1, date2) {
  return new Date(date1) - new Date(date2) < 0 ? 1 : 0;
}
