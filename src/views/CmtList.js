import React from 'react';
import CmtItem from '../compent/CmtItem'
import Comment from '../compent/Comment'
import '../css/CmtList.css'

/* 评论列表组件 
 *  定义标题
 *  传递数据给子组件
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
            ],
            text:'1111'
        }
    }
   /*  获取表单输入值 */
    txtChange=(e)=>{
        let value=e.target.value;
        this.setState({
            text:value
        });
    }

    delItem=(index)=>{
      let {CommentList}=this.state;

      CommentList.splice(index,1);

      this.setState({CommentList})

    }

    submit=(obj)=>{
      

        this.state.CommentList.push(obj)
        this.setState({
            CommentList: this.state.CommentList
        });
    }
    render(){

        return <div>
           <h1 className='title'>这是评论列表组件</h1>

          {/*  渲染评论列表 */}

           { this.state.CommentList.map((item,index)=><CmtItem {...item} key={index} delItem={this.delItem} index={index} ></CmtItem>)}

          {/*  表单提交 */}

          <Comment submit={this.submit}></Comment>
        </div>
    }

}