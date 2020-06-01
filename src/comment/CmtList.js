import React from 'react';
import CmtItem from '../compent/CmtItem'
import '../CSS/CmtList.css'

/* 评论列表组件 
   定义标题
   传递数据给子组件
*/

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
    txtChange=(e)=>{
        let value=e.target.value;
        this.setState({
            text:value
        });

    }

    submit=()=>{

        var obj={
            id:6,
            user:"中国",
            content:""
        }

        obj.content=this.state.text;

        this.state.CommentList.push(obj)
        this.render();

        console.log(this.state.CommentList)

    }
    render(){

        return <div>
           <h1 className='title'>这是评论列表组件</h1>
           { this.state.CommentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)}

           <div className='comment'>
               <input type="text" value={this.state.text} onChange={this.txtChange} ></input>
               <button onClick={this.submit}> 提交</button>
           </div>
        </div>
    }

}