function findLongestCommonString(str1, str2) {
let longest = "";
let current;
for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++) {
        if(str1[i] === str2[j]) {
            current = str1[i];
            let count = 1;
            while(str1[i + count] === str2[j + count] && (i + count) < str1.length && (j + count) < str2.length) {
                current = current + str1[i + count];
                count++
            }
            if(current.length > longest.length) {
                longest = current;
            }
        }
    }
}
return longest;
}

console.log(findLongestCommonString("abc", "abcfeg"));