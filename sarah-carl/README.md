### Binary Search Tree and K-ary Tree Traversals

<!--in your README, write documentation for your data structures
your documentation should includes code block usage examples
provide instructions for:
installing and using your data structure
accessing each method
running your tests -->

####Binary Search Tree 

__.insert(node)__
__.find(value)__
__.remove(value)__

----Time: BigO lg Height
----Space: BigO lg Height 

These methods recurse for the height of the tree.  log 2 height represents a worst case scenario where the tree is full, such that each level is exponentially larger by the power of 2. When this function is invoked it recursively cuts the nodes it must traverse in 1/2 each time, thus log 2 Height.


####K-ary Tree

__.breadthFirstSearch(callback)__
this method takes a callback which will be run on the _value_ of each node in the tree

----Time: BigO H (H being Height or Width (which ever is larger) the function traverses the nodes in the tree level by level

----Space: BigO W (W being the _width_ of the tree-- the width determines the number of nodes pushed to the queue at each level of the tree)


__.find(value)__ 
This method recursively searches the tree for the given value
----Time: BigO(h or w), where h or w are the height or width of the tree (whichever is larger) 
----Space: BigO(h) where h is the height of the tree

__.toString()__   
__.toArray()__   

