// 문자열 정수의 합

import java.util.Arrays;

class Solution {
    public int solution(String num_str) {
        return Arrays.stream(num_str.split(""))
            .mapToInt(Integer::parseInt)
            .sum();
    }
}