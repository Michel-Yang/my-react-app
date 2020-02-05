import React from 'react';
import CmtItem from '../compent/index'
import '../CSS/CmtList.css'

export default class CmtList extends React.Component{
    constructor(){
        super();

        this.state={
            CommentList:[
                {id:1,user:"张三",content:"哈哈！123"},
                {id:2,user:"王五",content:"哈哈！123"},
                {id:3,user:"赵六",content:"哈哈！123"},
                {id:4,user:"时代",content:"哈哈！123"},
                {id:5,user:"中国",content:"哈哈！123"}
            ]
        }
    }
    render(){

        return <div>
           <h1 className='title'>这是评论列表组件</h1>
           { this.state.CommentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }

}