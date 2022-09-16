// var middleNode = function(head) {
//     let slow = head;
//     let fast = head;
    
//     while(fast) {
//         if (!fast.next) break;
//         fast = fast.next.next;
//         slow = slow.next;
//     }
    
//     return slow;
// };
// middleNode(1,2,3,4,5,6);
var middleNode = function(head) {
    let i = head, j = head, length = 0, counter = 1;
    
    while(i){
        i = i.next;
        length++
    }
    
    let mid = Math.floor(length/2);
    
    while(counter <= mid){
          j = j.next;
        counter++;
    }
    return j;
};
middleNode(1,2,3,4,5,6);