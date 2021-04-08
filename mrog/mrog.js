let mrogs = [
    {
        time: "1617768720000",
        content: "<p>当二分查找用在旋转数组中，如果目标值和中值不匹配，那么就需要在左右半边选择，但是由于中值可能处于左上升或者右上升区间，因此有四种可能性。</p> \
                <p>如果先考虑目标值和中值大小关系，不妨设目标值大于中值，如果中值在左上升区间，则需要选择右半边，但是如果在右上升区间，则无法确定选择。 </p> \
                <p> 因此首先确定中值位置，那么就可以知道一个上升区间，判断目标值是否位于该区间中，就可以进一步二分 </p>\
                <p>当存在重复值时，可以利用中值和左右边界判断是否相等，则可以减少一个半边，如果左右边界值和中值均相等，那么直接向内减少一个边界索引即可。</p>"
    }
] 