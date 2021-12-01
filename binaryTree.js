// Binary Tree
/*
    树的存储结构：
    1.父节点存储结构
    node{
        value: value,
        parent: parent
    }
    子找父容易，父找子须遍历

    2.子连存储结构
    node{
        value: value,
        next: next,
        fchiled: firstChild
    }
    parent -> fchild -> nextchild
    查找子节点和兄弟节点方便，难以查找父节点



                8
        3               10
    1       6               14
        4       7       13
*/

class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}

// 二叉排序树 插入节点方法
let insertNode = (node,newNode)=>{
    if(newNode.value < node.value){
        if(node.left === null){
            node.left = newNode
        }else{
            insertNode(node.left,newNode)
        }
    }else{
        if(node.right === null){
            node.right = newNode
        }else{
            insertNode(node.right, newNode)
        }
    }
}

// 深度遍历 前,中,后
let preOrderSearch = (node)=>{
    if(node!==null){
        console.log(node.value)
        preOrderSearch(node.left)
        preOrderSearch(node.right)
    }
}
let inOrderSearch = (node)=>{
    if(node!==null){
        inOrderSearch(node.left)
        console.log(node.value)
        inOrderSearch(node.right)
    }
}
let postOrderSearch = (node)=>{
    if(node!==null){
        postOrderSearch(node.left)
        postOrderSearch(node.right)
        console.log(node.value)
    }
}

// 广度遍历
let breadthFirstSearch = (node)=>{
    let nodes=[];
    if(node !== null){
       let queue=[];
       queue.unshift(node)
       while(queue.length !=0){
           let item = queue.shift();
           nodes.push(item.value);
           children = [item.left,item.right]
           for(i in children){
               if(children[i] !== null){
                queue.push(children[i])
               }
           }
       }
    }
    return nodes;
}

// queue = []
// nodes = [8,3,10,1,6,14,4,7,13]


// 根据数组生成二叉排序树 left<node<right
function buildTree(arr) {
    root = new Node(arr[0])
    for(i in arr){
        if(i != 0){
            insertNode(root,new Node(arr[i]))
        }
    }
    return root
}

const tree = [8,3,10,1,6,14,4,7,13]

let tree1 = buildTree(tree);
console.log(tree1)
inOrderSearch(tree1)
preOrderSearch(tree1)
postOrderSearch(tree1)
console.log(breadthFirstSearch(tree1))