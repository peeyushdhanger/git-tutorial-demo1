
// function segregateEvenOdd(head) {
//     var even = null;
//     var odd = null;
//     var e = null; 
//     var o = null;
//     while(head){
//         if(head.data%2==0){
//             if(even==null){
//                 even = head;
//                 e = head;
//             }
//             else{
//                 e.next = head;
//                 e = e.next;
//             }
//         }
//         else{
//             if(odd == null){
//                 odd = head;
//                 o = head;
//             }
//             else{
//                 o.next = head;
//                 o = o.next;
//             }
//         }
//         head = head.next;
//         if(e) e.next = odd;
//         if(o) o.next = null;
//         if(even) return even;
//         return odd;
//     }
// };
// var ans=segregateEvenOdd(17, 19, 15, 2,4,8,6,7)
// console.log(ans)
class Solution {

    divide(N,head){
   
     //code here
   
    let current=head;
    let even;
    let odd;
    let e;
    let o;
    let Even=null;
    let Odd=null;
   
    while(current)
    {
     even=new Node(0,null);
     odd= new Node(0,null);
     if(current.data%2==0)
   {
      even.data=current.data;
      e?e.next=even:Even=even;
      e=even;
     }
     else
     {
      odd.data=current.data;
      o?o.next=odd:Odd=odd;
      o=odd;
     current=current.next;
    }
    if(e)
    {
     e.next=Odd;
    }
    if(o)
    {
     o.next=null
    }
    if(Even)
    {
     return Even
    }
    else
    {
     return Odd;
    }  
}
}  
}
divide(7, [15,17,19,8,3,4,2])