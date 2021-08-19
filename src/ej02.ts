/*
A Very Big Sum

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

    int ar[n]: an array of integers .

Return

    long: the sum of all array elements


Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005

Output

5000000015

Input (stdin)

    10

    1001458909 1004570889 1007019111 1003302837 1002514638 1006431461
    1002575010 1007514041 1007548981 1004402249

Expected Output

    10047338126

*/
function aVeryBigSum(ar: number[]): number {
    return ar.reduce((c, i) => c + i, 0);

}
console.log(aVeryBigSum([1001458909,1004570889,1007019111,1003302837,1002514638,1006431461,1002575010,1007514041,1007548981,1004402249]));
console.log(aVeryBigSum([1000000001 ,1000000002 ,1000000003 ,1000000004, 1000000005]));
