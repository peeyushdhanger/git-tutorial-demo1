function rowWithMax1s(arr, n, m){
    // code here
    let col = m-1;
    let row = -1;
    //traversing row by row
    for(let i=0; i<n; i++){
        //last column to first
    for(let j= col; j>=0; j--){
        if(arr[i][j]==1){
            row=i;
            //we will not see same column again
            col--;
        }
        //if you see zero and then skip that row
    else
        {
            break;
        }
    }
}
return row;
}
rowWithMax1s(
[0,1,1,1,
0,0,1,1,
1,1,1,1,
0,0,0,0])
